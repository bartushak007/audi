import React, { memo } from 'react';

const Error = ({ input, errors }) =>
  errors[input] ? <div className="error-message">{errors[input]}</div> : null;

const Input = memo(({ input, errors, handleChange, formState, ...props }) => (
  <div>
    <input
      className={`field ${errors[input] ? 'error' : ''}`}
      onChange={handleChange}
      {...props}
      name={input}
      value={formState[input]}
    />

    <Error {...{ input, errors }} />
  </div>
));

export default Input;
