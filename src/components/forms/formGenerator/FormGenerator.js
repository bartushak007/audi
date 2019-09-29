import React from 'react';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';

import useForm from '../../../hooks/useForm';

const FormGenerator = ({ schema, submit, styleForm }) => {
  const { formState, handleChange, handleSubmit, setFormState } = useForm(
    schema,
    console.log.bind(null, 'send')
  );

  const change = (name, value) =>
    setFormState({ ...formState, [name]: { ...formState[name], value } });

  return (
    <div className="">
      <form onSubmit={handleSubmit} className={styleForm}>
        {Object.entries(formState).map(([key, obj]) => {
          const {
            value,
            error,
            type,
            options,
            upsTo,
            placeholder,
            radioOptions,
            className
          } = obj;
          switch (type) {
            case 'radio':
              return (
                <Radio
                  key={key}
                  name={key}
                  radioOptions={radioOptions}
                  value={value}
                  error={error && error.errorMessage}
                  {...{ handleChange, className }}
                />
              );
            case 'select':
              return (
                <Select
                  key={key}
                  name={key}
                  value={value}
                  options={upsTo ? options[formState[upsTo].value] : options}
                  error={error && error.errorMessage}
                  {...{ handleChange, change, upsTo, className }}
                />
              );
            default:
              return (
                <Input
                  key={key}
                  name={key}
                  value={value}
                  error={error && error.errorMessage}
                  {...{ handleChange, type, placeholder, className }}
                />
              );
          }
        })}

        <input className="btn" type="submit" value={submit} />
      </form>
    </div>
  );
};

export default FormGenerator;
