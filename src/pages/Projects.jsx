import { Link } from 'react-router-dom';

function Projects() {
  const foodImg = require('../images/food.jpg');
  const marketImg = require('../images/market.jpg');

  return (
    <div id="projects" className="list">
      <div className="card">
        <img src={foodImg} className="card-img-top" alt="..." />
        <div className="card-body">
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
      <div className="card">
        <img src={marketImg} className="card-img-top" alt="..." />
        <div className="card-body">
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
    </div>
  );
}

export { Projects };
