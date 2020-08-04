import React from 'react';
import ContactLabel from 'components/Resume/ContactLabel';
import './Resume.scss';
import GithubIcon from 'components/svg/icons/Github.svg';
import LinkedInIcon from 'components/svg/icons/LinkedIn.svg';
import InstagramIcon from 'components/svg/icons/Instagram.svg';
import GlobeIcon from 'components/svg/icons/Globe.svg';
import PhoneIcon from 'components/svg/icons/Phone.svg';
import EmailIcon from 'components/svg/icons/Email.svg';
import { ReactComponent as ResumeTop } from 'views/Resume/svg/ResumeTop.svg';

const Resume: React.FC = () => {
  return (
    <div className="view-wrapper resume">
      <section className="resume-top">
        <header>
          <h1>Miłosz Kowalski</h1>
          <h2>FULL STACK .NET DEVELOPER</h2>
        </header>
        <div className="grid-contact-wrapper">
          <ul>
            <li><ContactLabel svgSrc={ GlobeIcon } label="www.mkowalski.dev" /></li>
            <li><ContactLabel svgSrc={ PhoneIcon } label="(+48) 500 067 012" /></li>
            <li><ContactLabel svgSrc={ EmailIcon } label="miloszkowalski@protonmail.com" /></li>
          </ul>
          <ul>
            <a href="https://github.com/MiloszKowalski"
              rel="noopener noreferrer" target="_blank">
              <li><ContactLabel svgSrc={ GithubIcon } label="/MiloszKowalski" /></li>
            </a>
            <a href="https://www.linkedin.com/in/miłosz-kowalski-462404180/"
                rel="noopener noreferrer" target="_blank">
              <li><ContactLabel svgSrc={ LinkedInIcon } label="/mkowalskidev" /></li>
            </a>
            <a href="https://www.instagram.com/mkowalski.dev/"
                rel="noopener noreferrer" target="_blank">
              <li><ContactLabel svgSrc={ InstagramIcon } label="/mkowalski.dev" /></li>
            </a>
          </ul>
        </div>
        <div className="resume-photo-wrapper">
          <div className="resume-photo"></div>
        </div>
        <ResumeTop />
      </section>
    </div>
  );
}

export default Resume;