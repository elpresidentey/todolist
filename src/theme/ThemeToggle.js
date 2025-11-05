import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
	const { themeName, toggle } = useTheme();
	return (
		<Pressable onPress={toggle} accessibilityRole="button" accessibilityLabel="Toggle theme">
			<Ionicons 
				name={themeName === 'dark' ? 'sunny' : 'moon'} 
				size={24} 
				color="white" 
			/>
		</Pressable>
	);
}

