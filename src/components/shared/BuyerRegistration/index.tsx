import { FC } from 'react';
import { Link } from 'react-router-dom';
import RegistrationField from '../../common/RegistrationField';
import Checkbox from '../../common/Checkbox';
import Button from '../../common/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { registrationSlice } from '../../../store/reducers/registrationSlice.ts';

const BuyerRegistration: FC = () => {
  const { email, number } = useAppSelector((state) => state.registration);
  const { setEmail, setNumber } = registrationSlice.actions;
  const dispatch = useAppDispatch();

  const handleChangeLogin = (value: string) => {
    dispatch(setEmail(value));
  };

  const handleChangeNumber = (value: string) => {
    dispatch(setNumber(value));
  };

  const handleRegistration = () => {
    console.log(email, number);
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
    <div className="flex flex-col w-[558px] mt-20 mx-auto">
      <div className="flex flex-col gap-6 mb-7">
        <h2 className="text-2xl text-gray-700 font-medium">Реєстрація</h2>
        <RegistrationField
          label={`Ім'я`}
          inputType="text"
          inputId="name"
          placeholder="Введіть ім'я використовуючи українську або латинську абетку"
        />
        <RegistrationField
          label="Прізвище"
          inputType="text"
          inputId="surname"
          placeholder="Введіть прізвище використовуючи українську або латинську абетку"
        />
        <RegistrationField
          label="Номер телефону"
          inputType="number"
          inputId="number"
          value={number !== '' ? number : ''}
          hint="Ваш номер будет використано тільки для підтвердження"
          placeholder="Будь-ласка введіть вірний номер"
          onChange={handleChangeNumber}
        />
        <RegistrationField
          label="Електрона пошта"
          inputType="text"
          inputId="email"
          value={email.trim() !== '' ? email : ''}
          placeholder="Будь-ласка введіть дійсну адресу"
          onChange={handleChangeLogin}
        />
        <RegistrationField
          label="Пароль"
          inputType="password"
          inputId="password"
          placeholder="Будь-ласка введіть дійсні значення"
          hint="Пароль має містити мінімум 8 символів, одну маленьку літеру та одну велику літеру"
        />
        <RegistrationField
          label="Пароль"
          inputType="password"
          inputId="passwordRepeat"
          placeholder="Підтвердіть пароль"
        />
        <Checkbox label={checkboxLabel} inputId="rulesCheckbox" />
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
    </div>
  );
};

export default BuyerRegistration;
