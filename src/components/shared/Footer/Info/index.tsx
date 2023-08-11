import { FC } from 'react';
import { Link } from 'react-router-dom';

const Info: FC = () => {
  return (
    <div className="flex flex-col gap-y-5 ">
      <h2 className="text-2xl font-semibold">Інформація</h2>
      <div className="flex flex-col items-start justify-start gap-1">
        <Link to="/about">Про нас</Link>
        <Link to="/rules">Правила та умови</Link>
        <Link to="/delivery">Доставка</Link>
        <Link to="/payment">Оплата</Link>
      </div>
    </div>
  );
};

export default Info;
