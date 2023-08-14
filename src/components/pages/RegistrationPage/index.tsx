import { FC } from 'react';
import BuyerRegistration from '../../shared/BuyerRegistration';
import SellerRegistration from '../../shared/SellerRegistration';

interface RegistrationPageProps {
  template: string;
}

const RegistrationPage: FC<RegistrationPageProps> = ({ template }) => {
  if (template === 'buyer') return <BuyerRegistration />;

  if (template === 'seller') return <SellerRegistration />;
};

export default RegistrationPage;
