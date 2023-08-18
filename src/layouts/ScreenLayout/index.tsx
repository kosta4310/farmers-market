import { FC } from 'react';
import Header from '../../components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/Footer';

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-default">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
