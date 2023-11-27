// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';

export const projectActionsStyle = css({
  backgroundColor: {
    lg: 'black.850',
  },
  display: 'flex',
  flexDirection: {
    lg: 'column',
  },
  gap: '2rem',
  justifyContent: {
    lg: 'center',
  },
  alignItems: {
    lg: 'center',
  },
  opacity: {
    lg: 0,
  },
  visibility: {
    lg: 'hidden',
  },
  width: {
    lg: '100%',
  },
  height: {
    lg: '100%',
  },
  gridArea: {
    lg: 'img',
  },
  transition: 'all 0.3s ease-in-out',
});

export const projectGridStyle = css({
  display: 'grid',
  gap: {
    base: '2.5rem',
    lg: '4.30rem 1.5rem',
  },
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
  },
});

export const projectImgStyle = css({
  display: 'block',
  maxWidth: '100%',
  gridArea: {
    lg: 'img',
  },
});

export const projectNameStyle = css({
  color: 'white',
  fontSize: '2',
  fontWeight: 'bold',
  lineHeight: '1.33',
  my: '1.5rem 0.5rem',
  textTransform: 'uppercase',
  gridArea: { lg: 'name' },
});

export const projectItemStyle = css({
  display: 'grid',
  alignContent: 'flex-start',
  position: 'relative',
  gridTemplateAreas: {
    lg: `'img'
				'name'
				'stack'
		`,
  },

  _hover: {
    lg: {
      '& .project__actions': {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
});

export const projectRootStyle = css({
  position: 'relative',
  py: {
    base: '5rem',
    md: '5rem 6.25rem',
    lg: '5rem 8.70rem',
  },
});

export const projectStackStyle = css({
  color: 'black.100',
  display: 'flex',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '0 1.125rem',
  fontSize: '0',
  fontWeight: 'regular',
  lineHeight: '1.55',
  marginBlockEnd: {
    base: '1.25rem',
    lg: 0,
  },
  minHeight: {
    md: '7rem',
    lg: 'auto',
  },
  textTransform: 'uppercase',
  gridArea: { lg: 'stack' },
});
