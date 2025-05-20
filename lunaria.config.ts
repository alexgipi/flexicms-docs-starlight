import { defineConfig } from '@lunariajs/core/config';

export default defineConfig({
	repository: {
		name: 'withastro/docs',
	},
	sourceLocale: {
		label: 'English',
		lang: 'en',
		parameters: {
			tag: 'en',
		},
	},
	locales: [
		{
			label: 'Español',
			lang: 'es',
			parameters: {
				tag: 'es',
			},
		},		
	],
	files: [
		{
			include: ['src/content/i18n/en.yml'],
			pattern: 'src/content/i18n/@tag.yml',
			type: 'dictionary',
		},
		{
			include: ['src/content/nav/en.ts'],
			pattern: 'src/content/nav/@tag.ts',
			type: 'dictionary',
		},
		{
			include: ['src/content/docs/en/**/*.(md|mdx)'],
			pattern: 'src/content/docs/@lang/@path',
			type: 'universal',
		},
	],
	tracking: {
		localizableProperty: 'i18nReady',
		ignoredKeywords: [
			'lunaria-ignore',
			'typo',
			'en-only',
			'broken link',
			'i18nReady',
			'i18nIgnore',
		],
	},
});
