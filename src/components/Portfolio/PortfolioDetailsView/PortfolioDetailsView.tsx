import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import { ReactComponent as BackArrowIcon } from 'components/svg/icons/BackArrowIcon.svg';
import { ReactComponent as GithubIcon } from 'components/svg/icons/Github.svg';
import { ReactComponent as Globe } from 'components/svg/icons/Globe.svg';
import { ReactComponent as HorizontalWaveMask } from 'components/svg/HorizontalWaveMask.svg';
import { ReactComponent as VerticalWave } from 'components/svg/VerticalWave.svg';

import { Project } from 'views/Portfolio/Portfolio';

import Reveal from 'components/Reveal';
import ImageSlider from 'components/ImageSlider';
import { breakpoints } from 'utils/mediaBreakpoints';
import './PortfolioDetailsView.scss';

type Props = {
  projects: Project[]
}

type Params = {
  category: string,
  project: string
}

const PortfolioDetailsView: React.FC<Props> = ({ projects }) => {
  const { t } = useTranslation();
  const { category, project } = useParams<Params>();
  const { url } = useRouteMatch();
  const oneUrlLevelUp = url.substring(0, url.lastIndexOf('/'));
  const projectInfo = getProjectInfo(project);

  function getProjectInfo(projectId: string) {
    return projects.find(x => x.id === projectId);
  }

  return (
    <div className="portfolio-details-wrapper">
      <Reveal direction="top">
      <div className="portfolio-project-preview">
        <ImageSlider images={ projectInfo?.picturesUris } />
        <div className="portfolio-project-title">
          <h1>{ t(projectInfo?.title || '') }</h1>
        </div>
        <Reveal direction="right" cascade>
        <div className="portfolio-technology-label-wrapper">
          { projectInfo?.technologies.map(x => (
              <div key={ x } className="portfolio-technology-label">
                { x }
              </div>
          )) }
        </div>
        </Reveal>
      </div>
      </Reveal>
      <div className="portfolio-project-description">
      <div id="portfolio-details-wave">
        <Media queries={breakpoints}>
            { matches => (
              <Fragment>
                { matches.mobile && <HorizontalWaveMask /> }
                { matches.desktop && <VerticalWave id="vertical-wave" /> }
              </Fragment>
            )}
        </Media>
      </div>
      <Reveal direction="origin">
        <div className="description-text">
          <p>{ t(projectInfo?.description || '') }</p>
        </div>
      </Reveal>
      </div>
      <div className="portfolio-back-button">
        <Link to={ oneUrlLevelUp }>
          <BackArrowIcon />{category}
        </Link>
      </div>
      { projectInfo?.websiteLink &&
        <div className="portfolio-link website">
          <a href={ projectInfo.websiteLink } target='_blank' rel='noopener noreferrer'>
            <Globe />
          </a>
        </div>
      }
      { projectInfo?.githubLink &&
        <div className="portfolio-link github">
          <a href={ projectInfo.githubLink } target='_blank' rel='noopener noreferrer'>
            <GithubIcon />
          </a>
        </div>
      }
    </div>
  )
}

export default PortfolioDetailsView;