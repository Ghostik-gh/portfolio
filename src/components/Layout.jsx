import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
