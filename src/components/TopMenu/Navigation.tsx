import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as GBFlag } from 'components/svg/flags/GBFlag.svg';
import { ReactComponent as PLFlag } from 'components/svg/flags/PLFlag.svg';
import { TopMenuContext } from 'contexts/TopMenuContext';
import { Language } from 'enums/Language';
import MenuIcon from './MenuIcon';

const Navigation: React.FC = () => {
  const {t, i18n} = useTranslation();
  const { isExpanded, setIsExpanded } = useContext(TopMenuContext);

  function changeLanguage(): void {
    // Toggle the language on click
    if(i18n.language === Language.Polish)
      i18n.changeLanguage(Language.English);
    else
      i18n.changeLanguage(Language.Polish);
  }

  function handleClick(): void {
    // Close the menu after clicking background shadow
    if(isExpanded && window.innerWidth <= 1024) setIsExpanded(false);
  }

  return (
    <div>
      <div className="nav-shadow" onClick={ handleClick }></div>
      <ul>
        <li>{ t('resume') }</li>
        <li>{ t('portfolio') }</li>
        <li>{ t('about me') }</li>
        <li onClick={ changeLanguage }>
          { i18n.language === Language.Polish ?  <GBFlag /> : <PLFlag /> }
        </li>
      </ul>
      <MenuIcon />
    </div>
  );
}

export default Navigation;
