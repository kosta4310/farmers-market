import { Fragment, ReactNode } from 'react';
import BusinessData from '../BusinessData';
import CommonData from '../CommonData';
import Registration from '../Registration';
import { useAppSelector } from '../../../../hooks/redux';

const HeadPageContent = () => {
  const { registrationPage } = useAppSelector((state) => state.registration);
  const display: { [key: string]: ReactNode } = {
    1: <CommonData />,
    2: <BusinessData />,
    3: <Registration />,
  };

  const content = <Fragment>{display[registrationPage]}</Fragment>;

  return content;
};
export default HeadPageContent;
