import { defineConfig, squooshImageService } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), astroI18next()],
	i18n: {
		defaultLocale: 'en-US',
		locales: ['en-US', 'pt-BR'],
	},
	image: {
		service: squooshImageService(),
	},
});
