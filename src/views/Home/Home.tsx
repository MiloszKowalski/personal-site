import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import Typical from 'react-typical';
import { useTranslation } from 'react-i18next';

import { breakpoints } from 'utils/mediaBreakpoints';

import { ReactComponent as GithubIcon } from 'components/svg/icons/Github.svg';
import { ReactComponent as HeroDesktop } from './svg/Hero-desktop.svg';
import { ReactComponent as HeroMobile } from './svg/Hero-mobile.svg';
import { ReactComponent as InstagramIcon } from 'components/svg/icons/Instagram.svg';
import { ReactComponent as LinkedInIcon } from 'components/svg/icons/LinkedIn.svg';

import designOneDesktop from './svg/Design1-desktop.svg';
import designOneMobile from './svg/Design1-mobile.svg';
import designTwo from './svg/Design2.svg';

import contactPhotoDesktop from './img/contact-photo-desktop.png';
import contactPhotoMobile from './img/contact-photo-mobile.png';
import heroImage1 from './img/hero-image-1.png';

import Reveal from "components/Reveal";
import './Home.scss';

function scrollToContact(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault();
  const html = document.querySelector('html');
  if(!html) {
    return;
  }
  html.style.scrollBehavior = 'smooth';
  document.querySelector('section#contact')?.scrollIntoView(true);
  html.style.scrollBehavior = 'initial';
}

const Home: React.FC = () => {
  const { t } = useTranslation();
  const defaultTimeoutMS = 1200;

  return (
    <div className="view-wrapper">
        <section className="hero" >
          <div className="action-wrapper slide-group-left">
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
            <Link to="/portfolio"><button className="button">{ t('homepage.hero.button1') } </button></Link>
            <a href='/'>
              <button onClick={ (e) => scrollToContact(e) } className="button alt">
                { t('homepage.hero.button2') }
              </button>
            </a>
          </div>
          <div className="socialmedia-container slide-in-bottom">
            <a href="https://github.com/MiloszKowalski"
              rel="noopener noreferrer" target="_blank"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/mkowalskidev/"
              rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/mkowalski.dev/"
              rel="noopener noreferrer" target="_blank"><InstagramIcon /></a>
          </div>
          <img id="hero-image" src={ heroImage1 } alt="" className="slide-in-right"/>
          <Media queries={breakpoints}>
            { matches => (
              <Fragment>
                { matches.phone && <HeroMobile id="hero-mobile-svg" /> }
                { matches.tabletAndAbove && <HeroDesktop id="hero-desktop-svg" /> }
              </Fragment>
            )}
          </Media>
        </section>
        <section className="coding-with-passion">
          <Reveal direction="bottom" cascade>
          <div className="coding-text-wrapper">
            <h3>{ t('homepage.coding with passion.heading') }</h3>
            <p>{ t('homepage.coding with passion.p1') }</p>
            <p>{ t('homepage.coding with passion.p2') }</p>
            <p>{ t('homepage.coding with passion.p3') }</p>
            <Link to="/resume"><div className="button purple">
              { t('homepage.coding with passion.button') }
            </div></Link>
          </div>
          </Reveal>
          <Reveal direction="left">
          <div className="coding-img-wrapper">
            <div className="coding-img"></div>
          </div>
          </Reveal>
        </section>
        <section className="design-experience">
          <picture id="design-one-svg">
            <source srcSet={`${designOneMobile} 1x`} media="(max-width: 768px)" />
            <img srcSet={`${designOneDesktop} 2x`} alt="background" />
          </picture>
          <Reveal direction="bottom" offset={30} cascade>
          <div className="design-text-wrapper">
            <h3 className="alt">{ t('homepage.experience with design.heading') }</h3>
            <p>{ t('homepage.experience with design.p1') }</p>
            <p>{ t('homepage.experience with design.p2') }</p>
            <Link to="/portfolio/design"><div className="button">
              { t('homepage.experience with design.button') }
            </div></Link>
          </div>
          </Reveal>
          <Reveal offset={30} direction="right">
            <div className="design-img-wrapper">
              <div className="design-img-background">
                <div className="design-img"></div>
              </div>
            </div>
          </Reveal>
      </section>
      <section id="contact">
        <h3 className="alt">{ t('contact.header') }</h3>
          <Reveal direction="bottom" cascade>
          <form method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">{ t('contact.fullname') }*</label>
            <input type="text" name="name" id="name" required />
            <label htmlFor="email">E-mail*</label>
            <input type="text" name="email" id="email" required />
            <label htmlFor="phone">{ t('contact.phone') }</label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="content">{ t('contact.content') }*</label>
            <textarea name="content" id="content" rows={10} required></textarea>
            <button type="submit">{ t('contact.send') }</button>
          </form>
          </Reveal>
        <picture id="contact-photo">
          <source srcSet={`${contactPhotoMobile} 1x`} media="(max-width: 768px)" />
          <Reveal offset={50} direction="left">
          <img srcSet={`${contactPhotoDesktop} 2x`} alt="" />
          </Reveal>
        </picture>
        <img id="footer-img" src={ designTwo } alt="background" />
      </section>
      <Reveal offset={-10} direction="bottom">
      <footer>
        <div className="copyright">
          <p>{ t('homepage.footer.p1') }</p>
          <p>{ t('homepage.footer.p2') } &copy;{ new Date().getFullYear() }
          { t('homepage.footer.p3') }</p>
        </div>
      </footer>
      </Reveal>
    </div>
  )
}

export default Home;
