import { API_URL, API_KEY } from './config';
import { Cart } from './Components/Cart';
import { useEffect, useContext } from 'react';
import { ItemList } from './Components/ItemList';
import { BasketList } from './Components/BasketList';
import { Alert } from './Components/Alert';
import { ShopContext } from './context';
import { useNavigate } from 'react-router-dom';
import { Preloader } from '../components/Preloader';

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
          getItems(data.featured);
        })
        .catch((err) => console.error(err));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
