import { FC } from 'react';

interface RegistrationTitleProps {
  handleTabClick: (tab: 'auth' | 'registration') => void;
  selectedTab: string;
  label: string;
  value: 'auth' | 'registration';
}

const RegistrationTitle: FC<RegistrationTitleProps> = ({
  selectedTab,
  handleTabClick,
  label,
  value,
}) => {
  return (
    <h2
      onClick={() => handleTabClick(value)}
      className={`w-2/4 text-xl font-medium cursor-pointer ${
        selectedTab === value
          ? 'border-b-2 border-green-500 text-black'
          : 'border-b-2 border-gray-400 text-gray-500'
      }`}
    >
      {label}
    </h2>
  );
};

export default RegistrationTitle;
