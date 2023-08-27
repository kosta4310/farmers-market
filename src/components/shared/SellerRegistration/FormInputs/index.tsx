import { ReactNode } from 'react';
import BusinessData from '../BusinessData';
import CommonData from '../CommonData';
import Registration from '../Registration';
import { useAppSelector } from '../../../../hooks/redux';

const FormInputs = () => {
  const { registrationPage } = useAppSelector((state) => state.registration);
  const display: { [key: string]: ReactNode } = {
    1: <CommonData />,
    2: <BusinessData />,
    3: <Registration />,
  };

  const content = <div>{display[registrationPage]}</div>;

  return content;
};
export default FormInputs;
