import { Link } from 'react-router-dom';
import { LeftArrow } from '../components/LeftArrow';
import { RightArrow } from '../components/RightArrow';

function Projects() {
  const foodImg = require('../images/food.jpg');
  const marketImg = require('../images/market.jpg');
  const moviesImg = require('../images/movies-api.jpg');

  return (
    <>
      <LeftArrow to={'/portfolio'} />
      <div id="projects" className="projects">
        <div className="card-projects card">
          <img src={foodImg} className="card-img-top" alt="..." />
          <div className="card-body card-projects-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'food-api'} className="btn btn-secondary">
              Food-API
            </Link>
          </div>
        </div>

        <div className="card-projects card">
          <img src={marketImg} className="card-img-top" alt="..." />
          <div className="card-body card-projects-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'fortnite-market'} className="btn btn-secondary">
              Market
            </Link>
          </div>
        </div>

        <div className="card-projects card">
          <img src={moviesImg} className="card-img-top" alt="..." />
          <div className="card-body card-projects-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'movies-api'} className="btn btn-secondary">
              Movies
            </Link>
          </div>
        </div>
      </div>
      <RightArrow to={'/about'} />
    </>
  );
}

export { Projects };
