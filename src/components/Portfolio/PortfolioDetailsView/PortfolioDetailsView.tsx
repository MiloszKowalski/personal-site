import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Project } from 'views/Portfolio/Portfolio';
import { ReactComponent as BackArrowIcon } from 'components/svg/icons/BackArrowIcon.svg';
import { ReactComponent as GithubIcon } from 'components/svg/icons/Github.svg';
import ImageSlider from 'components/ImageSlider/ImageSlider';
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
      <div className="portfolio-project-preview">
        <ImageSlider images={ projectInfo?.picturesUris } />
        <div className="portfolio-project-title">
          <h1>{ t(projectInfo?.title || '') }</h1>
        </div>
        <div className="portfolio-technology-label-wrapper">
          { projectInfo?.technologies.map(x => (
            <div key={ x } className="portfolio-technology-label">
              { x }
            </div>
          )) }
        </div>
      </div>
      <div className="portfolio-project-description">
        <p>{ t(projectInfo?.description || '') }</p>
      </div>
      <div className="portfolio-back-button">
        <Link to={ oneUrlLevelUp }>
          <BackArrowIcon />{category}
        </Link>
      </div>
      { projectInfo?.githubLink ?
        <div className="portfolio-github-link">
          <a href={ projectInfo.githubLink } target='_blank' rel='noopener noreferrer'>
            <GithubIcon />
          </a>
        </div>
      : ''}
    </div>
  )
}

export default PortfolioDetailsView;