import { Link } from 'react-router-dom';
import { Preloader } from '../components/Preloader';

function Portfolio() {
  return (
    <>
      <Preloader />
      <div id="1" className="smt">
        sexdrctfvgbhnjmk,l. sexdrctfvgbhnjmksexdrctfvgbhnjmk sexdrctfvgbhnjmk
      </div>
      <Link to={'/food-api'}>FoodAPI</Link>
      {/* <App /> */}
    </>
  );
}

export { Portfolio };
