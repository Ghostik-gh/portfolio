import { useContext } from 'react';
import { ShopContext } from '../context';

function Item(props) {
  const { addOrder } = useContext(ShopContext);
  const altImg = require('../../images/fortnite_alt.jpg');
  const { id, name, description, price, full_background } = props;

  return (
    <div className="card-market card py-2">
      <div className="card-image">
        <img src={full_background ? full_background : altImg} alt={name} />
      </div>
      <div className="card-body">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn btn-secondary"
          onClick={() =>
            addOrder({
              id,
              name,
              price,
            })
          }
        >
          Buy {price}
        </button>
      </div>
    </div>
  );
}

export { Item };
