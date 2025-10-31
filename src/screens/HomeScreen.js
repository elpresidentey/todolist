import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { TodoList } from '../todos/TodoList';
import { ThemeToggle } from '../theme/ThemeToggle';

export function HomeScreen() {
	const { theme } = useTheme();
	const [query, setQuery] = useState('');

	return (
		<View style={[styles.container]}>
			<View style={styles.header}> 
				<Text style={[styles.title, { color: theme.text }]}>TODO</Text>
				<ThemeToggle />
			</View>

			<View style={[styles.inputCard, { backgroundColor: theme.card, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 6 }]}> 
				<TextInput
					placeholder="Create a new todo..."
					placeholderTextColor={theme.mutedText}
					style={[styles.input, { color: theme.text }]}
					value={query}
					onChangeText={setQuery}
				/>
			</View>

			<TodoList search={query} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	header: {
		paddingTop: 48,
		paddingHorizontal: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: { fontSize: 44, fontWeight: '800', letterSpacing: 10 },
	inputCard: {
		marginTop: 20,
		marginHorizontal: 24,
		borderRadius: 14,
		paddingHorizontal: 18,
		height: 58,
		justifyContent: 'center'
	},
	input: { fontSize: 16, fontWeight: '600' }
});

