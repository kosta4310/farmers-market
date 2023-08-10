import { FC } from "react";
import { Link } from "react-router-dom";

const Info: FC = () => {
  return (
    <div className="flex flex-col gap-y-5 ">
    <div>
      <h2 className="font-semibold text-xl">Інформація</h2>
    </div>
    <div className="flex flex-col items-start justify-start gap-y-0.5 ">
      <Link to="/about">Про нас</Link>
      <Link to='/rules'>Правила та умови</Link>
      <Link to='/delivery'>Доставка</Link>
      <Link to='/payment'>Оплата</Link>
    </div>
    </div>
  );
};

export default Info;