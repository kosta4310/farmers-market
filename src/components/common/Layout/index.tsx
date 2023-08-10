import { FC } from "react";
import Header from "../../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
