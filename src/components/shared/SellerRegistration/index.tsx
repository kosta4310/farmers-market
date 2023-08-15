import { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux.ts';

const SellerRegistration: FC = () => {
  const email = useAppSelector((state) => state.registration.email);

  return <div className="mt-20">Seller registration. Login: {email}</div>;
};

export default SellerRegistration;
