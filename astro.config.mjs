import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'viteconfig.js',
			social: {
				github: 'https://github.com/jasurhaydarovcode/viteconfig.js',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Default vite config', slug: 'guides/example' },
						{ label: 'Server configuration', slug: 'guides/server' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
