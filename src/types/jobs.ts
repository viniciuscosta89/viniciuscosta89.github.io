export interface JobType {
	id: number;
	name: string;
	url: string;
	role: englishPortugueseStrings;
	when: {
		/** `YYYY-MM` */
		from: string;
		/** `YYYY-MM`, or `'Current'` for an ongoing job */
		to: string;
	};
	activities: englishPortugueseStrings[];
	stack: string[];
	icon?: string;
}

export interface englishPortugueseStrings {
	en: string;
	'pt-br': string;
}
