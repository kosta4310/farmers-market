import { FC } from "react";

const NavCategories: FC = () => {
  return (
    <ul className="flex items-center justify-center gap-20 my-3">
      <li>М'ясо</li>
      <li>Молочна продукція</li>
      <li>Сири</li>
      <li>Фрукти та овочі</li>
      <li>Яйця</li>
      <li>Бакалія</li>
      <li>Напої</li>
      <li>Крафтові продукти</li>
    </ul>
  );
};

export default NavCategories;
