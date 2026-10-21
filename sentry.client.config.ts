import * as Sentry from '@sentry/astro';

// `import.meta.env.MODE` is "production" for any production build, including
// `astro preview` on localhost, so derive the environment from the host instead.
const isProd = window.location.hostname === 'viniciuscosta89.github.io';

Sentry.init({
	dsn: 'https://56b23e538edc39db278990fa438c3cfe@o4512290332147712.ingest.de.sentry.io/4512295601504336',
	// Only report from the deployed site; local/preview builds stay silent.
	enabled: isProd,
	environment: isProd ? 'production' : 'local',
	integrations: [Sentry.browserTracingIntegration()],
	// Static portfolio with low traffic: sample every page load.
	tracesSampleRate: 1.0,
	sendDefaultPii: false,
});
