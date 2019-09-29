import React from 'react';
import FormGenerator from '../../forms/formGenerator';

const ToRecommendContent = ({ contactUs, letFindIt }) => {
  return (
    <div className="recommend ">
      <div className="recommend__contact-us">
        <h2 className="recommend__title-dark">{contactUs.title}</h2>
        {contactUs.text.map((text, i) => (
          <p className="recommend__text" key={i}>
            {text}
          </p>
        ))}
        <div>
          <FormGenerator schema={contactUs.schema} submit={contactUs.submit} />
        </div>
      </div>

      <div className="recommend__let-find">
        <h2 className="recommend__title-light">{letFindIt.title}</h2>
        <div className="recommend__find-form">
          <FormGenerator
            styleForm={letFindIt.styleForm}
            schema={letFindIt.schema}
            submit={letFindIt.submit}
          />
        </div>
      </div>
    </div>
  );
};

export default ToRecommendContent;
