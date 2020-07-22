import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
        <div className="action-wrapper">
          <h1>{ t('homepage.hero.i am milosz')}</h1>
          <h2>{ t('homepage.hero.i create') + ' '}
          <Typical
            steps={[t('homepage.hero.clean code'), defaultTimeoutMS,
                    t('homepage.hero.gorgeous designs'), defaultTimeoutMS,
                    t('homepage.hero.working atmosphere'), defaultTimeoutMS,
                    t('homepage.hero.projects start finish'), defaultTimeoutMS]}
            loop={Infinity}
            wrapper="span"
          />
          </h2>
          <Link to="/portfolio"><div className="button">{ t('homepage.hero.button1') }</div></Link>
          <Link to="/contact"><div className="button alt">{ t('homepage.hero.button2') }</div></Link>
        </div>
        <picture>
          <source srcSet={`${heroMobile} 1x`} media="(max-width: 768px)" />
          <img srcSet={`${heroDesktop} 2x`} alt="background" />
        </picture>
      </section>
    </div>
  )
}

export default Home;
