
import React from 'react';
import { SimpleHomeScreen } from './screens/SimpleHomeScreen';
import { ThemeProvider } from './theme/ThemeProvider';

export default function App() {
	return (
		<ThemeProvider>
			<SimpleHomeScreen />
		</ThemeProvider>
	);
}
