import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Appearance, Easing, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const STORAGE_KEY = 'todoapp.theme';

const light = {
	name: 'light',
	background: '#F6F7FB',
	gradientStart: '#A855F7',
	gradientEnd: '#3B82F6',
	card: '#FFFFFF',
	text: '#1F2340',
	mutedText: '#8B8FA3',
	primary: '#6D5DF6',
	divider: 'rgba(0,0,0,0.08)',
	overlay: 'rgba(255,255,255,0.9)'
};

const dark = {
	name: 'dark',
	background: '#0F1221',
	gradientStart: '#7C3AED',
	gradientEnd: '#1E40AF',
	card: 'rgba(26,30,51,0.8)',
	text: '#E8EAED',
	mutedText: '#9AA0B4',
	primary: '#7C87FF',
	divider: 'rgba(255,255,255,0.08)',
	overlay: 'rgba(15,18,33,0.9)'
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
	const system = useColorScheme();
	const [themeName, setThemeName] = useState('light');
	const [ready, setReady] = useState(false);
	const progress = useSharedValue(1);

	useEffect(() => {
		(async () => {
			const saved = await AsyncStorage.getItem(STORAGE_KEY);
			setThemeName(saved || system || 'light');
			setReady(true);
		})();
	}, [system]);

	const theme = themeName === 'dark' ? dark : light;

	const toggle = async () => {
		const next = themeName === 'dark' ? 'light' : 'dark';
		progress.value = 0;
		progress.value = withTiming(1, { duration: 350, easing: Easing.out(Easing.quad) });
		setThemeName(next);
		await AsyncStorage.setItem(STORAGE_KEY, next);
	};

	const value = useMemo(() => ({ theme, themeName, toggle }), [theme, themeName]);

	const fade = useAnimatedStyle(() => ({ opacity: progress.value }));

	if (!ready) return null;

	return (
		<ThemeContext.Provider value={value}>
			<Animated.View style={[{ flex: 1, backgroundColor: theme.background }, fade]}>
				{children}
			</Animated.View>
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
	return ctx;
}

