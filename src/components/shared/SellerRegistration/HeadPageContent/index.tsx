import { ReactNode } from 'react';
import BusinessData from '../BusinessData';
import CommonData from '../CommonData';
import SellerRegistrationForm from '../SellerRegistrationForm';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import ShippingData from '../ShippingData';
import { sellerRegistrationSlice } from '../../../../store/reducers/sellerSlice.ts';

const HeadPageContent = () => {
  const { registrationPage } = useAppSelector(
    state => state.sellerRegistration,
  );

  const dispatch = useAppDispatch();

  const handleChangeRegistrationField = (field: string, value: string) => {
    dispatch(sellerRegistrationSlice.actions.SET_FIELD({ field, value }));
  };

  const display: { [key: string]: ReactNode } = {
    1: <CommonData handleChange={handleChangeRegistrationField} />,
    2: <BusinessData handleChange={handleChangeRegistrationField} />,
    3: <ShippingData handleChange={handleChangeRegistrationField} />,
    4: <SellerRegistrationForm handleChange={handleChangeRegistrationField} />,
  };

  return <>{display[registrationPage]}</>;
};
export default HeadPageContent;
