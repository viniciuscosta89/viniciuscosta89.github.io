export interface JobType {
	id: number;
	name: string;
	url: string;
	role: englishPortugueseStrings;
	when: {
		from: string;
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
