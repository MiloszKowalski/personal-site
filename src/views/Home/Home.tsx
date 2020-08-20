import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import heroMobile from './svg/Hero-mobile.svg';
import heroDesktop from './svg/Hero-desktop.svg';
import designOneMobile from './svg/Design1-mobile.svg';
import designOneDesktop from './svg/Design1-desktop.svg';
import designTwo from './svg/Design2.svg';
import heroImage1 from './img/hero-image-1.png';
import { ReactComponent as GithubIcon } from 'components/svg/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from 'components/svg/icons/LinkedIn.svg';
import { ReactComponent as InstagramIcon } from 'components/svg/icons/Instagram.svg';
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
        <div className="socialmedia-container">
          <a href="https://github.com/MiloszKowalski"
            rel="noopener noreferrer" target="_blank"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/miłosz-kowalski-462404180/"
            rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a>
          <a href="https://www.instagram.com/mkowalski.dev/"
            rel="noopener noreferrer" target="_blank"><InstagramIcon /></a>
        </div>
        <img id="hero-image" src={ heroImage1 } alt=""/>
        <picture>
          <source srcSet={`${heroMobile} 1x`} media="(max-width: 768px)" />
          <img className="background-wave" srcSet={`${heroDesktop} 2x`} alt="background" />
        </picture>
      </section>
      <section className="coding-with-passion">
        <div className="coding-text-wrapper">
          <h3>{ t('homepage.coding with passion.heading') }</h3>
          <p>{ t('homepage.coding with passion.p1') }</p>
          <p>{ t('homepage.coding with passion.p2') }</p>
          <p>{ t('homepage.coding with passion.p3') }</p>
          <Link to="/resume"><div className="button purple">
            { t('homepage.coding with passion.button') }
          </div></Link>
        </div>
        <div className="coding-img-wrapper">
          <div className="coding-img"></div>
        </div>
      </section>
      <section className="design-experience">
        <picture id="design-one-svg">
          <source srcSet={`${designOneMobile} 1x`} media="(max-width: 768px)" />
          <img srcSet={`${designOneDesktop} 2x`} alt="background" />
        </picture>
        <div className="design-text-wrapper">
          <h3 className="alt">{ t('homepage.experience with design.heading') }</h3>
          <p>{ t('homepage.experience with design.p1') }</p>
          <p>{ t('homepage.experience with design.p2') }</p>
          <Link to="/resume"><div className="button">
            { t('homepage.experience with design.button') }
          </div></Link>
        </div>
        <div className="design-img-wrapper">
          PLACEHOLDER
        </div>
        <img id="footer-img" src={ designTwo } alt="background" />
      </section>
      <footer>
        <div className="social-wrapper">

        </div>
        <div className="copyright">
          <p>{ t('homepage.footer.p1') }</p>
          <p>{ t('homepage.footer.p2') } &copy;{ new Date().getFullYear() }
          { t('homepage.footer.p3') }</p>
        </div>
      </footer>
    </div>
  )
}

export default Home;
