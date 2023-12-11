import { FC } from 'react';

import { mainCategories } from '../../../../constants/categories.ts';

const Categories: FC = () => {
  const firstCategories = mainCategories.slice(0, 4);
  const secondCategories = mainCategories.slice(4);

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-semibold">Категорії</h2>
      <div className="flex gap-20">
        <ul className="flex flex-col gap-1">
          {firstCategories.map(({ id, label }) => (
            <li
              key={id}
              className="hover:opacity-70 cursor-pointer transition duration-300 ease-in-out"
            >
              {label}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1">
          {secondCategories.map(({ id, label }) => (
            <li
              key={id}
              className="hover:opacity-70 cursor-pointer transition duration-300 ease-in-out"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
