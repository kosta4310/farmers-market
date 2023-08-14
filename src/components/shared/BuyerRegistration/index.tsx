import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux.ts';

const BuyerRegistration: FC = () => {
  const login = useAppSelector((state) => state.registration.login);

  return <div className="mt-20">Buyer registration. Login: {login}</div>;
};

export default BuyerRegistration;
