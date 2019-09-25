import React from 'react';

import ContactForm from '../../forms/contactForm';

const ContactInfo = ({ title, text }) => {
  const renderText = (text, i) => (
    <p key={i} className="contact-info__text">
      {text}
    </p>
  );
  return (
    <div className="contact-info">
      <h2 className="contact-info__title">{title}</h2>
      {text.map(renderText)}
      <ContactForm />
    </div>
  );
};

export default ContactInfo;
