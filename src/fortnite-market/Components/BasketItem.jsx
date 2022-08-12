import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, addQuantity, reduceQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      {name}
      <i
        className="bi-patch-minus inc-dec-order px-2"
        onClick={() => reduceQuantity(id)}
      ></i>
      <span className=""> x{quantity} </span>
      <i
        className="bi-patch-plus inc-dec-order px-2 "
        onClick={() => addQuantity(id)}
      ></i>
      = {price}
      <span
        className="secondary-content pointer close-btn"
        onClick={() => removeFromBasket(id)}
      >
        <i className="bi-x-lg " />
      </span>
    </li>
  );
}

export { BasketItem };
