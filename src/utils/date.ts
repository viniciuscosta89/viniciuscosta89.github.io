export function getYearsOfExperience(
	startDate: string,
	endDate?: string,
	referenceDate: Date = new Date(),
): number {
	const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
	const end = endDate ? new Date(endDate) : referenceDate;
	const years = (end.getTime() - new Date(startDate).getTime()) / msPerYear;
	const floored = Math.floor(years);
	return floored === 0 ? Math.round(years * 10) / 10 : floored;
}
