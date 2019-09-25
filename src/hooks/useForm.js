import { useState, useEffect } from 'react';

const validate = (input, errors, name, schemes) => {
  if (schemes[name]) {
    const { regExp, errorMessage, required } = schemes[name];

    if (required && input[name] === '')
      return { ...errors, [name]: 'field is required' };

    return regExp && !new RegExp(regExp).test(input[name]) && input[name]
      ? { ...errors, [name]: errorMessage }
      : { ...errors, [name]: '' };
  }

  return errors;
};

const useForm = (initialValues, onSubmit) => {
  const [formState, setFormState] = useState(initialValues.initial);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    if (
      Object.entries(errors).every(([_, val]) => val === '') &&
      isSubmitting
    ) {
      onSubmit(formState);
      setIsSubmitting(false);
      wasSubmitted && setFormState(initialValues);
    } else {
      setIsSubmitting(false);
    }
  }, [errors, onSubmit, isSubmitting, formState, initialValues, wasSubmitted]);

  const handleSubmit = event => {
    event.preventDefault();

    setIsSubmitting(true);
    Object.entries(formState).forEach(([name, value]) => {
      setErrors(errors => ({
        ...errors,
        ...validate(
          { [name]: value },
          errors,
          name,
          initialValues.validationSchemes
        )
      }));
    });
  };

  const handleChange = event => {
    const {
      target: { name, value }
    } = event;

    setFormState(formState => ({
      ...formState,
      [name]: value
    }));

    setErrors(errors => ({
      ...errors,
      ...validate(
        { [name]: value },
        errors,
        name,
        initialValues.validationSchemes
      )
    }));
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    errors,
    wasSubmitted,
    setWasSubmitted
  };
};

export default useForm;
