import type { ElementType } from 'react';
import Icons from '@components/Icons/';

interface SocialNetwork {
	url: string;
	logo: ElementType;
	label: string;
	alt: string;
}

export const socialNetworks: SocialNetwork[] = [
	{
		url: 'https://www.frontendmentor.io/profile/viniciuscosta89',
		logo: Icons.FrontendMentor,
		label: 'Frontend Mentor',
		alt: 'Frontend Mentor logo',
	},
	{
		url: 'https://github.com/viniciuscosta89',
		logo: Icons.Github,
		label: 'GitHub',
		alt: 'GitHub logo',
	},
	{
		url: 'linkedin.com/in/viniciuscosta89/',
		logo: Icons.Linkedin,
		label: 'LinkedIn',
		alt: 'LinkedIn logo',
	},
];
