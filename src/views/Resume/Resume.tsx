import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactLabel from 'components/Resume/ContactLabel';
import './Resume.scss';
import GithubIcon from 'components/svg/icons/Github.svg';
import LinkedInIcon from 'components/svg/icons/LinkedIn.svg';
import InstagramIcon from 'components/svg/icons/Instagram.svg';
import GlobeIcon from 'components/svg/icons/Globe.svg';
import PhoneIcon from 'components/svg/icons/Phone.svg';
import EmailIcon from 'components/svg/icons/Email.svg';
import ExperienceIcon from './svg/ExperienceIcon.svg';
import TechStackIcon from './svg/TechStackIcon.svg';
import SkillsIcon from './svg/SkillsIcon.svg';
import FollowUPLogo from './svg/FollowUPLogo.svg';
import { ReactComponent as ArrowIcon } from 'components/svg/icons/ArrowIcon.svg';
import { ReactComponent as TimeLineEN } from './svg/TimeLineEN.svg';
import { ReactComponent as TimeLinePL } from './svg/TimeLinePL.svg';
import { ReactComponent as ResumeTop } from 'views/Resume/svg/ResumeTop.svg';

const Resume: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="view-wrapper resume">
      <section className="resume-top">
        <header id="name">
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
      <section id="experience" className="resume-section">
        <header>
          <div className="resume-icon-wrapper header-wrapper">
            <img id="experience-icon" src={ ExperienceIcon } alt="experience" />
          </div>
          <h1>{ t('resume.experience') }</h1>
        </header>
        <div id="experience" className="resume-section-content">
          <div className="resume-timeline">
            {  i18n.language === 'pl' ? (<TimeLinePL />) : (<TimeLineEN />) }
          </div>
          <div className="label-wrapper">
            <div className="resume-icon-wrapper big-wrapper">
              <img id="followup" src={ FollowUPLogo } alt="FollowUP" />
            </div>
            <div className="company-title">
              <h4>followup.social</h4>
              <h5>Junior Full Stack Developer</h5>
            </div>
            <ArrowIcon />
          </div>
        </div>
      </section>
      <section className="resume-section">
        <header>
          <div className="resume-icon-wrapper header-wrapper">
            <img src={ TechStackIcon } alt="techstack" />
          </div>
          <h1>{ t('resume.techstack') }</h1>
        </header>
      </section>
      <section className="resume-section">
        <header>
          <div className="resume-icon-wrapper header-wrapper">
            <img src={ SkillsIcon } alt="skills" />
          </div>
          <h1>{ t('resume.skills') }</h1>
        </header>
      </section>
    </div>
  );
}

export default Resume;