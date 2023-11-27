import patternRings from '@assets/pattern-rings.svg';
import Button from '@components/Button';
import Icons from '@components/Icons';
import emailjs from '@emailjs/browser';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import Reaptcha from 'reaptcha';
// @ts-expect-error: panda-css missing declaration types
import { css } from '/styled-system/css';
import { z } from 'zod';
import {
  contactFormStyle,
  contactFieldsetStyle,
  inputStyle,
  errorIcon,
  errorMessage,
  contactFieldsetTextareaStyle,
  errorMessageIcon,
  patternRingsStyle,
} from './Contact.styles';

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

function ContactForm() {
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

  const [recaptchaRef, setRecaptchaRef] = useState(null);
  // const recaptcha = useRef<HTMLFormElement>(null);

  const handleRecaptchaRef = (e: Reaptcha | null) => {
    setRecaptchaRef(e as null);
  };

  const onSubmit: SubmitHandler<ContactSchema> = formData => {
    emailjs.send('viniciuscosta89_github', 'github_template', formData, 'e4Y2hmtYWpuxUQfHC').then(
      response => {
        reset();
        // @ts-expect-error: recaptchaRef is not null
        recaptchaRef?.reset();

        console.log('SUCCESS!', response.status, response.text);
      },
      error => {
        console.log('FAILED...', error);
      },
    );
  };

  const recaptchaOnChange = (token: string): void => {
    setValue('g-recaptcha-response', token);
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
        <input
          className={inputStyle}
          type="text"
          id="name"
          {...register('name')}
          placeholder="Name"
        />
        {errors.name && (
          <span className={errorIcon}>
            <Icons.Exclamation />
          </span>
        )}
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className={errorMessage}>{message}</p>}
        />
      </fieldset>

      <fieldset className={contactFieldsetStyle}>
        <label htmlFor="email">Email:</label>
        <input className={inputStyle} id="email" {...register('email')} placeholder="Email" />
        {errors.email && (
          <motion.span
            className={errorIcon}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring' }}
          >
            <Icons.Exclamation />
          </motion.span>
        )}
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <motion.p
              className={errorMessage}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring' }}
            >
              {message}
            </motion.p>
          )}
        />
      </fieldset>

      <fieldset className={contactFieldsetTextareaStyle}>
        <label htmlFor="message">Message:</label>
        <textarea
          rows={4}
          className={inputStyle}
          id="message"
          {...register('message')}
          placeholder="Message"
        />
        {errors.message && (
          <span className={errorMessageIcon}>
            <Icons.Exclamation />
          </span>
        )}
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => (
            <motion.p
              className={errorMessage}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring' }}
            >
              {message}
            </motion.p>
          )}
        />

        <motion.img
          src={patternRings.src}
          className={patternRingsStyle}
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 1 }}
          alt=""
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
        <Reaptcha
          sitekey={import.meta.env.PUBLIC_RECAPTCHA_KEY}
          ref={e => {
            handleRecaptchaRef(e);
          }}
          onVerify={recaptchaOnChange}
          theme="dark"
        />
        <ErrorMessage
          errors={errors}
          name="g-recaptcha-response"
          render={({ message }) => (
            <motion.p
              className={errorMessage}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring' }}
            >
              {message}
            </motion.p>
          )}
        />
      </div>

      <Button
        type="submit"
        className={css({
          justifySelf: 'flex-end',
        })}
        disabled={!isDirty}
      >
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ type: 'spring' }}
          >
            {isSubmitSuccessful ? 'Message sent!' : isSubmitting ? 'Submitting...' : 'Send message'}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.form>
  );
}

export default ContactForm;
