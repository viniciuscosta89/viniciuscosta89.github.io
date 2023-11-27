import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';

import Container from '@components/Container';
import Icons from '@components/Icons';
import {
  jobsStyle,
  jobsTimeline,
  jobDateStyle,
  jobIconContainerStyle,
  jobName,
  jobRole,
  jobActivities,
} from './Jobs.styles';
import type { JobsProps } from './Jobs.types';

function Jobs({ jobs }: JobsProps) {
  return (
    <section id="jobs" className={jobsStyle}>
      <Container>
        <VerticalTimeline lineColor="var(--colors-primary)" className={jobsTimeline}>
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
              dateClassName={jobDateStyle}
              icon={job.icon ? <img src={job.icon} alt={`${job.name} logo`} /> : <Icons.Work />}
              iconClassName={jobIconContainerStyle}
            >
              <a className={jobName} href={job.url} target="_blank" rel="noreferrer">
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
