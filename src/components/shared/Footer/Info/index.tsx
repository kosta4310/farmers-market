import { FC } from 'react';
import { Link } from 'react-router-dom';
import { information } from '../../../../constants/information.tsx';

const Info: FC = () => {
  return (
    <div className="flex flex-col gap-y-5 ">
      <h2 className="text-2xl font-semibold">Інформація</h2>
      <div className="flex flex-col items-start justify-start gap-1">
        {information.map(item => (
          <Link
            key={item.id}
            className="hover:opacity-70 cursor-pointer transition duration-300 ease-in-out"
            to={item.route}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Info;
