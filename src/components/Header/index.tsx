// @ts-ignore
import { styled } from '/styled-system/jsx';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import profileDesktop from '@assets/image-profile-desktop.webp';
import profileTablet from '@assets/image-profile-tablet.webp';
import profileMobile from '@assets/image-profile-mobile.webp';
import { socialNetworks } from '@data/social-networks';

const HeaderStyled = styled(motion.header, {
	base: {
		color: 'text',
		lineHeight: 1,
		marginBlockEnd: {
			base: '2.5rem',
			md: '5.62rem',
			lg: '8rem',
		},
		overflowX: {
			base: 'hidden',
			md: 'visible',
		},
		position: 'relative',

		_before: {
			content: '""',
			bgImage: 'url(/assets/pattern-rings.svg)',
			display: {
				base: 'block',
				md: 'none',
				lg: 'block',
			},
			position: 'absolute',
			left: {
				base: '-100%',
				lg: '-5%',
				'2xl': '18%',
			},
			top: {
				base: '35%',
				lg: '185%',
			},
			zIndex: '-1',
			width: '530px',
			height: '129px',
		},

		_after: {
			content: '""',
			bgImage: 'url(/assets/pattern-circle.svg)',
			display: {
				base: 'block',
				md: 'none',
				lg: 'block',
			},
			position: 'absolute',
			right: {
				base: '-18%',
				lg: '38%',
				'2xl': '43%',
			},
			bottom: {
				base: 0,
				lg: '-850%',
			},
			zIndex: '-1',
			width: '129px',
			height: '129px',
		},
	},
});

const HeaderGrid = styled('div', {
	base: {
		display: 'flex',
		flexDirection: {
			base: 'column',
			md: 'row',
		},
		gap: '1.25rem',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingInlineEnd: {
			base: 0,
			lg: '1.84rem',
		},
		paddingBlockStart: {
			base: '2.44rem',
			md: '2rem',
			lg: '2.44rem',
		},
		marginBlockEnd: {
			base: '3rem',
			md: 0,
		},
	},
});

const HeaderTitle = styled('div', {
	base: {
		fontSize: '3',
		letterSpacing: '-0.02081rem',

		'& span': {
			fontWeight: 'light',
		},

		'& strong': {
			fontWeight: 'bold',
		},
	},
});

const HeaderSocialNetworks = styled('ul', {
	base: {
		display: 'flex',
		alignItems: 'center',
		gap: '2rem',
		position: 'relative',

		'& a': {
			display: 'block',
			transition: 'all 0.3s ease-in-out',

			_hover: {
				color: 'red.300',
				transform: 'scale(1.15)',
			},
		},
	},
});

const ProfileImage = styled('picture', {
	base: {
		display: 'block',
		position: {
			base: 'relative',
			md: 'absolute',
		},
		right: {
			base: 0,
			md: '-2rem',
			lg: 0,
		},
		top: 0,
		marginBlockStart: {
			base: '-7.5rem',
			md: '0',
		},
		mx: 'auto',
		maxWidth: {
			base: '10.88794rem',
			md: '20.125rem',
			lg: '27.8125rem',
		},
		zIndex: '-1',
	},
});

function Header() {
	return (
		<HeaderStyled initial={{ opacity: 0, y: -32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
			<Container>
				<HeaderGrid>
					<HeaderTitle>
						<span>vinicius</span>
						<strong>costa</strong>
					</HeaderTitle>

					<HeaderSocialNetworks>
						{socialNetworks.map(({ url, label, logo: Logo }) => (
							<li key={label}>
								<a href={url} title={`My ${label} profile`} target="_blank">
									<Logo />
								</a>
							</li>
						))}
					</HeaderSocialNetworks>
				</HeaderGrid>

				<ProfileImage>
					<source srcSet={profileDesktop} media="(min-width: 1140px)" />
					<source srcSet={profileTablet} media="(min-width: 768px)" />
					<img src={profileMobile} alt="AI rendered Vinicius Costa's image " />
				</ProfileImage>
			</Container>
		</HeaderStyled>
	);
}

export default Header;
