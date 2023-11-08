import { FC, useEffect } from 'react';
import banner from '../../../assets/img/banner.svg';
import ModalConfirmationEmail from '../../shared/ModalConfirmationEmail';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { buyersRegistrationSlice } from '../../../store/reducers/buyersSlice';
import ModalError from '../../common/ModalError';
import { useQuery } from '../../../hooks/useQuery';
import {
  registrationCommonSlice,
  thunkConfirmEmail,
} from '../../../store/reducers/registrationCommon';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { error, modalConfirmationEmailIsOpen } = useAppSelector(
    state => state.registrationCommon,
  );
  const { photo } = useAppSelector(state => state.sellerRegistration);
  const { setName, setLastName } = buyersRegistrationSlice.actions;

  const { setModalConfirmationEmailIsOpen } = registrationCommonSlice.actions;
  const query = useQuery();

  useEffect(() => {
    const code = query.get('code');

    if (code) {
      dispatch(thunkConfirmEmail({ code })).then(res => {
        if (res.payload.buyer) {
          dispatch(setLastName(res.payload.buyer.lastName));
          dispatch(setName(res.payload.buyer.name));
        } else {
          dispatch(setLastName(res.payload.seller.lastName));
          dispatch(setName(res.payload.seller.name));
        }
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
      <img src={photo} className="w-20" alt="foto" />
    </>
  );
};

export default MainPage;
