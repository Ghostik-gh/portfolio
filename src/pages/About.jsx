import { LeftArrow } from '../components/LeftArrow';

function About() {
  return (
    <div className="container">
      <LeftArrow to={'/projects'} />
      <div className="container">About</div>
    </div>
  );
}
export { About };
