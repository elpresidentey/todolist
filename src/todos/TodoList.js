import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { AddTodoModal } from './AddTodoModal';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function TodoList({ search, newTodo, onClearNewTodo }) {
	const { theme } = useTheme();
	const [filter, setFilter] = useState('all');
	const [editingTodo, setEditingTodo] = useState(null);
	const [showAddModal, setShowAddModal] = useState(false);

	// Convex hooks
	const todos = useQuery(api.todos.listTodos, { search, filter }) || [];
	const createTodo = useMutation(api.todos.createTodo);
	const updateTodo = useMutation(api.todos.updateTodo);
	const deleteTodo = useMutation(api.todos.deleteTodo);
	const reorderTodos = useMutation(api.todos.reorder);

	const sourceItems = todos;

	const filtered = useMemo(() => {
		const q = search?.toLowerCase?.() || '';
		let result = sourceItems.filter(i => {
			const title = (i.title || '').toLowerCase();
			const description = (i.description || '').toLowerCase();
			const matches = title.includes(q) || description.includes(q);
			if (filter === 'active') return matches && !i.completed;
			if (filter === 'completed') return matches && i.completed;
			return matches;
		});

		// Sort by completion status, then by due date, then by order/creation
		return result.sort((a, b) => {
			if (a.completed !== b.completed) {
				return a.completed ? 1 : -1;
			}
			if (a.dueDate && b.dueDate) {
				return a.dueDate - b.dueDate;
			}
			if (a.dueDate && !b.dueDate) return -1;
			if (!a.dueDate && b.dueDate) return 1;
			return (a.order || 0) - (b.order || 0);
		});
	}, [sourceItems, search, filter]);

	const handleSaveTodo = async (todoData) => {
		try {
			if (editingTodo) {
				// Update existing todo
				await updateTodo({ 
					id: editingTodo._id,
					...todoData 
				});
				setEditingTodo(null);
			} else {
				// Create new todo
				await createTodo(todoData);
			}
		} catch (error) {
			Alert.alert('Error', 'Failed to save todo. Please try again.');
		}
	};

	const handleToggleTodo = async (id) => {
		try {
			const todo = sourceItems.find(t => t._id === id);
			if (todo) {
				await updateTodo({ 
					id: id,
					completed: !todo.completed 
				});
			}
		} catch (error) {
			Alert.alert('Error', 'Failed to update todo. Please try again.');
		}
	};

	const handleDeleteTodo = async (id) => {
		try {
			await deleteTodo({ id });
		} catch (error) {
			Alert.alert('Error', 'Failed to delete todo. Please try again.');
		}
	};

	const handleEditTodo = (todo) => {
		setEditingTodo(todo);
		setShowAddModal(true);
	};

	const handleClearCompleted = async () => {
		const completedTodos = sourceItems.filter(t => t.completed);
		if (completedTodos.length === 0) return;

		Alert.alert(
			'Clear Completed',
			`Delete ${completedTodos.length} completed todo${completedTodos.length > 1 ? 's' : ''}?`,
			[
				{ text: 'Cancel', style: 'cancel' },
				{ 
					text: 'Delete', 
					style: 'destructive', 
					onPress: async () => {
						try {
							await Promise.all(
								completedTodos.map(t => deleteTodo({ id: t._id }))
							);
						} catch (error) {
							Alert.alert('Error', 'Failed to clear completed todos.');
						}
					}
				}
			]
		);
	};

	const addTodoFromInput = async () => {
		if (newTodo && newTodo.trim()) {
			const todoData = { title: newTodo.trim() };
			await handleSaveTodo(todoData);
			onClearNewTodo();
		}
	};

	const handleDragEnd = async ({ data }) => {
		try {
			const orderedIds = data.map(item => item._id);
			await reorderTodos({ orderedIds });
		} catch (error) {
			Alert.alert('Error', 'Failed to reorder todos.');
		}
	};

	// Show loading state while todos are being fetched
	if (todos === undefined) {
		return (
			<View style={[styles.container, styles.centerContent]}>
				<ActivityIndicator size="large" color={theme.primary} />
			</View>
		);
	}

	const renderTodoItem = ({ item, drag, isActive }) => (
		<ScaleDecorator>
			<Pressable
				onLongPress={drag}
				disabled={isActive}
				style={[
					styles.todoRow,
					isActive && { backgroundColor: theme.background }
				]}
			>
				<Pressable onPress={() => handleToggleTodo(item._id)}>
					<Ionicons 
						name={item.completed ? 'checkmark-circle' : 'ellipse-outline'} 
						size={24} 
						color={theme.primary} 
					/>
				</Pressable>
				<Pressable 
					onPress={() => handleEditTodo(item)}
					style={styles.todoTextContainer}
				>
					<Text style={[
						styles.todoText, 
						{ 
							color: item.completed ? theme.mutedText : theme.text,
							textDecorationLine: item.completed ? 'line-through' : 'none'
						}
					]}>
						{item.title}
					</Text>
					{item.description && (
						<Text style={[styles.todoDescription, { color: theme.mutedText }]} numberOfLines={1}>
							{item.description}
						</Text>
					)}
					{item.dueDate && (
						<Text style={[styles.todoDueDate, { color: theme.mutedText }]}>
							Due: {new Date(item.dueDate).toLocaleDateString()}
						</Text>
					)}
				</Pressable>
				<Pressable onPress={() => handleDeleteTodo(item._id)}>
					<Ionicons name="close" size={20} color={theme.mutedText} />
				</Pressable>
			</Pressable>
		</ScaleDecorator>
	);

	return (
		<GestureHandlerRootView style={styles.container}>
			{/* Current Todo Being Typed */}
			{newTodo && newTodo.trim() && (
				<View style={[styles.currentTodoCard, { backgroundColor: theme.card }]}>
					<Pressable 
						onPress={addTodoFromInput}
						style={styles.currentTodoRow}
					>
						<Ionicons name="ellipse-outline" size={24} color={theme.primary} />
						<Text style={[styles.currentTodoText, { color: theme.text }]}>
							{newTodo}
						</Text>
						<Pressable onPress={onClearNewTodo}>
							<Ionicons name="close" size={20} color={theme.mutedText} />
						</Pressable>
					</Pressable>
				</View>
			)}

			{/* Todo List */}
			<View style={[styles.listContainer, { backgroundColor: theme.card }]}>
				{filtered.length === 0 ? (
					<View style={styles.emptyState}>
						<Ionicons name="checkbox-outline" size={64} color={theme.mutedText} />
						<Text style={[styles.emptyText, { color: theme.mutedText }]}>
							{filter === 'completed' ? 'No completed todos' : 
							 filter === 'active' ? 'No active todos' : 
							 'No todos yet. Create one!'}
						</Text>
					</View>
				) : (
					<DraggableFlatList
						data={filtered}
						renderItem={renderTodoItem}
						keyExtractor={item => item._id}
						onDragEnd={handleDragEnd}
						ItemSeparatorComponent={() => (
							<View style={[styles.separator, { backgroundColor: theme.divider }]} />
						)}
					/>
				)}

				{/* Footer */}
				<View style={styles.footer}>
					<Text style={[styles.footerText, { color: theme.mutedText }]}>
						{sourceItems.filter(i => !i.completed).length} items left
					</Text>
					
					<View style={styles.filterButtons}>
						<FilterButton 
							label="All" 
							active={filter === 'all'} 
							onPress={() => setFilter('all')} 
						/>
						<FilterButton 
							label="Active" 
							active={filter === 'active'} 
							onPress={() => setFilter('active')} 
						/>
						<FilterButton 
							label="Completed" 
							active={filter === 'completed'} 
							onPress={() => setFilter('completed')} 
						/>
					</View>

					{sourceItems.some(i => i.completed) && (
						<Pressable onPress={handleClearCompleted}>
							<Text style={[styles.clearButton, { color: theme.mutedText }]}>
								Clear Completed
							</Text>
						</Pressable>
					)}
				</View>
			</View>

			{/* Drag and drop hint */}
			<Text style={[styles.dragHint, { color: theme.mutedText }]}>
				Long press and drag to reorder todos
			</Text>

			{/* Floating Add Button */}
			<Pressable 
				style={[styles.fab, { backgroundColor: theme.primary }]}
				onPress={() => setShowAddModal(true)}
			>
				<Ionicons name="add" size={28} color="white" />
			</Pressable>

			{/* Add/Edit Todo Modal */}
			<AddTodoModal
				visible={showAddModal}
				onClose={() => {
					setShowAddModal(false);
					setEditingTodo(null);
				}}
				onSave={handleSaveTodo}
				editingTodo={editingTodo}
			/>
		</GestureHandlerRootView>
	);
}

