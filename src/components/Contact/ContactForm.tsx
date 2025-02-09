import Button from '@components/Button';
import Icons from '@components/Icons';
import emailjs from '@emailjs/browser';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Reaptcha from 'reaptcha';

import patternRings from '@assets/pattern-rings.svg';
import { type ContactSchema, contactSchema } from './schema';

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
    emailjs
      .send(
        'viniciuscosta89_github',
        'github_template',
        formData,
        'e4Y2hmtYWpuxUQfHC',
      )
      .then(
        response => {
          reset();

          recaptchaRef?.reset();

          console.log('SUCCESS!', response.status, response.text);
        },
        error => {
          throw new Error('FAILED...', error);
        },
      );
  };

  const recaptchaOnChange = (token: string): void => {
    setValue('g-recaptcha-response', token);
  };

  const ContactFormInput = ({
    id,
    label,
    name,
    type,
  }: {
    id: string;
    label: string;
    name: 'message' | 'name' | 'email' | 'g-recaptcha-response';
    type: string;
  }) => {
    return (
      <fieldset className="form-fieldset relative z-0 grid items-center gap-2">
        <label htmlFor={id} className="hidden">
          {label}
        </label>
        {name === 'message' ? (
          <textarea
            rows={4}
            className="text--1 form-input w-full border-b-[0.0625rem] border-white bg-transparent p-[1rem_1.5rem] text-white uppercase transition-all duration-300 placeholder:tracking-[-0.01388rem] placeholder:opacity-50 focus:border-red-500 focus:bg-neutral-700 focus:outline-offset-2"
            id="message"
            {...register('message')}
            placeholder="Message"
          />
        ) : (
          <input
            className="text--1 form-input w-full border-b-[0.0625rem] border-white bg-transparent p-[1rem_1.5rem] text-white uppercase transition-all duration-300 placeholder:tracking-[-0.01388rem] placeholder:opacity-50 focus:border-red-500 focus:bg-neutral-700 focus:outline-offset-2"
            type={type}
            id={id}
            {...register(name)}
            placeholder={label}
          />
        )}
        {errors[name] && (
          <motion.span
            className="form-input__error-icon justify-self-end text-red-500"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring' }}
          >
            <Icons.Exclamation />
          </motion.span>
        )}
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <motion.p
              className="text--2 form-input__error justify-self-end text-red-500"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring' }}
            >
              {message}
            </motion.p>
          )}
        />

        {name === 'message' ? (
          <motion.img
            src={patternRings.src}
            className="md:none absolute -bottom-1/2 -left-full z-[-1] block max-w-[unset] lg:left-[-225%] lg:block"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', delay: 1 }}
            alt=""
          />
        ) : null}
      </fieldset>
    );
  };

  return (
    <motion.form
      className="grid gap-8 bg-neutral-800 pb-[5.44rem]"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring' }}
      viewport={{ once: true }}
    >
      <ContactFormInput id="name" name="name" label="Name" type="text" />

      <ContactFormInput id="email" name="email" label="Email" type="email" />

      <ContactFormInput
        id="message"
        name="message"
        label="Message"
        type="textarea"
      />

      <div className="relative flex flex-col items-end gap-2">
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
              className="text--2 form-errors justify-self-end text-red-400"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring' }}
            >
              {message}
            </motion.p>
          )}
        />
      </div>

      <Button type="submit" className="justify-self-end" disabled={!isDirty}>
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ type: 'spring' }}
          >
            {isSubmitSuccessful
              ? 'Message sent!'
              : isSubmitting
                ? 'Sending...'
                : 'Send message'}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.form>
  );
}

export default ContactForm;
