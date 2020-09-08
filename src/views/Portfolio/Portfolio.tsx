import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PortfolioSelectView from 'components/Portfolio/PortfolioSelectView/PortfolioSelectView';
import PortfolioDetailsView from 'components/Portfolio/PortfolioDetailsView/PortfolioDetailsView';
import PortfolioSideMenu from 'components/Portfolio/PortfolioSideMenu/PortfolioSideMenu';
import PortfolioMainView from 'components/Portfolio/PortfolioMainView';
import backendProjects from './Data/backendPortfolioData';
import frontendProjects from './Data/frontendPortfolioData';
import designProjects from './Data/designPortfolioData';
import './Portfolio.scss';

export type Project = {
  id: string,
  title: string,
  description: string,
  technologies: string[],
  picturesUris: string[],
  githubLink?: string
}

function isInMenu() {
  const path = window.location.pathname.split('/');
  return path.length < 4 && path[1] === 'portfolio';
}

const Portfolio: React.FC = () => {
  const { path } = useRouteMatch();
  const allProjects = Array.prototype.concat(backendProjects, frontendProjects, designProjects);

  return (
    <div className={`portfolio-view-wrapper ${isInMenu() ? 'narrow' : ''}`}>
      { isInMenu() ? <PortfolioSideMenu /> : '' }
      <Switch>
        <Route exact path={path}>
          <PortfolioSelectView  />
        </Route>
        <Route exact path={`${path}/backend`}>
          <PortfolioMainView header="BACKEND" projects={ backendProjects } />
        </Route>
        <Route exact path={`${path}/frontend`}>
          <PortfolioMainView header="FRONTEND" projects={ frontendProjects } />
        </Route>
        <Route exact path={`${path}/design`}>
          <PortfolioMainView header="DESIGN" projects={ designProjects } />
        </Route>
        <Route exact path={`${path}/:category/:project`}>
          <PortfolioDetailsView projects={ allProjects } />
        </Route>
      </Switch>
    </div>
  )
}

export default Portfolio;