import { FC } from "react";

const Categories: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div><h2 className="font-semibold text-xl">Категорії</h2></div>
      <div className="flex gap-x-5">
        <div className="flex flex-col gap-y-0.5 items-start justify-start">
          <div>М'ясо</div>
          <div>Молочна продукція</div>
          <div>Сири</div>
          <div>Фрукти та овочі</div>
        </div>
        <div className="flex flex-col gap-y-0.5 items-start justify-start">
          <div>Яйця</div>
          <div>Бакалія</div>
          <div>Напої</div>
          <div>Крафтові продукти</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;