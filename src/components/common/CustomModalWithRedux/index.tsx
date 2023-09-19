import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-modal';
import close from '../../../assets/icons/common/close.svg';
import 'animate.css';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks/redux';

Modal.setAppElement('#root');

interface CustomModalProps {
  isModalOpen: boolean;
  setIsModalOpen: ActionCreatorWithPayload<
    boolean,
    'buersRegistration/setModalConfirmationEmailIsOpen'
  >;
  children: React.ReactNode;
}

const CustomModalWithRedux: FC<CustomModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      dispatch(setIsModalOpen(false));
      setIsClosing(false);
    }, 500);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      className={`bg-white mt-20 h-max w-4/12 max-lg:w-8/12 max-md:w-full
    p-11 outline-none shadow-sm ${
      isClosing
        ? 'animate__animated animate__fadeOutUp'
        : 'animate__animated animate__fadeInDown'
    }`}
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center bg-black/50"
    >
      <span
        className="cursor-pointer absolute top-4 right-5 hover:opacity-50 transition duration-200"
        onClick={handleCloseModal}
      >
        <img src={close} alt="close" />
      </span>
      {children}
    </Modal>
  );
};

export default CustomModalWithRedux;
