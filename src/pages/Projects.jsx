import { LeftArrow } from '../components/LeftArrow';
import { ProjectCard } from '../components/ProjectCard';
import { RightArrow } from '../components/RightArrow';
import RobotSimulator from '../components/RobotSimulator';
import './Projects.scss';
import styles from './Projects.module.scss';

function Projects() {
  const data = require('../static/info-about-projects.json');

  return (
    <>
      <LeftArrow to={'/portfolio'} />
      <RightArrow to={'/about'} />
      <section className={styles.projects}>
        {Object.values(data).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        {/* <h1>text</h1> */}
        <RobotSimulator />
      </section>
      {/* <h1 className="react-projects">React Applications</h1>
      <div id="projects" className="projects">
        {Object.values(data).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <section className="other-projects">
        <h1 className="">Other Projects</h1>
        <RobotSimulator />
      </section> */}
    </>
  );
}

export { Projects };
