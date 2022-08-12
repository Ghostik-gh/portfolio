import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.length;
  return (
    <>
      <div className="cart" onClick={handleBasketShow}>
        <i className="bi-cart cart"></i>
      </div>
      {quantity ? <span className="quantity">{quantity}</span> : null}
    </>
  );
}

export { Cart };
