import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://viniciuscosta89.github.io',
    integrations: [react(), sentry(), spotlightjs()],
    vite: {
        plugins: [tailwindcss()],
    },
});