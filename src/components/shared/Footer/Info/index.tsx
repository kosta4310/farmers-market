import { FC } from "react";

const Info: FC = () => {
  return (
    <div className="flex flex-col gap-y-2 ">
    <div>
      <h2 className="font-semibold text-xl">Інформація</h2>
    </div>
    <div className="flex flex-col items-start justify-start gap-y-0.5 ">
      <div>Про нас</div>
      <div>Правила та умови</div>
      <div>Доставка</div>
      <div>Оплата</div>
    </div>
    </div>
  );
};

export default Info;