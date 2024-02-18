import { FC, useState } from 'react';

import defaultProduct from '../../../assets/img/default-image.jpg';
import { NavLink } from 'react-router-dom';

export interface Props {
  prop: {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
  };
}

const SellerProductTamplate: FC<Props> = ({ prop }) => {
  const [isActive, setIsActive] = useState(false);
  const [isModeration, setIsModeration] = useState(false);

  const moderationActive = () => {
    setIsModeration(true);
    setTimeout(() => {
      setIsActive(!isActive);

      setIsModeration(false);
    }, 2000);
  };

  const advertState = () => {
    if (isModeration) {
      return 'Знаходиться на модерації';
    }
    switch (isActive) {
      case false:
        return 'Неактивне оголошення';

      case true:
        return 'Оголошення опубліковано';

      default:
        break;
    }
  };

  return (
    <div className="w-full border border-stroke_input rounded-md ">
      <div className="h-[204px] px-4 py-2 flex justify-between">
        <div className="w-[180px] h-[188px] mr-6">
          <img
            src={defaultProduct}
            alt="product"
            width={180}
            className="h-full object-cover "
          />
        </div>
        <ul className="mr-6">
          <li>
            <p className="text-sm text-disabled mb-2">Найменування товару</p>
          </li>
          <li>
            <p className="text-text_com mb-4">{prop.name}</p>
          </li>
          <li>
            <p className="text-sm text-disabled mb-2">
              Категорія та підкатегорія товару
            </p>
          </li>
          <li>
            <p className="text-text_com mb-4">
              Фрукти та овочі • Фрукти • Груши
            </p>
          </li>
          <li>
            <p className="text-sm text-disabled mb-2 ">Стан оголошення</p>
          </li>
          <li>
            <p className="text-text_com">{advertState()}</p>
          </li>
        </ul>

        <ul>
          <li>
            <p className="text-sm text-disabled mb-2">Ціна за одиницю</p>
          </li>
          <li>
            <p className="text-text_com mb-4"> {prop.price} грн</p>
          </li>
          <li>
            <p className="text-sm text-disabled mb-2 ">
              Мінімальна та максимальна кількість товару
            </p>
          </li>
          <li>
            <p className="text-text_com mb-4">0,50 кг • 5,00 кг</p>
          </li>
          <li>
            <p className="text-sm text-disabled mb-2">
              Дата розміщення замовлення
            </p>
          </li>
          <li>
            <p className="text-text_com">17.08.2023</p>
          </li>
        </ul>
      </div>
      <div className="w-full border-t border-stroke_input h-20 flex justify-around items-center ">
        <button
          type="button"
          disabled={isModeration}
          className={
            isModeration
              ? 'w-[272px] h-12 rounded-md bg-input text-white '
              : 'w-[272px] h-12 rounded-md bg-secondary text-white'
          }
          onClick={moderationActive}
        >
          {isActive ? 'Деактивувати оголошення' : 'Активувати оголошення'}
        </button>
        <NavLink
          to={('/dashboard/products/edit')}
          state={prop}
          onClick={e => {
            if (isActive || isModeration) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="button"
            disabled={isModeration}
            className={
              isModeration
                ? 'w-[272px] h-12 rounded-md border border-input text-input '
                : 'w-[272px] h-12 rounded-md border border-secondary text-secondary '
            }
          >
            Редагувати
          </button>
        </NavLink>
        <div className="w-[272px]">
          {!isActive && (
            <button
              type="button"
              disabled={isModeration}
              className={
                isModeration
                  ? 'w-[272px] h-12 rounded-md border border-input text-input '
                  : 'w-[272px] h-12 rounded-md border border-secondary text-secondary '
              }
              onClick={() => console.log('delete')}
            >
              Видалити оголошення
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default SellerProductTamplate;
