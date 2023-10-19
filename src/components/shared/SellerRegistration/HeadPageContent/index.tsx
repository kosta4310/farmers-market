import { ReactNode } from 'react';
import BusinessData from '../BusinessData';
import CommonData from '../CommonData';
import SellerRegistrationForm from '../SellerRegistrationForm';
import { useAppSelector } from '../../../../hooks/redux';
import ShippingData from '../ShippingData';

const HeadPageContent = () => {
  const { registrationPage } = useAppSelector(
    state => state.sellerRegistration,
  );
  const display: { [key: string]: ReactNode } = {
    1: <CommonData />,
    2: <BusinessData />,
    3: <ShippingData />,
    4: <SellerRegistrationForm />,
  };

  return <>{display[registrationPage]}</>;
};
export default HeadPageContent;
