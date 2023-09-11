import { FC } from 'react';
import CustomModal from '../../common/CustomModal';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: any;
}

const ModalConfirmationEmail: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <span>
        Акаунт успішно створено. Для завершення реєстрації, будь-ласка
        підтвердіть вашу електронну адресу за посиланням, яке ми надіслали на
        електронну пошту, яку ви надали
      </span>
    </CustomModal>
  );
};

export default ModalConfirmationEmail;
