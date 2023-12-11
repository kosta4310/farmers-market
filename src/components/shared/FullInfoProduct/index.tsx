import { FC } from 'react';

import defaultImg from '../../../assets/img/default-image.jpg';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import build from '../../../assets/icons/fullInfoCard/build.svg';

const FullInfoProduct: FC = () => {
  const location = useLocation().pathname.split('/')[3];

  const { id } = useParams();

  function position(): boolean {
    switch (location) {
      case 'questions':
        return true;
      case 'feedback':
        return true;

      default:
        return false;
    }
  }

  return (
    <div className="pt-10 mb-[97px] flex justify-center">
      <div className={position() ? 'w-[300px] mr-12' : 'w-[576px] mr-12'}>
        <div>
          <img
            src={defaultImg}
            alt="image"
            className={
              position() ? 'h-[300px] object-cover ' : 'h-[534px] object-cover '
            }
          />
        </div>
        {position() && (
          <div>
            <h2 className="text-xl font-medium text-text_com my-4">
              Твердий сир
            </h2>
            <div className="flex">
              {true && <img src={build} alt="logo" className="mr-3" />}
              <h3 className=" text-text_com text-lg">Сироварня “Василя”</h3>
            </div>
          </div>
        )}
      </div>
      <div>
        <div>
          <ul className="flex gap-14 mb-6">
            <li>
              <NavLink
                to={`/product/${id}/description`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-base text-secondary border-b-2 border-secondary'
                    : 'text-base text-disabled'
                }
              >
                Опис товару
              </NavLink>
            </li>
            {true && (
              <li>
                <NavLink
                  to={`/product/${id}/constitution`}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-base text-secondary border-b-2 border-secondary'
                      : 'text-base text-disabled'
                  }
                >
                  Склад
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to={`/product/${id}/questions`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-base text-secondary border-b-2 border-secondary'
                    : 'text-base text-disabled'
                }
              >
                Питання
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/product/${id}/feedback`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-base text-secondary border-b-2 border-secondary'
                    : 'text-base text-disabled'
                }
              >
                Відгуки
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FullInfoProduct;
