/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: 'en-US',
	locales: ['en-US', 'pt-BR'],
	namespaces: ['common', 'contact', 'experience', 'hero', 'projects'],
	defaultNamespace: 'common',
	load: ['server', 'client'],
	i18nextServerPlugins: {
		'{initReactI18next}': 'react-i18next',
	},
	i18nextClientPlugins: {
		'{initReactI18next}': 'react-i18next',
	},
};
