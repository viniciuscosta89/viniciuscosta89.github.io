import react from '@astrojs/react';
import sentry from '@sentry/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://viniciuscosta89.github.io',
	integrations: [
		react(),
		sentry({
			// Static output: nothing runs on a server at runtime, so only the browser SDK is needed.
			enabled: { client: true, server: false },
			org: 'vinicius-costa-5w',
			project: 'viniciuscosta89-github-io',
			// Source maps are only uploaded when this is set (e.g. in CI).
			authToken: process.env.SENTRY_AUTH_TOKEN,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
