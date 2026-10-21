import * as Sentry from '@sentry/astro';

Sentry.init({
	dsn: 'https://56b23e538edc39db278990fa438c3cfe@o4512290332147712.ingest.de.sentry.io/4512295601504336',
	environment: import.meta.env.MODE,
	integrations: [Sentry.browserTracingIntegration()],
	// Static portfolio with low traffic: sample every page load.
	tracesSampleRate: 1.0,
	sendDefaultPii: false,
});
