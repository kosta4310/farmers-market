import { FC } from 'react';

const Categories: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-semibold">Категорії</h2>
      <div className="flex gap-20">
        <ul className="flex flex-col gap-1">
          <li>М'ясо</li>
          <li>Молочна продукція</li>
          <li>Сири</li>
          <li>Фрукти та овочі</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>Яйця</li>
          <li>Бакалія</li>
          <li>Напої</li>
          <li>Крафтова продукція</li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
