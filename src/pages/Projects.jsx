import { LeftArrow } from '../components/LeftArrow';
import { ProjectCard } from '../components/ProjectCard';
import { RightArrow } from '../components/RightArrow';

function Projects() {
  const data = require('../static/info-about-projects.json');

  return (
    <div className="container">
      <LeftArrow to={'/portfolio'} />
      <div id="projects" className="projects">
        {Object.values(data).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <RightArrow to={'/about'} />
    </div>
  );
}

export { Projects };
