import { FC } from 'react';
import Categories from './Categories';
import Contact from './Contact';
import Info from './Info';
import logo from '../../../assets/img/user-panel-logo.svg';

const Footer: FC = () => {
  return (
    <div className="bg-default flex justify-between px-10 py-5 text-white">
      <img src={logo} alt="logo" width={'240px'} height={'180px'} />
      <Categories />
      <Info />
      <Contact />
    </div>
  );
};

export default Footer;
