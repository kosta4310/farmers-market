import { FC, MouseEventHandler, useState } from 'react';
import SearchBar from '../../../common/SearchBar';
import logo from '../../../../assets/img/user-panel-logo.svg';
import user from '../../../../assets/icons/user-bar/user.svg';
import favorites from '../../../../assets/icons/user-bar/favorites.svg';
import basket from '../../../../assets/icons/user-bar/basket.svg';
import ModalRegistration from '../../ModalRegistration';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import DropDownMenu from '../../../common/DropDownMenu';
import { menuBuyer } from '../../../../constants/information';
import { registrationCommonSlice } from '../../../../store/reducers/registrationCommon';
import { Route } from '../../../../routers/route';

const UserPanel: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, lastName } = useAppSelector(state => state.buyersRegistration);
  const { setIsLogged } = registrationCommonSlice.actions;
  const { isLogged } = useAppSelector(state => state.registrationCommon);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOpenRegistration = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMenuClick: MouseEventHandler<HTMLAnchorElement> = event => {
    if (event.target) {
      setIsModalOpenMenu(false);
    }
  };

  function handleButtonLogout(): void {
    setIsModalOpenMenu(false);
    dispatch(setIsLogged(false));
    navigate(Route.main);
  }

  return (
    <div className="flex justify-between items-center px-10 py-1.5 bg-default shadow-md">
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
      <span className="flex gap-6 items-center cursor-pointer">
        {isLogged && name && lastName && (
          <>
            <DropDownMenu
              isModalOpenMenu={isModalOpenMenu}
              setIsModalOpenMenu={setIsModalOpenMenu}
              buttonName={
                <span>
                  {name} {lastName}
                </span>
              }
            >
              <ul className="cursor-auto">
                {menuBuyer.map(item => {
                  return (
                    <li key={item.id} className="pt-2">
                      <NavLink onClick={handleMenuClick} to={item.route}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <button onClick={handleButtonLogout}>Вихід із акаунту</button>
                </li>
              </ul>
            </DropDownMenu>
          </>
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
