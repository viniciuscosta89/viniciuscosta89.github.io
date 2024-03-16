import type { SocialNetworkTypes } from '@type/social-networks';
import Icons from '@components/Icons/';

export const socialNetworks: SocialNetworkTypes[] = [
	{
		id: 'frontend-mentor',
		url: 'https://www.frontendmentor.io/profile/viniciuscosta89',
		logo: Icons.FrontendMentor,
		label: 'Frontend Mentor',
		alt: 'Frontend Mentor logo',
	},
	{
		id: 'github',
		url: 'https://github.com/viniciuscosta89',
		logo: Icons.Github,
		label: 'GitHub',
		alt: 'GitHub logo',
	},
	{
		id: 'linkedin',
		url: 'https://linkedin.com/in/viniciuscosta89/',
		logo: Icons.Linkedin,
		label: 'LinkedIn',
		alt: 'LinkedIn logo',
	},
];
