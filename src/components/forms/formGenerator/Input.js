import React, { memo } from 'react';
import Error from './Error';

const Input = memo(
  ({ value, name, error, handleChange, type, placeholder, className }) => {
    console.log('render input', className);

    return (
      <div className={className}>
        <input
          className={`field ${error ? 'error' : ''}`}
          onChange={handleChange}
          name={name}
          value={value}
          {...{ type, placeholder }}
        />

        <Error {...{ error }} />
      </div>
    );
  },
  (a, b) => a.error === b.error && a.value === b.value && a.name === b.name
);

export default Input;
