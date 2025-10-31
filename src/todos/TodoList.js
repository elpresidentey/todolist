import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { convex as convexClient } from '../convex/client';

// NOTE: For offline demo, we keep local state. When EXPO_PUBLIC_CONVEX_URL is provided,
// wire these methods to Convex queries/mutations instead.

export function TodoList({ search }) {
	const { theme } = useTheme();
	const [items, setItems] = useState([
		{ id: '1', title: 'Jog around the park 3x', completed: false },
		{ id: '2', title: '10 minutes meditation', completed: false },
		{ id: '3', title: 'Read for 1 hour', completed: false }
	]);
	const [newTitle, setNewTitle] = useState('');
	const [filter, setFilter] = useState('all');

	// Convex hooks (only usable when provider/client is available)
	const remoteList = convexClient ? useQuery(api.todos.listTodos, { search, filter }) : undefined;
	const create = convexClient ? useMutation(api.todos.createTodo) : null;
	const update = convexClient ? useMutation(api.todos.updateTodo) : null;
	const removeMutation = convexClient ? useMutation(api.todos.deleteTodo) : null;
	const reorderMutation = convexClient ? useMutation(api.todos.reorder) : null;

	const sourceItems = remoteList ?? items;

	const filtered = useMemo(() => {
		const q = search?.toLowerCase?.() || '';
		return sourceItems.filter(i => {
			const title = (i.title || '').toLowerCase();
			const matches = title.includes(q);
			if (filter === 'active') return matches && !i.completed;
			if (filter === 'completed') return matches && i.completed;
			return matches;
		});
	}, [sourceItems, search, filter]);

	async function addTodo() {
		if (!newTitle.trim()) return;
		const title = newTitle.trim();
		if (create) {
			await create({ title });
		} else {
			setItems(prev => [{ id: Date.now().toString(), title, completed: false }, ...prev]);
		}
		setNewTitle('');
	}

	async function toggle(id) {
		if (update) {
			const current = sourceItems.find(t => t._id ? t._id === id : t.id === id);
			const convexId = current?._id || id; // when from Convex, docs have _id
			await update({ id: convexId, completed: !current?.completed });
		} else {
			setItems(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
		}
	}

	async function remove(id) {
		if (removeMutation) {
			const current = sourceItems.find(t => t._id ? t._id === id : t.id === id);
			await removeMutation({ id: current?._id || id });
		} else {
			setItems(prev => prev.filter(t => t.id !== id));
		}
	}

	return (
		<View style={{ flex: 1, marginTop: 16 }}>
			<View style={[styles.card, { backgroundColor: theme.card, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 6 }]}> 
				<TextInput
					value={newTitle}
					onChangeText={setNewTitle}
					placeholder="Create a new todo..."
					placeholderTextColor={theme.mutedText}
					style={[styles.input, { color: theme.text }]}
					onSubmitEditing={addTodo}
				/>
			</View>

			<View style={[styles.card, { backgroundColor: theme.card, padding: 0, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 8 }, elevation: 8 }]}> 
				<DraggableFlatList
					data={filtered}
					keyExtractor={(item) => (item._id ?? item.id)}
					renderItem={({ item, drag, isActive }) => (
						<View style={[styles.row, { backgroundColor: theme.card }]}> 
						<Pressable onPress={() => toggle(item._id ?? item.id)} accessibilityRole="checkbox" accessibilityState={{ checked: item.completed }}>
								<Ionicons name={item.completed ? 'checkmark-circle' : 'ellipse-outline'} size={24} color={theme.primary} />
							</Pressable>
							<Text style={[styles.title, { color: item.completed ? theme.mutedText : theme.text, textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
								{item.title}
							</Text>
							<View style={{ flexDirection: 'row', gap: 12 }}>
								<Pressable onLongPress={drag} accessible accessibilityLabel="Reorder" accessibilityHint="Long press and drag to reorder">
									<Ionicons name="reorder-three" size={22} color={theme.mutedText} />
								</Pressable>
								<Pressable onPress={() => remove(item._id ?? item.id)} accessibilityRole="button" accessibilityLabel="Delete todo">
									<Ionicons name="close" size={20} color={theme.mutedText} />
								</Pressable>
							</View>
						</View>
					)}
					onDragEnd={async ({ data }) => {
						if (reorderMutation) {
							const orderedIds = data.map(d => d._id);
							await reorderMutation({ orderedIds });
						} else {
							setItems(data);
						}
					}}
					ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: theme.divider }} />}
					contentContainerStyle={{ paddingBottom: 100 }}
				/>
				<View style={[styles.footer]}> 
					<Text style={{ color: theme.mutedText }}>{sourceItems.filter(i => !i.completed).length} items left</Text>
					<View style={{ flexDirection: 'row', gap: 16 }}>
						<FooterButton label="All" active={filter==='all'} onPress={() => setFilter('all')} />
						<FooterButton label="Active" active={filter==='active'} onPress={() => setFilter('active')} />
						<FooterButton label="Completed" active={filter==='completed'} onPress={() => setFilter('completed')} />
					</View>
					<Pressable onPress={async () => {
						if (removeMutation && sourceItems.some(i => i.completed)) {
							// batch delete completed
							for (const t of sourceItems) {
								if (t.completed) await removeMutation({ id: t._id });
							}
						} else {
							setItems(prev => prev.filter(i => !i.completed));
						}
					}}>
						<Text style={{ color: theme.mutedText }}>Clear Completed</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

function FooterButton({ label, active, onPress }) {
	const { theme } = useTheme();
	return (
		<Pressable onPress={onPress}>
			<Text style={{ color: active ? theme.primary : theme.mutedText, fontWeight: active ? '700' : '500' }}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	card: {
		marginHorizontal: 24,
		borderRadius: 14,
		padding: 16,
		marginBottom: 16
	},
	input: { fontSize: 16, fontWeight: '600' },
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		paddingHorizontal: 16,
		height: 58
	},
	title: { flex: 1, fontSize: 16 },
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16
	}
});

