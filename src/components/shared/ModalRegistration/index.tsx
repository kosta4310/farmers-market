import React, { FC, useState } from 'react';
import CustomModal from '../../common/CustomModal';
import AuthForm from './AuthForm';
import RegistrationForm from './RegistrationForm';
import RegistrationTitle from './RegistrationTitle';

interface ModalRegistrationProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRegistration: FC<ModalRegistrationProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [selectedTab, setSelectedTab] = useState<'auth' | 'registration'>(
    'auth',
  );

  const handleTabClick = (tab: 'auth' | 'registration') => {
    setSelectedTab(tab);
  };

  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <div className="flex flex-col w-full">
        <div className="flex text-center w-full mb-8">
          <RegistrationTitle
            value="auth"
            label="Увійти"
            selectedTab={selectedTab}
            handleTabClick={handleTabClick}
          />
          <RegistrationTitle
            value="registration"
            label="Зареєструватися"
            selectedTab={selectedTab}
            handleTabClick={handleTabClick}
          />
        </div>
        <div>
          {selectedTab === 'auth' ? (
            <AuthForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          ) : (
            <RegistrationForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </div>
    </CustomModal>
  );
};

export default ModalRegistration;
