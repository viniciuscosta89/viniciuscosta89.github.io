// @ts-ignore
import { css } from '/styled-system/css';
// @ts-ignore
import type { SystemStyleObject } from '../styled-system/types';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import emailjs from '@emailjs/browser';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';

import Button from '@components/Button';
import patternRings from '@assets/pattern-rings.svg';
import Icons from '@components/Icons';

const contactFormStyle = css({
	bg: 'black.700',
	display: 'grid',
	gap: '2rem',
	paddingBlockEnd: '5.44rem',

	'& label': {
		display: 'none',
	},
});

const inputStyle: SystemStyleObject = css({
	bg: 'transparent',
	borderBottomColor: 'white',
	borderBottomWidth: '0.0625rem',
	borderBottomStyle: 'solid',
	color: 'white',
	fontSize: '-1',
	gridArea: 'input',
	p: '1rem 1.5rem',
	textTransform: 'uppercase',
	transition: 'all 0.3s ease-in-out',
	width: '100%',

	_focus: {
		bg: 'black.600',
		borderColor: 'red.300',
		outlineOffset: '2px',
	},

	_placeholder: {
		letterSpacing: '-0.01388rem',
		opacity: 0.5,
	},
});

const contactFieldsetStyle = css({
	display: 'grid',
	gridTemplateAreas: `
		"input"
		"errors"
	`,
	alignItems: 'center',
	gap: '0.5rem',
	position: 'relative',
	zIndex: '0',
});

const contactFieldsetTextareaStyle = css({
	display: 'grid',
	gridTemplateAreas: `
		"input"
		"errors"
	`,
	alignItems: 'flex-start',
	gap: '0.5rem',
	position: 'relative',
	zIndex: '0',
});

const errorMessage = css({
	color: 'red.400',
	fontSize: '-2',
	gridArea: 'errors',
	justifySelf: 'flex-end',
});

const errorIcon = css({
	color: 'red.400',
	gridArea: 'input',
	justifySelf: 'flex-end',
});

const errorMessageIcon = css({
	color: 'red.400',
	gridArea: 'input',
	justifySelf: 'flex-end',
	py: '1rem',
});

const patternRingsStyle = css({
	position: 'absolute',
	display: {
		base: 'block',
		md: 'none',
		lg: 'block',
	},
	maxWidth: 'unset',
	left: {
		base: '-100%',
		lg: '-225%',
	},
	bottom: {
		base: '-50%',
	},
	zIndex: '-1',
});

const contactSchema = z
	.object({
		name: z.string().min(1, { message: 'Name is required' }),
		email: z
			.string()
			.min(1, { message: 'Email is required' })
			.email({
				message: 'Sorry, invalid format here',
			})
			.trim(),
		message: z.string().min(4, { message: ' Message is required' }),
		'g-recaptcha-response': z.string().min(1, { message: 'You must validate the reCAPTCHA' }),
	})
	.required();

type ContactSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
		reset,
		setValue,
	} = useForm<ContactSchema>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
			'g-recaptcha-response': '',
		},
		resolver: zodResolver(contactSchema),
	});

	const recaptchaRef = useRef(null);

	const onSubmit: SubmitHandler<ContactSchema> = (formData) => {
		emailjs.send('viniciuscosta89_github', 'github_template', formData, 'e4Y2hmtYWpuxUQfHC').then(
			(response) => {
				reset();
				// @ts-ignore
				recaptchaRef.current?.reset();
				console.log('SUCCESS!', response.status, response.text);
			},
			(error) => {
				console.log('FAILED...', error);
			}
		);
	};

	const recaptchaOnChange = (captchaCodeResponse: string) => {
		if (!captchaCodeResponse) return;
		setValue('g-recaptcha-response', captchaCodeResponse);
		return captchaCodeResponse;
	};

	return (
		<motion.form
			className={contactFormStyle}
			onSubmit={handleSubmit(onSubmit)}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ type: 'spring' }}
			viewport={{ once: true }}
		>
			<fieldset className={contactFieldsetStyle}>
				<label htmlFor="name">Name:</label>
				<input className={inputStyle} type="text" id="name" {...register('name')} placeholder="Name" />
				{errors.name && (
					<span className={errorIcon}>
						<Icons.Exclamation />
					</span>
				)}
				<ErrorMessage errors={errors} name="name" render={({ message }) => <p className={errorMessage}>{message}</p>} />
			</fieldset>

			<fieldset className={contactFieldsetStyle}>
				<label htmlFor="email">Email:</label>
				<input className={inputStyle} id="email" {...register('email')} placeholder="Email" />
				{errors.email && (
					<span className={errorIcon}>
						<Icons.Exclamation />
					</span>
				)}
				<ErrorMessage
					errors={errors}
					name="email"
					render={({ message }) => <p className={errorMessage}>{message}</p>}
				/>
			</fieldset>

			<fieldset className={contactFieldsetTextareaStyle}>
				<label htmlFor="message">Message:</label>
				<textarea rows={4} className={inputStyle} id="message" {...register('message')} placeholder="Message" />
				{errors.message && (
					<span className={errorMessageIcon}>
						<Icons.Exclamation />
					</span>
				)}
				<ErrorMessage
					errors={errors}
					name="message"
					render={({ message }) => <p className={errorMessage}>{message}</p>}
				/>

				<motion.img
					src={patternRings}
					className={patternRingsStyle}
					initial={{ opacity: 0, x: -32 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring' }}
				/>
			</fieldset>

			<div
				className={css({
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
					alignItems: 'flex-end',
					position: 'relative',
				})}
			>
				<ReCAPTCHA
					ref={recaptchaRef}
					sitekey={import.meta.env.PUBLIC_RECAPTCHA_KEY}
					onChange={recaptchaOnChange}
					theme="dark"
				/>
				<ErrorMessage
					errors={errors}
					name="g-recaptcha-response"
					render={({ message }) => <p className={errorMessage}>{message}</p>}
				/>
			</div>

			<Button
				type="submit"
				className={css({
					justifySelf: 'flex-end',
				})}
				disabled={!isDirty}
			>
				{isSubmitSuccessful ? 'Message sent!' : isSubmitting ? 'Submitting...' : 'Send message'}
			</Button>
		</motion.form>
	);
};

export default ContactForm;
