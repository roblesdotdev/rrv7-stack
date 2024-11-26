import { z } from 'zod';

export const envSchema = z.object({
	NODE_ENV: z.enum(['production', 'development', 'test'] as const),
});

type APP_ENV = z.infer<typeof envSchema>;
let env: APP_ENV;

export function initEnv() {
	// biome-ignore lint/nursery/noProcessEnv: This should be the only place to use process.env directly
	const parsed = envSchema.safeParse(process.env);

	if (parsed.success === false) {
		// biome-ignore lint/suspicious/noConsole: We want this to be logged
		console.error(
			'❌ Invalid environment variables:',
			parsed.error.flatten().fieldErrors,
		);

		throw new Error('Invalid environment variables');
	}

	env = parsed.data;

	return parsed.data;
}

/**
 * Helper method for you to return client .env vars, only return vars that are needed on the client.
 *
 * NOTE: Do *not* add any environment variables in here that you do not wish to
 * be included in the client.
 * @returns all public ENV variables
 */
export function getClientEnv() {
	return {
		MODE: env.NODE_ENV,
	};
}

type ClientEnv = ReturnType<typeof getClientEnv>;

declare global {
	interface Window {
		env: ClientEnv;
	}

	namespace NodeJS {
		interface ProcessEnv extends APP_ENV {}
	}
}
