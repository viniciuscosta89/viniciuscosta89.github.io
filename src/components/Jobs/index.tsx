import pkg from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const { VerticalTimeline, VerticalTimelineElement } = pkg;

import Container from '@components/Container';
import Icons from '@components/Icons';
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

function Jobs({ jobs }: JobsProps) {
  return (
    <section
      id="jobs"
      className="relative py-20 md:py-[5rem_6.25rem] lg:py-[5rem_8.70rem]"
    >
      <Container>
        <VerticalTimeline
          lineColor="var(--color-primary)"
          className="w-full! overflow-x-hidden px-2! before:translate-x-2 lg:before:translate-x-0"
        >
          {jobs.map(job => (
            <VerticalTimelineElement
              key={job.id}
              contentStyle={{
                backgroundColor: 'var(--color-bg-gray)',
                borderRadius: 0,
                boxShadow: '0 3px 0 var(--color-primary)',
              }}
              contentArrowStyle={{
                borderRightColor: 'var(--color-bg-gray)',
              }}
              date={`${capitalizeFirstLetter(
                formatDate(false, job.when.from),
              )} - ${
                job.when.to === 'Current'
                  ? 'Current'
                  : formatDate(false, job.when.to)
              }`}
              dateClassName="text--1 py-[1rem_0]"
              icon={
                job.icon ? (
                  <img
                    className="relative block h-7 w-7 rounded-[50%] brightness-[1] contrast-[5] invert-[1]"
                    src={job.icon}
                    alt={`${job.name} logo`}
                  />
                ) : (
                  <Icons.Work className="top-[initial]! left-[initial]! mt-0! ml-0! h-6 w-6 rounded-[50%]" />
                )
              }
              iconClassName="bg-neutral-700 flex justify-center items-center "
            >
              <a
                className="text-primary text-3 after:transform-origin-right after:bg-primary relative uppercase after:absolute after:bottom-[-2px] after:left-0 after:block after:h-[0.125rem] after:w-full after:origin-right after:scale-x-0 after:transition after:duration-300 after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus:after:scale-x-100"
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.name}
              </a>

              <p className="text-1 my-0.5rem_0.75rem] font-normal">
                {job.role.en}
              </p>

              <ul className="flex list-inside list-disc flex-col gap-2 font-light">
                {job.activities.map(activity => {
                  return (
                    <li className="marker:text-primary" key={activity.en}>
                      {activity.en}
                    </li>
                  );
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
