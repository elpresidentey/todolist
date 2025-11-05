import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';

export function TodoItem({ item, onToggle, onDelete, onEdit, drag, isActive }) {
	const { theme } = useTheme();
	const [showDetails, setShowDetails] = useState(false);

	const formatDate = (timestamp) => {
		if (!timestamp) return null;
		const date = new Date(timestamp);
		return date.toLocaleDateString('en-US', { 
			month: 'short', 
			day: 'numeric',
			year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
		});
	};

	const isOverdue = item.dueDate && !item.completed && new Date(item.dueDate) < new Date();
	const isDueSoon = item.dueDate && !item.completed && 
		new Date(item.dueDate) < new Date(Date.now() + 24 * 60 * 60 * 1000);

	const handleDelete = () => {
		Alert.alert(
			'Delete Todo',
			'Are you sure you want to delete this todo?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{ text: 'Delete', style: 'destructive', onPress: onDelete }
			]
		);
	};

	return (
		<View style={[styles.container, { backgroundColor: theme.card }]}>
			<View style={styles.row}>
				<Pressable 
					onPress={onToggle} 
					accessibilityRole="checkbox" 
					accessibilityState={{ checked: item.completed }}
					style={styles.checkbox}
				>
					<Ionicons 
						name={item.completed ? 'checkmark-circle' : 'ellipse-outline'} 
						size={24} 
						color={item.completed ? theme.primary : theme.mutedText} 
					/>
				</Pressable>

				<Pressable 
					style={styles.content} 
					onPress={() => setShowDetails(!showDetails)}
					onLongPress={onEdit}
				>
					<Text style={[
						styles.title, 
						{ 
							color: item.completed ? theme.mutedText : theme.text,
							textDecorationLine: item.completed ? 'line-through' : 'none'
						}
					]}>
						{item.title}
					</Text>
					
					{item.description && (
						<Text 
							style={[styles.description, { color: theme.mutedText }]}
							numberOfLines={showDetails ? undefined : 1}
						>
							{item.description}
						</Text>
					)}

					{item.dueDate && (
						<View style={styles.dateContainer}>
							<Ionicons 
								name="calendar-outline" 
								size={14} 
								color={isOverdue ? '#FF6B6B' : isDueSoon ? '#FFB347' : theme.mutedText} 
							/>
							<Text style={[
								styles.dateText, 
								{ 
									color: isOverdue ? '#FF6B6B' : isDueSoon ? '#FFB347' : theme.mutedText 
								}
							]}>
								{formatDate(item.dueDate)}
							</Text>
						</View>
					)}
				</Pressable>

				<View style={styles.actions}>
					<Pressable 
						onLongPress={drag} 
						accessible 
						accessibilityLabel="Reorder" 
						accessibilityHint="Long press and drag to reorder"
						style={styles.actionButton}
					>
						<Ionicons name="reorder-three" size={22} color={theme.mutedText} />
					</Pressable>
					<Pressable 
						onPress={handleDelete} 
						accessibilityRole="button" 
						accessibilityLabel="Delete todo"
						style={styles.actionButton}
					>
						<Ionicons name="trash-outline" size={20} color={theme.mutedText} />
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 12,
	},
	checkbox: {
		paddingTop: 2,
	},
	content: {
		flex: 1,
		gap: 4,
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
		lineHeight: 22,
	},
	description: {
		fontSize: 14,
		lineHeight: 20,
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		marginTop: 2,
	},
	dateText: {
		fontSize: 12,
		fontWeight: '500',
	},
	actions: {
		flexDirection: 'row',
		gap: 8,
	},
	actionButton: {
		padding: 4,
	},
});