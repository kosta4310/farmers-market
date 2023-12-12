import { menuDashboard } from '../../constants/information.tsx';
import { FC, useEffect, useMemo, useState } from 'react';

import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { DeleteIcon } from '../../components/shared/Icons/dashBoardIcons.tsx';

const DashBoardLayout: FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(0);

  const activeId = useMemo(
    () => menuDashboard.find(f => f.route === location.pathname)?.id || 0,
    [location.pathname],
  );

  useEffect(() => {
    const activeMenuId =
      menuDashboard.find(f => f.route === location.pathname)?.id || 0;
    setActiveMenu(activeMenuId);
  }, [location.pathname]);

  const onMouseLeave = () => {
    setActiveMenu(activeId);
  };

  const onMouseEnter = (id: number) => {
    setActiveMenu(id);
  };
  return (
    <div className="min-h-screen font-default grid grid-cols-dash">
      <div className={'pt-[32px] pl-[32px] border-r-2'}>
        <ul>
          {menuDashboard.map(m => (
            <li
              key={m.id}
              onMouseLeave={() => onMouseLeave()}
              onMouseEnter={() => onMouseEnter(m.id)}
              className={`cursor-pointer flex text-[20px] gap-[10px] h-[56px] items-center`}
            >
              <div className={'w-[20px] h-[20px]'}>
                {m.icon &&
                  m.icon({ color: activeMenu === m.id ? 'secondary' : 'main' })}
              </div>
              <NavLink
                className={`${
                  activeMenu === m.id
                    ? 'text-[#0D7211] font-medium'
                    : 'text-[#444444]'
                }`}
                to={m.route}
              >
                {m.title}
              </NavLink>
            </li>
          ))}
          <li className="flex text-[20px] gap-[10px] h-[56px] items-center text-[#888888]">
            <div className={'w-[23px] h-[23px]'}>
              <DeleteIcon />
            </div>
            <button>Видалити акаунт</button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
