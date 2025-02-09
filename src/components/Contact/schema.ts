import { z } from "zod";

export const contactSchema = z
	.object({
		name: z.string().min(1, { message: 'Name is required' }),
		email: z
			.string()
			.min(1, { message: 'Email is required' })
			.email({
				message: 'Sorry, invalid format here',
			})
			.trim(),
		message: z.string().min(4, { message: 'Message is required' }),
		'g-recaptcha-response': z
			.string()
			.min(1, { message: 'You must validate the reCAPTCHA' }),
	})
	.required();

export type ContactSchema = z.infer<typeof contactSchema>;