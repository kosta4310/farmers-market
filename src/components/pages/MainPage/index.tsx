import { FC } from 'react';
import banner from '../../../assets/img/banner.svg';
import ModalConfirmationEmail from '../../shared/ModalConfirmationEmail';
import { useAppSelector } from '../../../hooks/redux';
import { buyersRegistrationSlice } from '../../../store/reducers/buyersSlice';
import ModalError from '../../common/ModalError';

const MainPage: FC = () => {
  const { modalConfirmationEmailIsOpen, error } = useAppSelector(
    state => state.buyersRegistration,
  );
  const { setModalConfirmationEmailIsOpen } = buyersRegistrationSlice.actions;
  return (
    <>
      <ModalConfirmationEmail
        isModalOpen={modalConfirmationEmailIsOpen}
        setIsModalOpen={setModalConfirmationEmailIsOpen}
      />
      {error && <ModalError>{error}</ModalError>}
      <img className="w-full h-auto" src={banner} alt="banner" />
    </>
  );
};

export default MainPage;
