import { FC } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import CustomModalWithRedux from '../../common/CustomModalWithRedux';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: ActionCreatorWithPayload<
    boolean,
    'buersRegistration/setModalConfirmationEmailIsOpen'
  >;
}

const ModalConfirmationEmail: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <CustomModalWithRedux
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
      <span>
        Акаунт успішно створено. Для завершення реєстрації, будь-ласка
        підтвердіть вашу електронну адресу за посиланням, яке ми надіслали на
        електронну пошту, яку ви надали
      </span>
    </CustomModalWithRedux>
  );
};

export default ModalConfirmationEmail;
