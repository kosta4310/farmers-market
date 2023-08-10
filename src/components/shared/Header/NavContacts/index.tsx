import { FC } from "react";

const NavContacts: FC = () => {
  return (
    <ul className="flex items-center justify-center gap-8 mt-3 mb-2">
      <li>Про нас</li>
      <li>Правила та умови</li>
      <li>Доставка</li>
      <li>Оплата</li>
    </ul>
  );
};

export default NavContacts;
