import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://viniciuscosta89.github.io',
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
