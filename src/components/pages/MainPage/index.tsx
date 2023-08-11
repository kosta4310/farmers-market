import { FC } from 'react';
import banner from '../../../assets/img/banner.svg';

const MainPage: FC = () => {
  return (
    <>
      <img className="w-full h-auto" src={banner} alt="banner" />
    </>
  );
};

export default MainPage;
