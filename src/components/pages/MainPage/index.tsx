import { FC, useEffect } from 'react';
import banner from '../../../assets/img/banner.svg';
import ModalConfirmationEmail from '../../shared/ModalConfirmationEmail';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { buyersRegistrationSlice } from '../../../store/reducers/buyersSlice';
import ModalError from '../../common/ModalError';
import { useQuery } from '../../../hooks/useQuery';
import { thunkConfirmEmail } from '../../../store/reducers/registrationCommon';
import { Role } from '../../../store/types';

const MainPage: FC = () => {
  const { modalConfirmationEmailIsOpen } = useAppSelector(
    state => state.buyersRegistration,
  );
  const dispatch = useAppDispatch();
  const { error } = useAppSelector(state => state.registrationCommon);
  const { setModalConfirmationEmailIsOpen, setName, setLastName } =
    buyersRegistrationSlice.actions;
  const query = useQuery();

  useEffect(() => {
    const code = query.get('code');

    if (code) {
      dispatch(thunkConfirmEmail({ code })).then(res => {
        if (res.payload.user.role === Role.BUYER) {
          dispatch(setLastName(res.payload.lastName));
          dispatch(setName(res.payload.name));
        } /*дописать для продавца*/
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
