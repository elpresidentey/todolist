import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
import { TodoList } from '../todos/TodoList';
import { ThemeToggle } from '../theme/ThemeToggle';

export function HomeScreen() {
	const { theme, themeName } = useTheme();
	const [newTodo, setNewTodo] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);

	return (
		<View style={[styles.container, { backgroundColor: theme.background }]}>
			<StatusBar 
				barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={theme.background}
			/>
			
			{/* Header with Gradient-like Background */}
			<View style={[styles.gradientBackground, { backgroundColor: theme.primary }]}>
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.title}>T O D O</Text>
					<View style={styles.headerActions}>
						<Pressable onPress={() => setShowSearch(!showSearch)} style={styles.searchButton}>
							<Ionicons name={showSearch ? "close" : "search"} size={24} color="white" />
						</Pressable>
						<ThemeToggle />
					</View>
				</View>

				{/* Search Input - Conditionally Shown */}
				{showSearch && (
					<View style={styles.inputSection}>
						<View style={[styles.inputCard, { backgroundColor: theme.card }]}>
							<Ionicons name="search" size={20} color={theme.mutedText} />
							<TextInput
								placeholder="Search todos..."
								placeholderTextColor={theme.mutedText}
								style={[styles.input, { color: theme.text }]}
								value={searchQuery}
								onChangeText={setSearchQuery}
								autoFocus
							/>
							{searchQuery.length > 0 && (
								<Pressable onPress={() => setSearchQuery('')}>
									<Ionicons name="close-circle" size={20} color={theme.mutedText} />
								</Pressable>
							)}
						</View>
					</View>
				)}

				{/* Main Input - Always Shown */}
				{!showSearch && (
					<View style={styles.inputSection}>
						<View style={[styles.inputCard, { backgroundColor: theme.card }]}>
							<TextInput
								placeholder={newTodo ? "Currently typing" : "Create a new todo..."}
								placeholderTextColor={theme.mutedText}
								style={[styles.input, { color: theme.text }]}
								value={newTodo}
								onChangeText={setNewTodo}
							/>
						</View>
					</View>
				)}
			</View>

			{/* Todo List Section */}
			<View style={[styles.listSection, { backgroundColor: theme.background }]}>
				<TodoList search={searchQuery} newTodo={newTodo} onClearNewTodo={() => setNewTodo('')} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { 
		flex: 1,
		backgroundColor: '#F6F7FB'
	},
	gradientBackground: {
		height: 280,
		paddingTop: 20,
	},
	header: {
		paddingTop: 60,
		paddingHorizontal: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 40,
	},
	title: { 
		fontSize: 48, 
		fontWeight: '700', 
		letterSpacing: 12,
		color: 'white',
		textAlign: 'center',
		flex: 1,
	},
	headerActions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	searchButton: {
		padding: 8,
	},
	inputSection: {
		paddingHorizontal: 24,
		marginBottom: 20,
	},
	inputCard: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 8,
		paddingHorizontal: 20,
		height: 56,
		gap: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
	},
	input: { 
		flex: 1,
		fontSize: 16, 
		fontWeight: '400',
	},
	listSection: {
		flex: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		marginTop: -20,
		paddingTop: 20,
	}
});

