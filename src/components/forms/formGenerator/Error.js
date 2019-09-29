import React from 'react';

const Error = ({ error }) =>
  error ? <div className="error-message">{error}</div> : null;

export default Error;
