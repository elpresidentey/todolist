// Convex client setup. Requires env var EXPO_PUBLIC_CONVEX_URL
import { ConvexReactClient, ConvexProvider } from 'convex/react';
const url = process.env.EXPO_PUBLIC_CONVEX_URL;
export const convex = url ? new ConvexReactClient(url) : null;
export { ConvexProvider };

export function requireConvex() {
	if (!convex) {
		throw new Error('Convex URL missing. Set EXPO_PUBLIC_CONVEX_URL in app config/.env');
	}
	return convex;
}

