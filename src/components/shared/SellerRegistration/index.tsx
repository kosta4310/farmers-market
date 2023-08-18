import { FC } from 'react';
import SellerRegistrationForm from './SellerRegistrationForm';
import RegistrationLayout from '../../../layouts/RegistrationLayout';

const SellerRegistration: FC = () => {
  return (
    <RegistrationLayout>
      <SellerRegistrationForm />
    </RegistrationLayout>
  );
};

export default SellerRegistration;
