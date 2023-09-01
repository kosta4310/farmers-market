import { FC } from 'react';
import BuyerRegistrationForm from './BuyerRegistrationForm';
import RegistrationLayout from '../../../layouts/RegistrationLayout';

const BuyerRegistration: FC = () => {
  return (
    <RegistrationLayout>
      <BuyerRegistrationForm />
    </RegistrationLayout>
  );
};

export default BuyerRegistration;
