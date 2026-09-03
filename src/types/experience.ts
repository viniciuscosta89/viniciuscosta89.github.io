export interface ExperienceItemsType {
	name: string;
	startDate: string; // ISO date, e.g. '2016-08-01'
	endDate?: string; // ISO date; omit if still actively used (counts up to today)
}
