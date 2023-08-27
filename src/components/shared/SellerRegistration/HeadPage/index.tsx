import { FC } from 'react';
import FormInputs from '../FormInputs';
// import { Link } from 'react-router-dom';
import Checkbox from '../../../common/Checkbox';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import ButtonArrow from '../../../common/ButtonArrow';
import { registrationSlice } from '../../../../store/reducers/registrationSlice';

const HeadPage: FC = () => {
  const dispatch = useAppDispatch();
  const { registrationPage } = useAppSelector((state) => state.registration);
  const { setRegistrationPage } = registrationSlice.actions;

  const handlerRightButton = () => {
    dispatch(setRegistrationPage(registrationPage + 1));
  };

  const handlerLeftButton = () => {
    dispatch(setRegistrationPage(registrationPage - 1));
  };

  return (
    <div className="flex flex-col gap-6 mb-7">
      <FormInputs />
      <div className="flex items-center justify-between">
        <ButtonArrow
          children="Назад"
          direction={'left'}
          onClick={handlerLeftButton}
        ></ButtonArrow>
        <ButtonArrow
          children="Далі"
          direction={'right'}
          onClick={handlerRightButton}
        ></ButtonArrow>
      </div>
    </div>
  );
};

export default HeadPage;
