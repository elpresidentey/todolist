import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
	const { themeName, theme, toggle } = useTheme();
	return (
		<Pressable onPress={toggle} accessibilityRole="button" accessibilityLabel="Toggle theme">
			<Ionicons name={themeName === 'dark' ? 'moon' : 'sunny'} size={24} color={theme.text} />
		</Pressable>
	);
}

