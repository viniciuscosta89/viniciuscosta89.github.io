function toUTCMidnight(date: string | Date): Date {
	const isoDate = typeof date === 'string' ? date : date.toISOString().slice(0, 10);
	return new Date(`${isoDate}T00:00:00Z`);
}

export function getYearsOfExperience(
	startDate: string,
	endDate?: string,
	referenceDate: Date = new Date(),
): number {
	const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
	const start = toUTCMidnight(startDate);
	const end = toUTCMidnight(endDate ?? referenceDate);
	const years = (end.getTime() - start.getTime()) / msPerYear;
	const floored = Math.floor(years);
	if (floored === 0) {
		// Cap below 1 so this branch never returns a whole number and steps
		// on the floor invariant used for years >= 1.
		return Math.min(Math.round(years * 10) / 10, 0.9);
	}
	return floored;
}
