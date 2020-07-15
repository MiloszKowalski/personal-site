import React from 'react';
import heroMobile from './svg/Hero-mobile.svg';
import heroDesktop from './svg/Hero-desktop.svg';
import './Home.scss';

const Home: React.FC = () => {

  return (
    <div className="view-wrapper">
      <section className="hero">
        <picture>
          <source srcSet={`${heroMobile} 1x`} media="(max-width: 768px)" />
          <img srcSet={`${heroDesktop} 2x`} alt="background" />
        </picture>
      </section>
    </div>
  )
}

export default Home;
