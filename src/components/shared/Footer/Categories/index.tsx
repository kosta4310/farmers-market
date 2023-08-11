import { FC } from 'react';
import { categories } from '../../../../constants/categories.ts';

const Categories: FC = () => {
  const firstCategories = categories.slice(0, 4);
  const secondCategories = categories.slice(4);

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-semibold">Категорії</h2>
      <div className="flex gap-20">
        <ul className="flex flex-col gap-1">
          {firstCategories.map((item) => (
            <li
              key={item.id}
              className="hover:opacity-70 cursor-pointer transition duration-300 ease-in-out"
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1">
          {secondCategories.map((item) => (
            <li
              key={item.id}
              className="hover:opacity-70 cursor-pointer transition duration-300 ease-in-out"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
