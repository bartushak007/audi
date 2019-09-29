import React, { memo } from 'react';
import Error from './Error';

const Radio = memo(
  ({ name, error, handleChange, radioOptions, className }) => {
    console.log('render radio');

    return (
      <div className={className}>
        <div className="row">
          {radioOptions.map(({ value, label, labelClass, className }) => (
            <div key={value}>
              <input
                className={className}
                onChange={handleChange}
                name={name}
                id={value + 'id'}
                value={value}
                type="radio"
              />
              {label && (
                <label className={labelClass} htmlFor={value + 'id'}>
                  {label}
                </label>
              )}
            </div>
          ))}
        </div>

        <Error {...{ error }} />
      </div>
    );
  },
  (a, b) => a.error === b.error && a.value === b.value && a.name === b.name
);

export default Radio;
