import React, { memo, useEffect, useRef } from 'react';
import Error from './Error';

const Select = memo(
  ({
    value,
    upsTo,
    options = [{ value: '', text: `Select ${upsTo} field first` }],
    name,
    error,
    handleChange,
    change,
    className
  }) => {
    const mounted = useRef();

    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
      } else {
        change(name, options[0].value);
      }
    }, [options]);

    console.log('render select');

    return (
      <div className={className}>
        <div className="wrap-field">
          <select
            className={`field  ${error ? 'error' : ''}`}
            onChange={handleChange}
            name={name}
            value={value}
          >
            {options.map(({ value, text }) => (
              <option key={value + '' + text} value={value}>
                {text}
              </option>
            ))}
          </select>
          <span className="arrow">
            <span className="up-down">&#8249;</span>
          </span>
        </div>
        <Error {...{ error }} />
      </div>
    );
  },
  (a, b) =>
    a.error === b.error &&
    a.value === b.value &&
    a.name === b.name &&
    a.options === b.options
);

export default Select;
