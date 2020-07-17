import React from 'react';
import { useTranslation } from 'react-i18next';
import Typical from 'react-typical';
import heroMobile from './svg/Hero-mobile.svg';
import heroDesktop from './svg/Hero-desktop.svg';
import './Home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const defaultTimeoutMS = 1200;

  return (
    <div className="view-wrapper">
      <section className="hero">
        <h1>{ t('i am milosz')}</h1>
        <h2>{ t('i create') + ' '}
        <Typical
          steps={[t('clean code'), defaultTimeoutMS,
                  t('gorgeous designs'), defaultTimeoutMS,
                  t('working atmosphere'), defaultTimeoutMS,
                  t('projects start finish'), defaultTimeoutMS]}
          loop={Infinity}
          wrapper="span"
        />
        </h2>
        <picture>
          <source srcSet={`${heroMobile} 1x`} media="(max-width: 768px)" />
          <img srcSet={`${heroDesktop} 2x`} alt="background" />
        </picture>
      </section>
    </div>
  )
}

export default Home;
