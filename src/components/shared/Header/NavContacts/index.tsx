import { FC } from 'react';
import { Link } from 'react-router-dom';
import { information } from '../../../../constants/information.ts';

const NavContacts: FC = () => {
  return (
    <ul className="flex items-center justify-center gap-8 mt-3 mb-2">
      {information.map((item) => (
        <li
          key={item.id}
          className="hover:text-default cursor-pointer transition duration-300 ease-in-out"
        >
          <Link to={item.route}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavContacts;
