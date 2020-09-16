import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useRouteMatch } from 'react-router-dom';
import { Project } from 'views/Portfolio/Portfolio';
import Fade from 'react-reveal/Fade';

type Props = {
  header: string,
  projects: Project[]
}

const Backend: React.FC<Props> = ({ header, projects }) => {
  let { url } = useRouteMatch();
  const { t } = useTranslation();

  return (
    <div className="portfolio-items-view-wrapper">
      <h1>{ header }</h1>
      <div className="portfolio-items-view-grid">
        { projects.map(x => (
            <Link key={ x.id } to={ `${url}/${x.id}` }>
              <Fade>
              <div className="portfolio-project-card">
                <div style={{ backgroundImage: `url(${x.picturesUris[0]})`}}
                      className="portfolio-thumbnail-wrapper"></div>
                <h4>{ t(x.title) }</h4>
              </div>
              </Fade>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Backend;