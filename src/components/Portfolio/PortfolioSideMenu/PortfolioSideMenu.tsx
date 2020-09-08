import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ReactComponent as BackendIcon } from 'components/svg/icons/BackendIcon.svg';
import { ReactComponent as FrontendIcon } from 'components/svg/icons/FrontendIcon.svg';
import { ReactComponent as DesignIcon } from 'components/svg/icons/DesignIcon.svg';
import './PortfolioSideMenu.scss';

const PortfolioSideMenu: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <div className="side-menu-wrapper">
      <ul>
        <NavLink to={`${url}/backend`}>
        <li>
          <div className="side-menu-icon-wrapper">
            <BackendIcon />
          </div>
          <h4>backend</h4>
        </li>
        </NavLink>
        <NavLink to={`${url}/frontend`}>
        <li>
          <div className="side-menu-icon-wrapper">
            <FrontendIcon />
          </div>
          <h4>frontend</h4>
        </li>
        </NavLink>
        <NavLink to={`${url}/design`}>
        <li>
          <div className="side-menu-icon-wrapper">
            <DesignIcon />
          </div>
          <h4>design</h4>
        </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default PortfolioSideMenu;