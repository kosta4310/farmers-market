import { FC, useState } from 'react';
import SearchBar from '../../../common/SearchBar';
import logo from '../../../../assets/img/user-panel-logo.svg';
import user from '../../../../assets/icons/user-bar/user.svg';
import favorites from '../../../../assets/icons/user-bar/favorites.svg';
import basket from '../../../../assets/icons/user-bar/basket.svg';
import ModalRegistration from '../../ModalRegistration';
import { useAppSelector } from '../../../../hooks/redux';
import { Link } from 'react-router-dom';

const UserPanel: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, lastName } = useAppSelector(state => state.buyersRegistration);

  const { isLogged } = useAppSelector(state => state.registrationCommon);

  const handleOpenRegistration = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-between items-center px-10 py-1.5 bg-default shadow-md">
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
      <span className="flex gap-6 items-center cursor-pointer">
        {isLogged && name && lastName && (
          <span>
            {name} {lastName}
          </span>
        )}
        {!isLogged && (
          <img src={user} alt="user" onClick={handleOpenRegistration} />
        )}
        <img src={favorites} alt="favorites" />
        <img src={basket} alt="basket" />
      </span>
      <ModalRegistration
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default UserPanel;
