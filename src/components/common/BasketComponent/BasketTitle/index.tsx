import { FC } from 'react';

const BasketTitle: FC = () => {
  return (
    <div className="bg-but_backgraund h-[72px]">
      <ul className="flex justify-between h-full items-center ">
        <li className="w-[135px]">
          <p className="text-sm text-disabled w-[100px] ">
            Номер та дата замовлення
          </p>
        </li>
        <li className="w-[169px]">
          <p className="text-sm text-disabled w-[110px] ">
            Інформація про замовлення
          </p>
        </li>
        <li className="w-[132px]">
          <p className="text-sm text-disabled  ">Найменування товару</p>
        </li>
        <li className="w-[67px]">
          <p className="text-sm text-disabled  ">Кількість шт/кг/л</p>
        </li>
        <li className="w-[131px]">
          <p className="text-sm text-disabled  ">Сума замовлення</p>
        </li>
        <li className="w-[222px]">
          <p className="text-sm text-disabled w-[82px] ">Спосіб дотавки</p>
        </li>
        <li className="w-[181px]">
          <p className="text-sm text-disabled w-[93px] ">Стан замовлення</p>
        </li>
      </ul>
    </div>
  );
};

export default BasketTitle;
