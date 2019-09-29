import { useState, useEffect } from 'react';

const validate = (
  value,
  { regExp, errorMessage = 'Field is not valid', required }
) => {
  if (required && value === '')
    return { valid: false, errorMessage: 'Field is required' };

  return regExp && !new RegExp(regExp).test(value) && value
    ? { valid: false, errorMessage }
    : { valid: true, errorMessage: '' };
};

const useForm = (initialValues, onSubmit) => {
  const [formState, setFormState] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (
      Object.entries(formState).every(
        ([_, { error }]) => error && error.valid
      ) &&
      isSubmitting
    ) {
      onSubmit(formState);
      setIsSubmitting(false);
      wasSubmitted && setFormState(initialValues);
    } else {
      setIsSubmitting(false);
    }
  }, [onSubmit, isSubmitting, formState, initialValues, wasSubmitted]);

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmitting(true);
    setFormState(
      Object.entries(formState).reduce((newState, [key, shema]) => {
        return {
          ...newState,
          [key]: { ...shema, error: validate(shema.value, shema) }
        };
      }, {})
    );
  };

  const handleChange = event => {
    const {
      target: { name, value }
    } = event;

    setFormState(formState => ({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        error: validate(value, formState[name])
      }
    }));
  };

  return {
    setFormState,
    formState,
    handleChange,
    handleSubmit,
    wasSubmitted,
    setWasSubmitted
  };
};

export default useForm;
