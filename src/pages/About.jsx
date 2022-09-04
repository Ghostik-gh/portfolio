import { LeftArrow } from '../components/LeftArrow';

function About() {
  return (
    <div>
      <LeftArrow to={'/projects'} />
      <div className="">
        <h1 style={{ 'text-align': 'center' }}>My skills on Road Map</h1>
        <img
          src="https://github.com/Ghostik-gh/portfolio/blob/master/src/static/roadmap.webp?raw=true"
          alt="Road Map"
        />
      </div>
    </div>
  );
}
export { About };
