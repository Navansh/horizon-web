import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b622a889958d1351b6879560c04a3e26@o4507255404494848.ingest.us.sentry.io/4507255406526464",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});