import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux.ts';

const SellerRegistration: FC = () => {
  const login = useAppSelector((state) => state.registration.login);

  return <div className="mt-20">Seller registration. Login: {login}</div>;
};

export default SellerRegistration;
