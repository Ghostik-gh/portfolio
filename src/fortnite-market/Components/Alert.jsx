import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
  const { alertName: name = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <>
      <div id="toast-container" className="toast-market">
        {name} добавлен в корзину
      </div>
    </>
  );
}

export { Alert };
