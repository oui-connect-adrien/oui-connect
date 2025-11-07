import { initBotId } from 'botid/client/core';

// Define the paths that need bot protection.
// These are paths that are routed to by your app.
// Server actions invoked from the /contact page
initBotId({
	protect: [
		{
			path: '/contact',
			method: 'POST',
		},
	],
});
