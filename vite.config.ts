import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import { reactRouterDevTools } from 'react-router-devtools';
import { reactRouterHonoServer } from 'react-router-hono-server/dev';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	server: {
		port: 3000,
	},
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
	plugins: [
		reactRouterDevTools(),
		reactRouter(),
		reactRouterHonoServer({
			dev: {
				exclude: [/^\/(other)\/.+/],
			},
		}),
		tsconfigPaths(),
		iconsSpritesheet({
			inputDir: './other/svg-icons',
			outputDir: './app/components/icon/icons',
			fileName: 'icon.svg',
			withTypes: true,
		}),
	],
});
