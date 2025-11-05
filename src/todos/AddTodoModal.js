import React, { useState, useEffect } from 'react';
import { 
	View, 
	Text, 
	TextInput, 
	Pressable, 
	StyleSheet, 
	Modal, 
	ScrollView,
	Alert,
	Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';

export function AddTodoModal({ visible, onClose, onSave, editingTodo = null }) {
	const { theme } = useTheme();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState(null);
	const [showDatePicker, setShowDatePicker] = useState(false);

	useEffect(() => {
		if (editingTodo) {
			setTitle(editingTodo.title || '');
			setDescription(editingTodo.description || '');
			setDueDate(editingTodo.dueDate || null);
		} else {
			setTitle('');
			setDescription('');
			setDueDate(null);
		}
	}, [editingTodo, visible]);

	const handleSave = () => {
		if (!title.trim()) {
			Alert.alert('Error', 'Please enter a title for your todo');
			return;
		}

		onSave({
			title: title.trim(),
			description: description.trim() || undefined,
			dueDate: dueDate || undefined,
		});

		// Reset form
		setTitle('');
		setDescription('');
		setDueDate(null);
		onClose();
	};

	const formatDateForDisplay = (timestamp) => {
		if (!timestamp) return 'Set due date';
		const date = new Date(timestamp);
		return date.toLocaleDateString('en-US', { 
			weekday: 'short',
			month: 'short', 
			day: 'numeric',
			year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
		});
	};

	const getQuickDateOptions = () => {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 1);
		const nextWeek = new Date(today);
		nextWeek.setDate(today.getDate() + 7);

		return [
			{ label: 'Today', date: today },
			{ label: 'Tomorrow', date: tomorrow },
			{ label: 'Next Week', date: nextWeek },
		];
	};

	return (
		<Modal
			visible={visible}
			animationType="slide"
			presentationStyle="pageSheet"
			onRequestClose={onClose}
		>
			<View style={[styles.container, { backgroundColor: theme.background }]}>
				<View style={styles.header}>
					<Pressable onPress={onClose} style={styles.headerButton}>
						<Text style={[styles.headerButtonText, { color: theme.mutedText }]}>
							Cancel
						</Text>
					</Pressable>
					<Text style={[styles.headerTitle, { color: theme.text }]}>
						{editingTodo ? 'Edit Todo' : 'New Todo'}
					</Text>
					<Pressable onPress={handleSave} style={styles.headerButton}>
						<Text style={[styles.headerButtonText, { color: theme.primary }]}>
							Save
						</Text>
					</Pressable>
				</View>

				<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
					<View style={[styles.inputCard, { backgroundColor: theme.card }]}>
						<Text style={[styles.label, { color: theme.text }]}>Title</Text>
						<TextInput
							value={title}
							onChangeText={setTitle}
							placeholder="Enter todo title..."
							placeholderTextColor={theme.mutedText}
							style={[styles.input, { color: theme.text }]}
							multiline
							autoFocus
						/>
					</View>

					<View style={[styles.inputCard, { backgroundColor: theme.card }]}>
						<Text style={[styles.label, { color: theme.text }]}>Description</Text>
						<TextInput
							value={description}
							onChangeText={setDescription}
							placeholder="Add description (optional)..."
							placeholderTextColor={theme.mutedText}
							style={[styles.input, styles.textArea, { color: theme.text }]}
							multiline
							numberOfLines={4}
						/>
					</View>

					<View style={[styles.inputCard, { backgroundColor: theme.card }]}>
						<Text style={[styles.label, { color: theme.text }]}>Due Date</Text>
						
						<Pressable 
							style={[styles.dateButton, { borderColor: theme.divider }]}
							onPress={() => setShowDatePicker(!showDatePicker)}
						>
							<Ionicons 
								name="calendar-outline" 
								size={20} 
								color={dueDate ? theme.primary : theme.mutedText} 
							/>
							<Text style={[
								styles.dateButtonText, 
								{ color: dueDate ? theme.text : theme.mutedText }
							]}>
								{formatDateForDisplay(dueDate)}
							</Text>
							{dueDate && (
								<Pressable 
									onPress={() => setDueDate(null)}
									style={styles.clearButton}
								>
									<Ionicons name="close-circle" size={20} color={theme.mutedText} />
								</Pressable>
							)}
						</Pressable>

						{showDatePicker && (
							<View style={styles.quickDates}>
								{getQuickDateOptions().map((option, index) => (
									<Pressable
										key={index}
										style={[styles.quickDateButton, { backgroundColor: theme.background }]}
										onPress={() => {
											setDueDate(option.date.getTime());
											setShowDatePicker(false);
										}}
									>
										<Text style={[styles.quickDateText, { color: theme.text }]}>
											{option.label}
										</Text>
									</Pressable>
								))}
							</View>
						)}
					</View>
				</ScrollView>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingTop: Platform.OS === 'ios' ? 60 : 20,
		paddingBottom: 20,
	},
	headerButton: {
		minWidth: 60,
	},
	headerButtonText: {
		fontSize: 16,
		fontWeight: '600',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '700',
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	inputCard: {
		borderRadius: 12,
		padding: 16,
		marginBottom: 16,
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		marginBottom: 8,
	},
	input: {
		fontSize: 16,
		lineHeight: 22,
		minHeight: 22,
	},
	textArea: {
		minHeight: 80,
		textAlignVertical: 'top',
	},
	dateButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderRadius: 8,
	},
	dateButtonText: {
		flex: 1,
		fontSize: 16,
	},
	clearButton: {
		padding: 4,
	},
	quickDates: {
		marginTop: 12,
		gap: 8,
	},
	quickDateButton: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 8,
		alignItems: 'center',
	},
	quickDateText: {
		fontSize: 16,
		fontWeight: '500',
	},
});