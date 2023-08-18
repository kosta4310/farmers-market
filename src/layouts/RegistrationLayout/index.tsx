import React, { FC } from 'react';

interface RegistrationLayout {
  children: React.ReactNode;
}

const RegistrationLayout: FC<RegistrationLayout> = ({ children }) => {
  return <div className="w-[558px] mt-20 mx-auto">{children}</div>;
};

export default RegistrationLayout;
