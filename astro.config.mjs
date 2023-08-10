import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import pandacss from '@pandacss/dev/astro';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [react(), pandacss()],
	adapter: netlify(),
});
