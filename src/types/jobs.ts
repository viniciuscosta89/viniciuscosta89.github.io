export interface JobType {
	name: string;
	url: string;
	role: string;
	when: {
		from: string;
		to: string;
	};
	activities: string[];
	icon?: string;
}
