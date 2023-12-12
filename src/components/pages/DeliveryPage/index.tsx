import { FC } from 'react';

const DeliveryPage: FC = () => {
  return (
    <div className="px-10 my-20">
      <h1 className="text-[40px] text-secondary font-semibold leading-9 mb-10">
        Доставка
      </h1>
      <h2 className="text-2xl text-text_com font-semibold mb-4">
        Кур’єрська доставка по Київу
      </h2>
      <p className="text-lg  leading-6 text-text_com mb-8">
        Укладати договір (умову) з кур'єрськими фірмами які реалізують у
        вказаний час. Вартість доставлення кур’єром буду додаватись в загальний
        чек покупця.
      </p>
      <h2 className="text-2xl text-text_com font-semibold mb-4">
        Доставка від фермера
      </h2>
      <p className="text-lg  leading-6 text-text_com ">
        Фермер вказує в які дні в нього реалізується доставлення, формує
        загальний лист і вказаний термін зобов'язав привезти продукцію
      </p>
    </div>
  );
};

export default DeliveryPage;
