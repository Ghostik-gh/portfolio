import { Shop } from '../fortnite-market/Shop';
import '../fortnite-market/market.css';
import { ContextProvider } from '../fortnite-market/context';

function Market() {
  return (
    <>
      <ContextProvider>
        <Shop />
      </ContextProvider>
    </>
  );
}

export { Market };
