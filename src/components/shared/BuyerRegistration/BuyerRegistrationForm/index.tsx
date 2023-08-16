import { FC } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import RegistrationField from '../../../common/RegistrationField';
import Checkbox from '../../../common/Checkbox';
import Button from '../../../common/Button';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';
import { registrationSlice } from '../../../../store/reducers/registrationSlice.ts';
import { checkFields } from '../checkFields.ts';

const BuyerRegistrationForm: FC = () => {
  const {
    email,
    number,
    name,
    surname,
    password,
    repeatPassword,
    isCheckRules,
  } = useAppSelector((state) => state.registration);
  const {
    setEmail,
    setNumber,
    setSurname,
    setName,
    setPassword,
    setRepeatPassword,
    setIsCheckRules,
  } = registrationSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (
    action: (value: string) => AnyAction,
    value: string
  ) => {
    dispatch(action(value));
  };

  const handleRegistration = () => {
    checkFields(
      name,
      surname,
      number,
      email,
      password,
      repeatPassword,
      isCheckRules
    );
  };

  const checkboxLabel = (
    <span className="text-xs">
      Продовжуючи, я погоджуюсь з{' '}
      <Link className="text-default font-semibold" to="/rules">
        умовами використання
      </Link>
    </span>
  );

  return (
    <>
      <div className="flex flex-col gap-6 mb-7">
        <h2 className="text-2xl text-gray-700 font-medium">Реєстрація</h2>
        <RegistrationField
          label={`Ім'я`}
          inputType="text"
          inputId="name"
          value={name}
          placeholder="Введіть ім'я використовуючи українську або латинську абетку"
          onChange={(value) => handleChange(setName, value)}
        />
        <RegistrationField
          label="Прізвище"
          inputType="text"
          inputId="surname"
          value={surname}
          placeholder="Введіть прізвище використовуючи українську або латинську абетку"
          onChange={(value) => handleChange(setSurname, value)}
        />
        <RegistrationField
          label="Номер телефону"
          inputType="number"
          inputId="number"
          value={number !== '' ? number : ''}
          hint="Ваш номер будет використано тільки для підтвердження"
          placeholder="Будь-ласка введіть вірний номер"
          onChange={(value) => handleChange(setNumber, value)}
        />
        <RegistrationField
          label="Електрона пошта"
          inputType="text"
          inputId="email"
          value={email.trim() !== '' ? email : ''}
          placeholder="Будь-ласка введіть дійсну адресу"
          onChange={(value) => handleChange(setEmail, value)}
        />
        <RegistrationField
          label="Пароль"
          inputType="password"
          inputId="password"
          value={password}
          placeholder="Будь-ласка введіть дійсні значення"
          hint="Пароль має містити мінімум 8 символів, одну маленьку літеру та одну велику літеру"
          onChange={(value) => handleChange(setPassword, value)}
        />
        <RegistrationField
          label="Пароль"
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
      </div>
      <span className="flex justify-center mb-7">
        <Button color="green" size="w-9/12" onClick={handleRegistration}>
          Створити аккаунт
        </Button>
      </span>
    </>
  );
};

export default BuyerRegistrationForm;
