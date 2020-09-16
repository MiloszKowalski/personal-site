import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ReactComponent as BackendIcon } from 'components/svg/icons/BackendIcon.svg';
import { ReactComponent as FrontendIcon } from 'components/svg/icons/FrontendIcon.svg';
import { ReactComponent as DesignIcon } from 'components/svg/icons/DesignIcon.svg';
import Fade from 'react-reveal/Fade';
import './PortfolioSelectView.scss';

const PortfolioSelectView: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <div className="portfolio-select-wrapper">
      <Fade>
        <Link to={`${url}/backend`}>
          <div className="portfolio-menu-card">
            <div className="portfolio-menu-card-icon-wrapper">
              <BackendIcon />
            </div>
            <h5>BACKEND</h5>
          </div>
        </Link>
        <Link to={`${url}/frontend`}>
          <div className="portfolio-menu-card">
            <div className="portfolio-menu-card-icon-wrapper">
              <FrontendIcon />
            </div>
            <h5>FRONTEND</h5>
          </div>
        </Link>
        <Link to={`${url}/design`}>
          <div className="portfolio-menu-card">
            <div className="portfolio-menu-card-icon-wrapper">
              <DesignIcon />
            </div>
            <h5>DESIGN</h5>
          </div>
        </Link>
      </Fade>
    </div>
  )
}

export default PortfolioSelectView;