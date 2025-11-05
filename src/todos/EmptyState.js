import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';

export function EmptyState({ type = 'all', search }) {
	const { theme } = useTheme();

	const getEmptyStateContent = () => {
		if (search) {
			return {
				icon: 'search-outline',
				title: 'No results found',
				subtitle: `No todos match "${search}"`
			};
		}

		switch (type) {
			case 'active':
				return {
					icon: 'checkmark-done-outline',
					title: 'All caught up!',
					subtitle: 'No active todos remaining'
				};
			case 'completed':
				return {
					icon: 'trophy-outline',
					title: 'No completed todos',
					subtitle: 'Complete some todos to see them here'
				};
			default:
				return {
					icon: 'list-outline',
					title: 'No todos yet',
					subtitle: 'Tap the + button to create your first todo'
				};
		}
	};

	const { icon, title, subtitle } = getEmptyStateContent();

	return (
		<View style={styles.container}>
			<Ionicons name={icon} size={64} color={theme.mutedText} />
			<Text style={[styles.title, { color: theme.text }]}>{title}</Text>
			<Text style={[styles.subtitle, { color: theme.mutedText }]}>{subtitle}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
		paddingVertical: 60,
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		marginTop: 16,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 16,
		marginTop: 8,
		textAlign: 'center',
		lineHeight: 22,
	},
});