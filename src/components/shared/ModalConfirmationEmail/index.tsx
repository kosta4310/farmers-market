import { FC } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import CustomModalWithRedux from '../../common/CustomModalWithRedux';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: ActionCreatorWithPayload<
    boolean,
    'registrationCommon/setModalConfirmationEmailIsOpen'
  >;
}

const ModalConfirmationEmail: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <CustomModalWithRedux
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
      <div className="text-center">
        Аккаунт успішно створено.
        <br /> Для завершення реєстрації, будь ласка,
        <br />
        підтвердіть вашу електронну адресу за <br />
        посиланням, яке ми надіслали на вказану
        <br /> Вами <b>електронну пошту</b>
      </div>
    </CustomModalWithRedux>
  );
};

export default ModalConfirmationEmail;
