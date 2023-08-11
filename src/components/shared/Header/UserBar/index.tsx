import { FC } from 'react';
import SearchBar from '../../../common/SearchBar';
import logo from '../../../../assets/img/user-panel-logo.svg';
import user from '../../../../assets/icons/user-bar/user.svg';
import favorites from '../../../../assets/icons/user-bar/favorites.svg';
import basket from '../../../../assets/icons/user-bar/basket.svg';

const UserPanel: FC = () => {
  return (
    <div className="flex justify-between items-center px-10 py-1.5 bg-default shadow-md">
      <img src={logo} alt="logo" />
      <SearchBar />
      <span className="flex gap-6 items-center cursor-pointer">
        <img src={user} alt="user" />
        <img src={favorites} alt="favorites" />
        <img src={basket} alt="basket" />
      </span>
    </div>
  );
};

export default UserPanel;
