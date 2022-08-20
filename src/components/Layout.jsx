import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="app">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