function FilterButton({ label, active, onPress }) {
	const { theme } = useTheme();
	return (
		<Pressable onPress={onPress}>
			<Text style={[
				styles.filterButtonText, 
				{ color: active ? theme.primary : theme.mutedText }
			]}>
				{label}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
	centerContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	currentTodoCard: {
		borderRadius: 8,
		marginBottom: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	currentTodoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		gap: 16,
	},
	currentTodoText: {
		flex: 1,
		fontSize: 16,
		fontWeight: '400',
	},
	listContainer: {
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
		marginBottom: 80,
		minHeight: 300,
	},
	emptyState: {
		paddingVertical: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	emptyText: {
		fontSize: 16,
		fontWeight: '400',
		marginTop: 16,
	},
	todoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		gap: 16,
	},
	todoTextContainer: {
		flex: 1,
	},
	todoText: {
		fontSize: 16,
		fontWeight: '400',
	},
	todoDescription: {
		fontSize: 14,
		fontWeight: '400',
		marginTop: 4,
	},
	todoDueDate: {
		fontSize: 12,
		fontWeight: '400',
		marginTop: 4,
	},
	separator: {
		height: 1,
		marginHorizontal: 20,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.05)',
	},
	footerText: {
		fontSize: 14,
		fontWeight: '400',
	},
	filterButtons: {
		flexDirection: 'row',
		gap: 16,
	},
	filterButtonText: {
		fontSize: 14,
		fontWeight: '500',
	},
	clearButton: {
		fontSize: 14,
		fontWeight: '400',
	},
	dragHint: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '400',
		marginTop: 16,
	},
	fab: {
		position: 'absolute',
		right: 40,
		bottom: 40,
		width: 56,
		height: 56,
		borderRadius: 28,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
});

