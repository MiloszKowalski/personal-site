import React, { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';
import { useTranslation } from 'react-i18next';

import ContactLabel from 'components/Resume/ContactLabel';

import { ReactComponent as ArrowIcon } from 'components/svg/icons/ArrowIcon.svg';
import { ReactComponent as ResumeTop } from 'views/Resume/svg/ResumeTop.svg';
import { ReactComponent as TimeLineEN } from './svg/TimeLineEN.svg';
import { ReactComponent as TimeLinePL } from './svg/TimeLinePL.svg';

import BackendIcon from './svg/BackendIcon.svg';
import DesignIcon from './svg/DesignIcon.svg';
import ExperienceIcon from './svg/ExperienceIcon.svg';
import FollowUPLogo from './svg/FollowUPLogo.svg';
import FrontendIcon from './svg/FrontendIcon.svg';
import SkillsIcon from './svg/SkillsIcon.svg';
import TechStackIcon from './svg/TechStackIcon.svg';

import EmailIcon from 'components/svg/icons/Email.svg';
import GithubIcon from 'components/svg/icons/Github.svg';
import GlobeIcon from 'components/svg/icons/Globe.svg';
import InstagramIcon from 'components/svg/icons/Instagram.svg';
import LinkedInIcon from 'components/svg/icons/LinkedIn.svg';
import PhoneIcon from 'components/svg/icons/Phone.svg';

import Reveal from "components/Reveal";
import './Resume.scss';

const Resume: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { openModal } = useContext(ModalContext);

  return (
    <div className="view-wrapper resume">
      <section className="resume-top faded slide-in-top">
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
            <a href="https://www.linkedin.com/in/mkowalskidev/"
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
        <Reveal direction="bottom">
          <header>
            <div className="resume-icon-wrapper header-wrapper">
              <img id="experience-icon" src={ ExperienceIcon } alt="experience" />
            </div>
            <h1>{ t('resume.experience') }</h1>
          </header>
        </Reveal>

        <div id="experience" className="resume-section-content">
          <Reveal direction="origin">
          <div className="resume-timeline">
            {  i18n.language === 'pl' ? (<TimeLinePL />) : (<TimeLineEN />) }
          </div>
          </Reveal>
          <Reveal direction="left">
          <div className="label-wrapper" onClick={ () => openModal('FollowUP') }>
            <div className="resume-icon-wrapper big-wrapper">
              <img id="followup" src={ FollowUPLogo } alt="FollowUP" />
            </div>
            <div className="company-title">
              <h4>followup.social</h4>
              <h5>Junior Full Stack Developer</h5>
            </div>
            <ArrowIcon />
          </div>
          </Reveal>
        </div>
      </section>
      <section className="resume-section">
        <Reveal direction="bottom">
          <header>
            <div className="resume-icon-wrapper header-wrapper">
              <img src={ TechStackIcon } alt="techstack" />
            </div>
            <h1>{ t('resume.techstack') }</h1>
          </header>
        </Reveal>
        <ul className="tech-stack">
            <Reveal direction="bottom">
            <li className="tech-stack-item" onClick={ () => openModal('BACKEND') }>
              <div className="resume-icon-wrapper big-wrapper">
                <img id="backend-icon" src={ BackendIcon } alt="backend" />
              </div>
              <div className="tech-stack-description">
                <h6>BACKEND</h6>
                <ul>
                  <li><b>C#</b> - { t('resume.tech.backend.C#') }</li>
                  <li><b>ASP.NET Core</b> - { t('resume.tech.backend.ASPNET Core') }</li>
                  <li><b>.NET</b> - { t('resume.tech.backend.NET') }</li>
                  <li><b>autofac</b> - { t('resume.tech.backend.autofac') }</li>
                  <li><b>xUnit.net</b> - { t('resume.tech.backend.xUnitnet') }</li>
                </ul>
              </div>
            </li>
            </Reveal>
            <Reveal direction="bottom">
            <li className="tech-stack-item" onClick={ () => openModal('FRONTEND') }>
              <div className="resume-icon-wrapper big-wrapper">
                <img id="frontend-icon" src={ FrontendIcon } alt="frontend" />
              </div>
              <div className="tech-stack-description">
                <h6>FRONTEND</h6>
                <ul>
                  <li><b>JavaScript</b> - { t('resume.tech.frontend.JavaScript') }</li>
                  <li><b>React.js</b> - { t('resume.tech.frontend.Reactjs') }</li>
                  <li><b>Vue.js</b> - { t('resume.tech.frontend.Vuejs') }</li>
                  <li><b>axios</b> - { t('resume.tech.frontend.axios') }</li>
                  <li><b>Jest</b> - { t('resume.tech.frontend.Jest') }</li>
                </ul>
              </div>
            </li>
            </Reveal>
            <Reveal direction="bottom">
            <li className="tech-stack-item" onClick={ () => openModal('DESIGN') }>
              <div className="resume-icon-wrapper big-wrapper">
                <img id="design-icon" src={ DesignIcon } alt="design" />
              </div>
              <div className="tech-stack-description">
                <h6>DESIGN</h6>
                <ul>
                  <li><b>Photoshop</b> - { t('resume.tech.design.Photoshop') }</li>
                  <li><b>Illustrator</b> - { t('resume.tech.design.Illustrator') }</li>
                  <li><b>Premiere Pro</b> - { t('resume.tech.design.PremierePro') }</li>
                  <li><b>After Effects</b> - { t('resume.tech.design.AfterEffects') }</li>
                  <li><b>Figma/Adobe Xd</b> - { t('resume.tech.design.figmaadobexd') }</li>
                </ul>
              </div>
            </li>
            </Reveal>
            <Reveal direction="bottom">
            <li id="tools-stack" className="tech-stack-item">
              <h6>TOOLS</h6>
              <span id="tools-span">Visual Studio 2019, VS Code, Postman, MMSM, SSH, Git Bash, FileZilla SFTP</span>
            </li>
            </Reveal>
        </ul>
      </section>
      <section className="resume-section">
        <Reveal direction="bottom">
        <header>
          <div className="resume-icon-wrapper header-wrapper">
            <img src={ SkillsIcon } alt="skills" />
          </div>
          <h1>{ t('resume.skills') }</h1>
        </header>
        </Reveal>
        <Reveal direction="bottom" cascade>
        <ul id="skills-list">
          <li><b>{ t('resume.skills-list.english-label') }</b> - { t('resume.skills-list.english') }</li>
          <li><b>{ t('resume.skills-list.abstract-label') }</b> - { t('resume.skills-list.abstract') }</li>
          <li><b>{ t('resume.skills-list.uiux-label') }</b> - { t('resume.skills-list.uiux') }</li>
          <li><b>{ t('resume.skills-list.version-label') }</b> - { t('resume.skills-list.version') }</li>
          <li><b>{ t('resume.skills-list.teamwork-label') }</b></li>
        </ul>
        </Reveal>
      </section>
    </div>
  );
}

export default Resume;