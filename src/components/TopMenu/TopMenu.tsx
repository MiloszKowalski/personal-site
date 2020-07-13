import React, { useContext, useLayoutEffect, useState } from 'react';
import { useScrollPosition } from 'utils/useScrollPosition';
import { TopMenuContext } from 'contexts/TopMenuContext';
import Navigation from './Navigation';
import './TopMenu.scss';

const TopMenu: React.FC = () => {
  const { isExpanded, isDocked, setIsDocked,
    scrolledDown, setScrolledDown } = useContext(TopMenuContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    // If the position hasn't changed, return
    if(prevPos === currPos) return;

    // If we have scrolled down and the menu isn't expanded, hide menu
    if(prevPos.y >= currPos.y && !isExpanded) setScrolledDown(true);
    else setScrolledDown(false);

    // TopMenu docking should appear only on the main page
    if(window.location.pathname !== '/') return;

    // If we are on the top of the page and menu isn't expanded, dock menu
    if(currPos.y === 0 && !isExpanded) setIsDocked(true);
    else if (isDocked) setIsDocked(false);
  })

  function handleOnLoad() {
    // Menu docking should appear only on the main page
    if(window.location.pathname !== '/') return;

    // Dock the menu based on these conditions
    if(window.scrollY === 0 && !isExpanded) {
      setIsDocked(true);
    } else if (isDocked) {
      setIsDocked(false);
    }
  }

  // A fix for menu transitioning on load
  useLayoutEffect(() => {
    window.addEventListener('load', handleOnLoad);
    setTimeout(() => setIsLoaded(true), 250);
    return () => {
      window.removeEventListener('load', handleOnLoad);
    };
  });

  return (
    <nav className={
      `TopMenu
      ${isLoaded ? 'loaded' : ''}
      ${isExpanded ? 'expanded' : ''}
      ${isDocked ? 'docked' : 'normal'}
      ${scrolledDown && !isExpanded ? 'hidden' : ''}`
    }>
      <div className="topmenu-logo">
        <h1><b>M</b>K</h1>
      </div>
      <Navigation />
    </nav>
  )
}

export default TopMenu;
