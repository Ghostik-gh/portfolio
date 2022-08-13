import { Shop } from '../fortnite-market/Shop';

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

export default Market;
