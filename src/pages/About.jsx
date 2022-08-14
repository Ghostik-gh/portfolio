import { LeftArrow } from '../components/LeftArrow';

function About() {
  return (
    <>
      <LeftArrow to={'/projects'} />
      <div className="container">About</div>
    </>
  );
}
export { About };
