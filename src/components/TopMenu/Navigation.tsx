import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as GBFlag } from 'components/svg/flags/GBFlag.svg';
import { ReactComponent as PLFlag } from 'components/svg/flags/PLFlag.svg';

import { TopMenuContext } from 'contexts/TopMenuContext';

import { Language } from 'enums/Language';
import MenuIcon from './MenuIcon';

const Navigation: React.FC = () => {
  const {t, i18n} = useTranslation();
  const { isExpanded, setIsExpanded, setIsDocked } = useContext(TopMenuContext);

  function changeLanguage(): void {
    // Toggle the language on click
    if(i18n.language === Language.Polish)
      i18n.changeLanguage(Language.English);
    else
      i18n.changeLanguage(Language.Polish);

    // Refresh at home page to fix typewriter
    // multiple-ghost text on language change
    if(document.location.pathname === '/')
      document.location.reload();
  }

  function handleClick(): void {
    // Close the menu after clicking background shadow and navigating
    if(isExpanded && window.innerWidth <= 1024) setIsExpanded(false);

    setTimeout(() => {
      if(window.location.pathname !== '/') return;

      if(window.scrollY === 0) {
        setIsDocked(true);
      }
    });
  }

  return (
    <div>
      <div className="nav-shadow" onClick={ handleClick }></div>
      <ul>
        <li onClick={ handleClick }>
          <Link to="/">{ t('navigation.main page') }</Link>
        </li>
        <li onClick={ handleClick }>
          <NavLink to="/resume">{ t('navigation.resume') }</NavLink>
        </li>
        <li onClick={ handleClick }>
          <NavLink to="/portfolio">{ t('navigation.portfolio') }</NavLink>
        </li>
        <li onClick={ handleClick }>
          <NavLink to="/about">{ t('navigation.about me') }</NavLink>
        </li>
        <li className="flag" onClick={ changeLanguage }>
          { i18n.language === Language.Polish ?  <GBFlag /> : <PLFlag /> }
        </li>
      </ul>
      <MenuIcon />
    </div>
  );
}

export default Navigation;
