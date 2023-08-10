import { FC } from "react";
import Categories from "./Categories";
import Contact from "./Contact";
import logo from "../../../assets/img/user-panel-logo.svg";
import Info from "./Info";

const Footer: FC = () => {
  return <div className="flex justify-between bg-default px-10 py-10 text-white">
    <span>
        <img src={logo} alt="logo" width={'128px'} height={'96px'}/>
      </span>
    <Categories/>
    <Info/>
    <Contact/>
  </div>;
};

export default Footer;
