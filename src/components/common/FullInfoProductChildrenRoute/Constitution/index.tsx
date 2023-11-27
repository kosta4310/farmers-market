import { FC } from 'react';

const Consitution: FC = () => {
  
  return (
    <div className=" w-[576px]">
      <div className="flex justify-between mb-2">
        <h2 className="font-medium text-text_com underline">
          Енергетична цінність 100 грамів продукту :
        </h2>
        <p className="font-medium text-text_com underline">330кКал</p>
      </div>
      <div className="mb-8">
        <p className="text-sm text-text_com">
          Молоко коров’яче пастеризоване, кальцій хлористий, закваска чистих
          молочнокислих бактерій, культури цвілевих грибків Penicillium
          Candidum, сичужний фермент тваринного походження, сіль кухонна
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-2 font-medium text-text_com underline">
          Термін придатності:
        </h2>
        <p className="text-sm text-text_com">
          28 діб за температури від 0 до 6 °C градусів
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-2 font-medium text-text_com underline">
          Харчова цінність:
        </h2>
        <div className="flex">
          <p className="text-sm text-text_com mr-2">Жири:</p>
          <p className="text-sm text-text_com mr-5">330</p>
          <p className="text-sm text-text_com mr-2">Білки:</p>
          <p className="text-sm text-text_com mr-5">330</p>
          <p className="text-sm text-text_com mr-2">Вуглеводи:</p>
          <p className="text-sm text-text_com mr-5">330</p>
        </div>
      </div>
      <div>
        <p className="mb-2 font-medium text-text_com underline">Склад :</p>
        <p className="text-sm text-text_com">
          Молоко коров’яче пастеризоване, кальцій хлористий, закваска чистих
          молочнокислих бактерій, культури цвілевих грибків Penicillium
          Candidum, сичужний фермент тваринного походження, сіль кухонна
        </p>
      </div>
    </div>
  );
};

export default Consitution;
