import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from '@reduxjs/toolkit';
import Button from '../../../common/Button';
import Checkbox from '../../../common/Checkbox';
import { checkFieldsThirdPage } from '../checkFields';
import RegistrationField from '../../../common/RegistrationField';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { registrationSlice } from '../../../../store/reducers/registrationSlice';

const Registration: FC = () => {
  const { setPassword, setRepeatPassword, setIsCheckRules } =
    registrationSlice.actions;

  const {
    email,
    numberPhone,
    name,
    surname,
    businessName,
    sellerType,
    factoryAddress,
    workSchedule,
    aboutUs,
    contactPerson,
    password,
    repeatPassword,
    workHoursFrom,
    workHoursTo,
    iban,
    bankName,
    mfo,
    erdpou,
    fullBusinessName,
    numberCard,
    cardExpiryDate,
    isCheckRules,
  } = useAppSelector((state) => state.registration);

  const dispatch = useAppDispatch();

  const handleChange = (
    action: (value: string) => AnyAction,
    value: string,
  ) => {
    dispatch(action(value));
  };

  const checkboxLabel = (
    <span className="text-xs">
      Продовжуючи, я погоджуюсь з{' '}
      <Link className="text-default font-semibold" to="/rules">
        умовами використання
      </Link>
    </span>
  );

  function handleRegistration() {
    if (checkFieldsThirdPage(password, repeatPassword, isCheckRules)) {
      console.log({
        email,
        numberPhone,
        name,
        surname,
        businessName,
        sellerType,
        factoryAddress,
        workSchedule,
        aboutUs,
        contactPerson,
        password,
        repeatPassword,
        workHoursFrom,
        workHoursTo,
        iban,
        bankName,
        mfo,
        erdpou,
        fullBusinessName,
        numberCard,
        cardExpiryDate,
      });
    }
  }

  const content = (
    <div className="flex flex-col w-[558px] mt-20 mx-auto">
      <div className="flex flex-col gap-6 mb-7">
        <RegistrationField
          label="Пароль *"
          inputType="password"
          inputId="password"
          value={password}
          placeholder="Будь-ласка введіть дійсні значення"
          hint="Пароль має містити мінімум 8 символів, одну маленьку літеру та одну велику літеру"
          onChange={(value) => handleChange(setPassword, value)}
        />

        <RegistrationField
          label="Пароль *"
          inputType="password"
          inputId="passwordRepeat"
          value={repeatPassword}
          placeholder="Підтвердіть пароль"
          onChange={(value) => handleChange(setRepeatPassword, value)}
        />

        <Checkbox
          label={checkboxLabel}
          inputId="rulesCheckbox"
          onChange={() => dispatch(setIsCheckRules(!isCheckRules))}
        />

        <span className="text-xs text-gray-500">
          Реєструючись, ви погоджуєтеся на зберігання і використання наданих
          вами особистих даних відповідно до чинного законодавства України про
          недоторканність особистої інформації.
        </span>

        <span className="flex justify-center mb-7">
          <Button color="green" size="w-9/12" onClick={handleRegistration}>
            Створити аккаунт
          </Button>
        </span>
      </div>
    </div>
  );
  return content;
};

export default Registration;
