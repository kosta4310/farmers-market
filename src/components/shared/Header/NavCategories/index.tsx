import { FC } from 'react';
import { categories } from '../../../../constants/categories.ts';

const NavCategories: FC = () => {
  return (
    <ul className="flex items-center justify-center gap-20 my-3 font-semibold">
      {categories.map((item) => (
        <li
          key={item.id}
          className="hover:text-default cursor-pointer transition duration-300 ease-in-out"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default NavCategories;
