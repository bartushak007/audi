import React from 'react';
import useForm from '../../../hooks/useForm';

import Input from '../../shared/input';

const ContactForm = () => {
  const { formState, handleChange, errors, handleSubmit } = useForm(
    {
      initial: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        prefer: 'email'
      },
      validationSchemes: {
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        email: {
          required: true
        },
        phone: {
          regExp: '[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s./0-9]*$',
          errorMessage: 'Wrong phone number'
        },
        prefer: {
          required: true
        }
      }
    },
    console.log
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          input="firstName"
          placeholder="First name*"
          type="text"
          {...{ errors, handleChange, formState }}
        />
        <Input
          input="lastName"
          placeholder="Last name*"
          type="text"
          {...{ errors, handleChange, formState }}
        />
        <Input
          input="email"
          placeholder="Email*"
          type="email"
          {...{ errors, handleChange, formState }}
        />
        <Input
          input="phone"
          placeholder="Phone"
          type="phone"
          {...{ errors, handleChange, formState }}
        />
        <div className="contact-form__radio-container">
          <div className="contact-form__radio-elem">
            <input
              className="hidden radio-email"
              onChange={handleChange}
              type="radio"
              id="prefer1"
              checked={formState.prefer === 'email'}
              name="prefer"
              value="email"
            />

            <label className="custom-radio-email" htmlFor="prefer1">
              Prefer e-mail
            </label>
          </div>

          <div className="contact-form__radio-elem">
            <input
              className="hidden radio-phone"
              onChange={handleChange}
              type="radio"
              id="prefer2"
              name="prefer"
              value="phone"
              checked={formState.prefer === 'phone'}
            />

            <label className="custom-radio-phone" htmlFor="prefer2">
              Prefer phone
            </label>
          </div>
        </div>
        <input className="btn" type="submit" value="Contact us" />
      </div>
    </form>
  );
};

export default ContactForm;
