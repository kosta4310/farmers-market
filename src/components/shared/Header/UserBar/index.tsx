import { FC, MouseEventHandler, useState } from 'react';
import SearchBar from '../../../common/SearchBar';
import logo from '../../../../assets/img/user-panel-logo.svg';
import favorites from '../../../../assets/icons/user-bar/favorites.svg';
import basket from '../../../../assets/icons/user-bar/basket.svg';
import ModalRegistration from '../../ModalRegistration';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import DropDownMenu from '../../../common/DropDownMenu';
import { menuDashboard } from '../../../../constants/information.tsx';
import { registrationCommonSlice } from '../../../../store/reducers/registrationCommon';
import { Route } from '../../../../routers/route';
import userIcon from '../../../../assets/icons/user-bar/user.svg';
import { removeLocalStorageItem } from '../../../../utils/localStorageUtils.ts';

const UserBar: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);

  const { user } = useAppSelector(state => state.userState);
  const { setIsLogged } = registrationCommonSlice.actions;
  const { isLogged } = useAppSelector(state => state.registrationCommon);

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
    removeLocalStorageItem('token');
    navigate(Route.main);
  }

  return (
    <div className="flex justify-between items-center px-10 py-1.5 bg-default shadow-md">
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar />
      <span className="flex gap-6 items-center cursor-pointer">
        {isLogged && user.name && user.lastName && (
          <>
            <DropDownMenu
              isModalOpenMenu={isModalOpenMenu}
              setIsModalOpenMenu={setIsModalOpenMenu}
              buttonName={
                <span className={'text-white'}>
                  {user.name} {user.lastName.charAt(0).toUpperCase()}
                </span>
              }
            >
              <ul className="cursor-auto">
                {menuDashboard.map(item => {
                  return (
                    <li key={item.id} className="pt-2 flex gap-3">
                      <div className={'w-[20px] h-[20px]'}>
                        {item.icon && item.icon({ color: 'main' })}
                      </div>

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
          <img src={userIcon} alt="user" onClick={handleOpenRegistration} />
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

export default UserBar;
