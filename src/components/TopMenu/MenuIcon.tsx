import React, { useContext } from 'react';
import { TopMenuContext } from 'contexts/TopMenuContext';

const MenuIcon: React.FC = () => {
  const { isExpanded, setIsExpanded, setIsDocked } = useContext(TopMenuContext);

  function handleClick(): void {
    // Docking should appear only on the main page
    if(window.location.pathname !== '/') return;

    // If on the top of the page, dock the menu after closing it
    if(isExpanded && window.scrollY === 0) {
      setTimeout(() => setIsDocked(true), 0);
    } else {
      setTimeout(() => setIsDocked(false), 0);
    }
    setIsExpanded(!isExpanded);
  }

  return (
  <div className="menu-icon">
    <div className={ isExpanded ? 'open' : '' }
      onClick={ handleClick } id="expand-icon">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
  );
}

export default MenuIcon;
