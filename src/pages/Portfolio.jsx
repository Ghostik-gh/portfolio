import { About } from '../components/About';
import { Preloader } from '../components/Preloader';
import { Projects } from '../components/Projects';

function Portfolio() {
  return (
    <>
      <Preloader />
      <About />
      <Projects />
    </>
  );
}

export { Portfolio };
