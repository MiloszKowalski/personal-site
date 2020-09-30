import React from 'react';

import './ContactLabel.scss';

interface Props {
  svgSrc: string,
  label: string
}

const ContactLabel: React.FC<Props> = ({svgSrc, label}) => {
  return (
    <div className="contact-label-wrapper">
      <img className="contact-label-icon" src={ svgSrc } alt="icon" />
      <p className="contact-label">{ label }</p>
    </div>
  );
}

export default ContactLabel;