import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from './theme/ThemeProvider';
import { HomeScreen } from './screens/HomeScreen';
import { ConvexProvider, convex } from './convex/client';

export default function App() {
	const content = (
		<ThemeProvider>
			<StatusBar translucent barStyle="light-content" />
			<SafeAreaView style={{ flex: 1 }}>
				<HomeScreen />
			</SafeAreaView>
		</ThemeProvider>
	);
	return convex ? <ConvexProvider client={convex}>{content}</ConvexProvider> : content;
}

