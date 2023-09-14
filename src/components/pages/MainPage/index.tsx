import { FC, useEffect } from 'react';
import banner from '../../../assets/img/banner.svg';
import ModalConfirmationEmail from '../../shared/ModalConfirmationEmail';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { buyersRegistrationSlice } from '../../../store/reducers/buyersSlice';
import ModalError from '../../common/ModalError';
import { useQuery } from '../../../hooks/useQuery';
import { thunkConfirmEmail } from '../../../store/reducers/registrationCommon';

const MainPage: FC = () => {
  const { modalConfirmationEmailIsOpen } = useAppSelector(
    state => state.buyersRegistration,
  );
  const dispatch = useAppDispatch();
  const { error } = useAppSelector(state => state.registrationCommon);
  const { setModalConfirmationEmailIsOpen } = buyersRegistrationSlice.actions;
  const query = useQuery();

  useEffect(() => {
    const code = query.get('code');

    if (code) {
      dispatch(thunkConfirmEmail({ code }));
    }
  });

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
