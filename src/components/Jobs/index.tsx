import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';

import Container from '@components/Container';
import Icons from '@components/Icons';
import {
	jobActivities,
	jobDateStyle,
	jobIconContainerStyle,
	jobName,
	jobRole,
	jobsStyle,
	jobsTimeline,
} from './Jobs.styles';
import type { JobsProps } from './Jobs.types';

const capitalizeFirstLetter = (string: string): string => {
	const word = string;
	const firstLetter = word.charAt(0);
	const restOfWord = word.slice(1);
	return `${firstLetter.toUpperCase()}${restOfWord}`;
};

const formatDate = (isPortuguese: boolean, date: string): string =>
	new Intl.DateTimeFormat(isPortuguese ? 'pt-BR' : 'en', {
		month: 'long',
		year: 'numeric',
	}).format(new Date(date));

function Jobs({ jobs, language }: JobsProps) {
	const isPortugueseLanguage = language === 'pt-BR';

	return (
		<section id="jobs" className={jobsStyle}>
			<Container>
				<VerticalTimeline
					lineColor="var(--colors-primary)"
					className={jobsTimeline}
				>
					{jobs.map((job) => (
						<VerticalTimelineElement
							key={job.id}
							contentStyle={{
								backgroundColor: 'var(--colors-bg-gray)',
								borderRadius: 0,
								boxShadow: '0 3px 0 var(--colors-primary)',
							}}
							contentArrowStyle={{
								borderRightColor: 'var(--colors-bg-gray)',
							}}
							date={`${capitalizeFirstLetter(
								formatDate(isPortugueseLanguage, job.when.from),
							)} - ${
								job.when.to === 'Current'
									? isPortugueseLanguage
										? 'atual'
										: 'current'
									: capitalizeFirstLetter(
											formatDate(isPortugueseLanguage, job.when.to),
										)
							}`}
							dateClassName={jobDateStyle}
							icon={
								job.icon ? (
									<img src={job.icon} alt={`${job.name} logo`} />
								) : (
									<Icons.Work />
								)
							}
							iconClassName={jobIconContainerStyle}
						>
							<a
								className={jobName}
								href={job.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{job.name}
							</a>

							<p className={jobRole}>
								{isPortugueseLanguage ? job.role['pt-br'] : job.role.en}
							</p>

							<ul className={jobActivities}>
								{job.activities.map((activity) => {
									const activityLanguage = isPortugueseLanguage
										? activity['pt-br']
										: activity.en;
									return <li key={activityLanguage}>{activityLanguage}</li>;
								})}
							</ul>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</Container>
		</section>
	);
}

export default Jobs;
