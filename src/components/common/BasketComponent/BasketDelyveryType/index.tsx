import { FC, useState } from 'react';

import basketInfo from '../../../../assets/icons/backet/basketInfo.svg';

interface BasketDeliveryTypeProps {
  delivery: string;
  setDelivery: (value: string) => void;
}

const BasketDelyveryType: FC<BasketDeliveryTypeProps> = ({
  setDelivery,
  delivery,
}) => {
  const [deliveryInfo, setDeliveryInfo] = useState(false);

  const handleOptionChange = (value: string) => {
    setDelivery(value);
  };

  return (
    <div>
      <p className="font-medium text-text_com mb-2 ">Оберіть спосіб доставки</p>

      <div className="flex justify-between mb-6 relative">
        <label className="flex items-center ">
          <input
            className="mr-2 w-6 h-6  accent-secondary "
            type="radio"
            value="Кур’єрська доставка"
            checked={delivery === 'Кур’єрська доставка'}
            onChange={() => handleOptionChange('Кур’єрська доставка')}
          />
          <p className="text-text_com mr-2">Кур’єрська доставка</p>
          <svg
            className="w-6 h-6 relative cursor-pointer"
            onMouseEnter={() => setDeliveryInfo(true)}
            onMouseLeave={() => setDeliveryInfo(false)}
          >
            <use href={basketInfo + '#info'} />
          </svg>
          <div
            className={
              deliveryInfo
                ? 'absolute bottom-[55px]  left-[30%] shadow-basket_info w-[173px] h-[92px] p-4 bg-white'
                : 'hidden'
            }
          >
            <p className="text-sm text-disabled">
              Сума кур’єрської доставки залежить від локації
            </p>
          </div>
        </label>

        <label className="flex items-center">
          <input
            className="mr-2 w-6 h-6  accent-secondary "
            type="radio"
            value="Доставка продавцем"
            checked={delivery === 'Доставка продавцем'}
            onChange={() => handleOptionChange('Доставка продавцем')}
          />
          <p className="text-text_com mr-2"> Доставка продавцем</p>
        </label>

        <label className="flex items-center">
          <input
            className="mr-2 w-6 h-6  accent-secondary "
            type="radio"
            value="Самовивіз"
            checked={delivery === 'Самовивіз'}
            onChange={() => handleOptionChange('Самовивіз')}
          />
          <p className="text-text_com mr-2"> Самовивіз</p>
        </label>
      </div>
    </div>
  );
};

export default BasketDelyveryType;
