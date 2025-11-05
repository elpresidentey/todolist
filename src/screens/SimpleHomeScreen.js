import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';

export function SimpleHomeScreen() {
	const { theme, themeName, toggle } = useTheme();
	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState([
		{ id: '1', title: 'Complete online JavaScript course', completed: true },
		{ id: '2', title: 'Jog around the park 3x', completed: false },
		{ id: '3', title: '10 minutes meditation', completed: false },
		{ id: '4', title: 'Read for 1 hour', completed: false },
		{ id: '5', title: 'Pick up groceries', completed: false },
		{ id: '6', title: 'Complete Todo App on Frontend Mentor', completed: false }
	]);
	const [filter, setFilter] = useState('all');

	const toggleTodo = (id) => {
		setTodos(prev => prev.map(t => 
			t.id === id ? { ...t, completed: !t.completed } : t
		));
	};

	const deleteTodo = (id) => {
		setTodos(prev => prev.filter(t => t.id !== id));
	};

	const addTodo = () => {
		if (newTodo.trim()) {
			setTodos(prev => [{
				id: Date.now().toString(),
				title: newTodo.trim(),
				completed: false
			}, ...prev]);
			setNewTodo('');
		}
	};

	const filteredTodos = todos.filter(todo => {
		if (filter === 'active') return !todo.completed;
		if (filter === 'completed') return todo.completed;
		return true;
	});

	return (
		<View style={[styles.container, { backgroundColor: theme.background }]}>
			{/* Header with Mountain Background */}
			<ImageBackground
				source={{ uri: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1200' }}
				style={styles.header}
				resizeMode="cover"
			>
				<LinearGradient
					colors={[theme.primary + 'CC', theme.primary + 'EE']}
					style={styles.gradientOverlay}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
				>
					<View style={styles.headerContent}>
						<Text style={styles.title}>T O D O</Text>
						<Pressable onPress={toggle}>
							<Ionicons 
								name={themeName === 'dark' ? 'sunny' : 'moon'} 
								size={24} 
								color="white" 
							/>
						</Pressable>
					</View>
				</LinearGradient>
			</ImageBackground>

			{/* Input */}
			<View style={styles.inputSection}>
				<View style={[styles.inputCard, { backgroundColor: theme.card }]}>
					<TextInput
						placeholder="Create a new todo..."
						placeholderTextColor={theme.mutedText}
						style={[styles.input, { color: theme.text }]}
						value={newTodo}
						onChangeText={setNewTodo}
						onSubmitEditing={addTodo}
					/>
				</View>
			</View>

			{/* Todo List */}
			<View style={styles.listSection}>
				<View style={[styles.todoList, { backgroundColor: theme.card }]}>
					{filteredTodos.map((todo, index) => (
						<View key={todo.id}>
							<View style={styles.todoRow}>
								<Pressable onPress={() => toggleTodo(todo.id)}>
									<Ionicons 
										name={todo.completed ? 'checkmark-circle' : 'ellipse-outline'} 
										size={24} 
										color={theme.primary} 
									/>
								</Pressable>
								<Text style={[
									styles.todoText,
									{ color: todo.completed ? theme.mutedText : theme.text },
									todo.completed && styles.completedText
								]}>
									{todo.title}
								</Text>
								<Pressable onPress={() => deleteTodo(todo.id)}>
									<Ionicons name="close" size={20} color={theme.mutedText} />
								</Pressable>
							</View>
							{index < filteredTodos.length - 1 && <View style={[styles.separator, { backgroundColor: theme.divider }]} />}
						</View>
					))}

					{/* Footer */}
					<View style={styles.footer}>
						<Text style={[styles.footerText, { color: theme.mutedText }]}>
							{todos.filter(t => !t.completed).length} items left
						</Text>
						
						<View style={styles.filterButtons}>
							<Pressable onPress={() => setFilter('all')}>
								<Text style={[
									styles.filterText, 
									{ color: filter === 'all' ? theme.primary : theme.mutedText }
								]}>
									All
								</Text>
							</Pressable>
							<Pressable onPress={() => setFilter('active')}>
								<Text style={[
									styles.filterText, 
									{ color: filter === 'active' ? theme.primary : theme.mutedText }
								]}>
									Active
								</Text>
							</Pressable>
							<Pressable onPress={() => setFilter('completed')}>
								<Text style={[
									styles.filterText, 
									{ color: filter === 'completed' ? theme.primary : theme.mutedText }
								]}>
									Completed
								</Text>
							</Pressable>
						</View>

						<Pressable onPress={() => setTodos(prev => prev.filter(t => !t.completed))}>
							<Text style={[styles.footerText, { color: theme.mutedText }]}>Clear Completed</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 280,
		width: '100%',
	},
	gradientOverlay: {
		flex: 1,
		paddingTop: 80,
		paddingHorizontal: 24,
		justifyContent: 'flex-start',
	},
	headerContent: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 48,
		fontWeight: '700',
		letterSpacing: 12,
		color: 'white',
		textAlign: 'center',
		flex: 1,
	},
	inputSection: {
		paddingHorizontal: 24,
		marginTop: -30,
	},
	inputCard: {
		borderRadius: 8,
		paddingHorizontal: 20,
		height: 56,
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
	},
	input: {
		fontSize: 16,
	},
	listSection: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 20,
	},
	todoList: {
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
	},
	todoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		gap: 16,
	},
	todoText: {
		flex: 1,
		fontSize: 16,
	},
	completedText: {
		textDecorationLine: 'line-through',
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
	},
	footerText: {
		fontSize: 14,
	},
	filterButtons: {
		flexDirection: 'row',
		gap: 16,
	},
	filterText: {
		fontSize: 14,
	},
});