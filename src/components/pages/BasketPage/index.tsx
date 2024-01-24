import { FC, MouseEvent, useEffect, useState } from 'react';

import BasketTitle from '../../common/BasketComponent/BasketTitle';
import { NavLink } from 'react-router-dom';

export interface Product {
  id: string;
  orderNum: string;
  time: string;
  title: string;
  quantity: string;
  price: string;
}

const BasketPage: FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const storedIds = localStorage.getItem('market');
    const cartItems: Product[] = storedIds ? JSON.parse(storedIds) : [];
    setProductList(cartItems);
  }, []);

  const removeStorage = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const updatedCartItems = productList.filter(item => item.id !== id);
    localStorage.setItem('market', JSON.stringify(updatedCartItems));
    setProductList(updatedCartItems);
  };

  const basketTotalPrice = () => {
    const total = productList.map(({ price }) => parseFloat(price));
    const sum = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return sum.toFixed(2);
  };

  return (
    <div className="mt-20 px-10">
      <div className=" mb-10">
        <h1 className="text-[40px] font-semibold leading-9 text-black ">
          Мій кошик
        </h1>
      </div>

      <BasketTitle />

      <div>
        <ul>
          {productList?.map(item => (
            <li
              key={item.id}
              className="h-[176px] border-t border-b mt-1 pt-3 flex justify-between"
            >
              <div className="w-32">
                <p className="text-text_com">№ {item.orderNum}</p>
                <p className="text-text_com">від {item.time}</p>
              </div>
              <div className="w-[169px]">
                <p className="text-blue">Фірма 'Крона'</p>
              </div>
              <div className="w-[132px]">
                <p className="text-text_com">{item.title}</p>
              </div>
              <div className="w-[67px]">
                <p className="text-text_com">{item.quantity} кг</p>
              </div>
              <div className="w-[131px]">
                <p className="text-text_com">{item.price} грн</p>
              </div>

              <div>
                <p className="text-text_com w-[222px]">Кур’єрська доставка</p>
              </div>

              <div className="w-[181px]">
                <button
                  type="button"
                  className="w-[181px] h-12 rounded-md text-attention border border-attention "
                  onClick={removeStorage}
                  id={item.id}
                >
                  Видалити
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex mt-14 mb-20 justify-between items-center">
        <h2 className="text-3xl font-semibold leading-6">
          Загальна сума замовлення
        </h2>
        <p className="text-3xl font-semibold leading-6">
          {basketTotalPrice()} грн
        </p>
        <NavLink to={`/`}>
          <button
            type="button"
            className="w-[240px] h-12 rounded-md text-secondary bg-white border border-secondary"
          >
            Перейти на головну
          </button>
        </NavLink>
        <NavLink to={`/basket/checkout`} state={{ prod: productList }}>
          <button
            type="button"
            className="w-[240px] h-12 rounded-md text-white bg-secondary "
          >
            Перейти до оформлення
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BasketPage;
