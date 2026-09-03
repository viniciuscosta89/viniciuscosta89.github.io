import { describe, expect, it } from 'vitest';
import { getYearsOfExperience } from './date';

describe('getYearsOfExperience', () => {
	const referenceDate = new Date('2026-09-02T12:00:00Z');

	it('floors ongoing experience to a whole year', () => {
		expect(getYearsOfExperience('2016-08-01', undefined, referenceDate)).toBe(10);
	});

	it('shows one decimal place for experience under a year', () => {
		expect(getYearsOfExperience('2026-04-01', undefined, referenceDate)).toBe(0.4);
	});

	it('caps the under-a-year branch below 1, never rounding up to a whole number', () => {
		// ~11.6 months before the reference date
		expect(getYearsOfExperience('2025-09-15', undefined, referenceDate)).toBe(0.9);
	});

	it('returns 1 once experience is safely past the 1-year floor threshold', () => {
		expect(getYearsOfExperience('2025-09-01', undefined, referenceDate)).toBe(1);
	});

	it('freezes a closed startDate/endDate window regardless of the reference date', () => {
		const years = getYearsOfExperience('2020-01-01', '2021-10-01', referenceDate);
		expect(years).toBe(1);

		const sameYearsFromFarFuture = getYearsOfExperience(
			'2020-01-01',
			'2021-10-01',
			new Date('2099-01-01T00:00:00Z'),
		);
		expect(sameYearsFromFarFuture).toBe(years);
	});

	it('parses date-only strings as UTC midnight, independent of local timezone', () => {
		const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
		const expectedStart = Date.UTC(2016, 7, 1); // August is month 7 (0-indexed)
		const expectedReferenceMidnight = Date.UTC(2026, 8, 2); // September is month 8
		const expectedYears = Math.floor(
			(expectedReferenceMidnight - expectedStart) / msPerYear,
		);

		expect(getYearsOfExperience('2016-08-01', undefined, referenceDate)).toBe(expectedYears);
	});
});
