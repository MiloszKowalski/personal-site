import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="view-wrapper about">
      <div className="about-image-wrapper">
        <div className="about-image">

        </div>
      </div>
      <div className="about-text">
        <p>{ t('about.question') }</p>
        <p>{ t('about.answer') }</p>
      </div>
    </div>
  )
}

export default About;