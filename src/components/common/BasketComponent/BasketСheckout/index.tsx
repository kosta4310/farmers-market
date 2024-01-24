import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import defaultImage from '../../../../assets/img/default-image.jpg';
import { RootState } from '../../../../store/store';
import { NavLink, useLocation } from 'react-router-dom';
import { Product } from '../../../pages/BasketPage';
import BasketDelyveryType from '../BasketDelyveryType';

const BasketCheckout: FC = () => {
  const user = useSelector((state: RootState) => state.userState.user);
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [product, setProduct] = useState<Product[]>([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    lastName: '',
    phone: '',
    adress: '',
  });
  const location = useLocation();

  useEffect(() => {
    setUserInfo({
      name: user.name || '',
      lastName: user.lastName || '',
      phone: user.phoneNumber || '',
      adress: user.address || '',
    });
    setProduct(location.state.prod);
  }, [
    user.lastName,
    user.name,
    user.phoneNumber,
    user.address,
    location.state.prod,
  ]);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case '1':
        setUserInfo(prevState => ({
          ...prevState,
          name: value,
        }));
        break;
      case '2':
        setUserInfo(prevState => ({
          ...prevState,
          lastName: value,
        }));
        break;
      case '3':
        setUserInfo(prevState => ({
          ...prevState,
          phone: value,
        }));
        break;
      case '4':
        setUserInfo(prevState => ({
          ...prevState,
          adress: value,
        }));
        break;
      default:
        break;
    }
  };

  const basketTotalPrice = () => {
    const total = product.map(({ price }) => parseFloat(price));
    const sum = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return sum.toFixed(2);
  };

  const handlePayment = (e: { preventDefault: () => void; }) => {
    if (
      userInfo.name === '' ||
      userInfo.lastName === '' ||
      (userInfo.phone === '' && userInfo.adress === '') ||
      selectedDelivery === ''
    ) {
      e.preventDefault();
      return;
    }
    const paymentData = {
      user: userInfo,
      delivery: selectedDelivery,
      product: product,
      totalPrice: basketTotalPrice(),
    };
    console.log('Order info', paymentData);
  };

  return (
    <div className="mt-20 ">
      <div className=" mb-10 pl-10">
        <h1 className="text-[40px] font-semibold leading-9 text-black ">
          Оформити замовлення
        </h1>
      </div>

      <div className=" flex justify-center">
        <form className="w-[667px]  mb-10">
          <h2 className="text-2xl font-semibold text-text_com mb-6">
            Замовлення Фірма “Корона”
          </h2>
          <div>
            <p className="mb-2 font-medium text-text_com  ">Ім’я</p>
            <input
              className="w-full h-12 border  rounded-md px-4 py-[14px] text-text_com border-stroke_input mb-6"
              onChange={handlechange}
              value={userInfo.name}
              id="1"
              type="text"
            />
            <p className="mb-2 font-medium text-text_com ">Прізвище</p>
            <input
              className="w-full h-12 border  rounded-md px-4 py-[14px] text-text_com border-stroke_input mb-6"
              onChange={handlechange}
              value={userInfo.lastName}
              id="2"
              type="text"
            />
            <p className="mb-2 font-medium text-text_com ">Норме телефона * </p>
            <div className="flex">
              <p className="h-12 border  rounded-l-md px-4  flex items-center justify-center">
                +38
              </p>
              <input
                className="w-[347px] h-12 border-t border-r border-b  rounded-r-md px-4 py-[14px] text-text_com border-stroke_input mb-2"
                onChange={handlechange}
                value={userInfo.phone}
                id="3"
                type="text"
              />
            </div>

            <p className="text-xs text-input mb-[29px]">
              Це поле є обов'язковим.
            </p>
          </div>
          <div className="">
            <p className="font-medium text-black underline mb-2">
              Перелік товарів
            </p>

            <ul>
              {product?.map(item => (
                <li
                  key={item.id}
                  className="h-22 w-full flex justify-between mb-6"
                >
                  <p className="text-text_com w-[132px]">{item.title}</p>
                  <img
                    src={defaultImage}
                    alt="product"
                    className="w-[132px] h-[88px]"
                  />
                  <p className="text-text_com">{item.quantity} кг</p>
                  <p className="text-text_com w-[100px]">{item.price} грн</p>
                </li>
              ))}
            </ul>
          </div>
          <BasketDelyveryType
            setDelivery={setSelectedDelivery}
            delivery={selectedDelivery}
          />

          <div className="mb-10">
            <p className="font-medium text-text_com mb-2 ">Адрес доставки</p>
            <input
              className="w-full h-12 border  rounded-md px-4 py-[14px] text-text_com border-stroke_input mb-2"
              onChange={handlechange}
              value={userInfo.adress}
              placeholder="Оберіть адресу м. Київ"
              type="text"
              id="4"
            />
            <p className="text-xs text-input ">
              Оберіть місто зі списку, пропис киріліцею
            </p>
          </div>
          <div className="flex justify-between mb-10 ">
            <h2 className="text-2xl font-semibold text-black">
              Сумма до сплати
            </h2>
            <p className="text-2xl font-semibold text-black">
              {basketTotalPrice()} грн
            </p>
          </div>
          <div>
            <NavLink
              to={'/basket/checkout/paymant'}  onClick={handlePayment}
            >
              <button
                type="button"
                // onClick={handlePayment}
                className={
                  selectedDelivery
                    ? 'w-60 h-12 bg-secondary text-white rounded-md'
                    : 'w-60 h-12 bg-text_com text-white rounded-md disabled'
                }
              >
                Перейти до оплати
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BasketCheckout;
