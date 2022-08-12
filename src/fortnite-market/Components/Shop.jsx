import { API_URL, API_KEY } from '../config';
import { Cart } from './Cart';
import { useEffect, useContext } from 'react';
import { Preloader } from './Preloader';
import { ItemList } from './ItemList';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { ShopContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const navigate = useNavigate();
  const { loading, order, isBasketShow, alertName, getItems } =
    useContext(ShopContext);

  useEffect(
    function setItems() {
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getItems(data.featured);
        })
        .catch((err) => console.error(err));
    },
    [isBasketShow]
  );

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <ItemList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
      <i
        className="fixed-bottom ms-4 mb-4 bi-arrow-left arrow-left"
        onClick={() => navigate(-1)}
      />
    </main>
  );
}

export { Shop };
