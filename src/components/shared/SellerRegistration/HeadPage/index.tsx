import { FC } from 'react';
import HeadPageContent from '../HeadPageContent';
import ButtonArrow from '../../../common/ButtonArrow';
import PageNavigation from '../PageNavigation';
import {
  checkFieldsFirstPage,
  checkFieldsSecondPage,
  checkFieldsThirdPage,
} from '../checkFields';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { sellerRegistrationSlice } from '../../../../store/reducers/sellerSlice';

const HeadPage: FC = () => {
  const {
    phoneNumber,
    name,
    lastName,
    businessName,
    sellerType,
    aboutUs,
    // factoryAddress,
    // workHoursFrom,
    // workHoursTo,
    // deliveryConditions,
  } = useAppSelector(state => state.sellerRegistration);

  const { email } = useAppSelector(state => state.registrationCommon);

  const arrayFieldsByPages: { [key: string]: () => boolean | void } = {
    1: () => checkFieldsFirstPage(name, lastName, phoneNumber, email),
    2: () => checkFieldsSecondPage(businessName, sellerType, aboutUs),
    3: () => checkFieldsThirdPage(),
    // factoryAddress,
    // workHoursFrom,
    // workHoursTo,
    // deliveryConditions,
  };

  const dispatch = useAppDispatch();
  const { registrationPage } = useAppSelector(
    state => state.sellerRegistration,
  );
  const { setRegistrationPage } = sellerRegistrationSlice.actions;

  const handlerRightButton = () => {
    const isValid = arrayFieldsByPages[registrationPage];
    if (isValid()) {
      dispatch(setRegistrationPage(registrationPage + 1));
    }
  };

  const handlerLeftButton = () => {
    dispatch(setRegistrationPage(registrationPage - 1));
  };

  return (
    <div className="flex flex-col gap-6 mb-7">
      <PageNavigation page={registrationPage} />
      <HeadPageContent />
      {registrationPage !== 4 && (
        <div className="flex items-center justify-between">
          <ButtonArrow
            direction={'left'}
            onClick={handlerLeftButton}
            hide={registrationPage === 1}
          >
            Назад
          </ButtonArrow>
          <ButtonArrow
            direction={'right'}
            onClick={handlerRightButton}
            hide={registrationPage === 4}
          >
            Далі
          </ButtonArrow>
        </div>
      )}
    </div>
  );
};

export default HeadPage;
