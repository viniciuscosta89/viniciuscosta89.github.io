/* eslint-disable react/no-unescaped-entities */
// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';
import { heroTitleStyles } from './Hero.styles';
import { motion } from 'framer-motion';
import type { HeroTitleProps } from './Hero.types';
import { t } from 'i18next';

function HeroTitle({ name }: HeroTitleProps) {
	return (
		<motion.div
			className={heroTitleStyles}
			initial={{ opacity: 0, x: -32 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring', delay: 0.5 }}
		>
			<div>
				<span>{t('hero:title.niceTo')}</span>{' '}
				<span className={css({ whiteSpace: { base: 'wrap', md: 'nowrap' } })}>
					{t('hero:title.meetYou')}
				</span>{' '}
				<h1>{name}</h1>.
			</div>
		</motion.div>
	);
}

export default HeroTitle;
