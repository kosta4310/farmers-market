import { FC } from "react";
import logo from "../../../../assets/img/user-panel-logo.svg";
import user from "../../../../assets/icons/user.svg";
import favorites from "../../../../assets/icons/favorites.svg";
import basket from "../../../../assets/icons/basket.svg";
import SearchBar from "../../../common/SearchBar";

const UserPanel: FC = () => {
  return (
    <div className="flex justify-between items-center px-10 py-1.5 bg-default shadow-md">
      <span>
        <img src={logo} alt="logo" />
      </span>
      <span>
        <SearchBar />
      </span>
      <span className="flex gap-6 items-center cursor-pointer">
        <img src={user} alt="user" />
        <img src={favorites} alt="favorites" />
        <img src={basket} alt="basket" />
      </span>
    </div>
  );
};

export default UserPanel;
