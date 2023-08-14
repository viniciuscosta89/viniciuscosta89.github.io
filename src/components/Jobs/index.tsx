import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';

// @ts-ignore
import { css } from '/styled-system/css';
import Container from '@components/Container';
import type { JobType } from '@type/jobs';

const jobsStyle = css({
	position: 'relative',
	py: {
		base: '5rem',
		md: '5rem 6.25rem',
		lg: '5rem 8.70rem',
	},
});

const jobName = css({
	color: 'primary',
	fontSize: '3',
	position: 'relative',
	textTransform: 'uppercase',

	_after: {
		content: '""',
		bg: 'red.300',
		position: 'absolute',
		display: 'block',
		bottom: '-2px',
		left: 0,
		height: '0.125rem',
		width: '100%',
		transform: 'scaleX(0)',
		transformOrigin: 'right',
		transition: 'transform 0.3s ease-in-out',
	},

	_hover: {
		_after: {
			transform: 'scaleX(1)',
			transformOrigin: 'left',
		},
	},

	_focus: {
		_after: {
			transform: 'scaleX(1)',
			transformOrigin: 'left',
		},
	},
});

const jobRole = css({
	fontSize: '1 !important',
	fontWeight: 'regular !important',
	my: '0.5rem 0.75rem !important',
	textTransform: 'uppercase',
});

const jobActivities = css({
	display: 'flex',
	flexDirection: 'column',
	fontWeight: 'light',
	gap: '0.5rem',
	listStyle: 'disc',
	listStylePosition: 'inside',
});

const jobIconStyle = css({
	bg: 'black.700',
	display: 'grid',
	placeContent: 'center',
	fontFamily: 'Material Icons, sans-serif',

	'& .material-symbols-outlined': {
		fontSize: '3 !important',
	},
});

interface JobsProps {
	jobs: JobType[];
}

function Jobs({ jobs }: JobsProps) {
	return (
		<section id="jobs" className={jobsStyle}>
			<Container>
				<VerticalTimeline lineColor="var(--colors-primary)">
					{jobs.map((job, jobIndex) => (
						<VerticalTimelineElement
							key={jobIndex}
							contentStyle={{
								backgroundColor: 'var(--colors-bg-gray)',
								borderRadius: 0,
								boxShadow: '0 3px 0 var(--colors-primary)',
							}}
							contentArrowStyle={{ borderRightColor: 'var(--colors-bg-gray)' }}
							date={`${job.when.from} - ${job.when.to}`}
							icon={<span className="material-symbols-outlined">work</span>}
							iconClassName={jobIconStyle}
						>
							<a className={jobName} href={job.url} target="_blank">
								{job.name}
							</a>

							<p className={jobRole}>{job.role}</p>

							<ul className={jobActivities}>
								{job.activities.map((activity, activityIndex) => (
									<li key={activityIndex}>{activity}</li>
								))}
							</ul>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</Container>
		</section>
	);
}

export default Jobs;
