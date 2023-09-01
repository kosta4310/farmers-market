import { FC } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import RegistrationField from '../../../common/RegistrationField';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { registrationSlice } from '../../../../store/reducers/registrationSlice';

const CommonData: FC = () => {
  const { setEmail, setNumberPhone, setSurname, setName } =
    registrationSlice.actions;

  const { email, numberPhone, name, surname } = useAppSelector(
    state => state.registration,
  );

  const dispatch = useAppDispatch();

  const handleChange = (
    action: (value: string) => AnyAction,
    value: string,
  ) => {
    dispatch(action(value));
  };

  return (
    <div className="flex flex-col w-[558px] mt-20 mx-auto">
      <div className="flex flex-col gap-6 mb-7">
        <h2 className="text-2xl text-gray-700 font-medium">Реєстрація</h2>
        <RegistrationField
          label={`Ім'я *`}
          inputType="text"
          inputId="name"
          value={name}
          placeholder="Введіть ім'я використовуючи українську або латинську абетку"
          onChange={value => handleChange(setName, value)}
        />
        <RegistrationField
          label="Прізвище *"
          inputType="text"
          inputId="surname"
          value={surname}
          placeholder="Введіть прізвище використовуючи українську або латинську абетку"
          onChange={value => handleChange(setSurname, value)}
        />
        <RegistrationField
          label="Номер телефону *"
          inputType="number"
          inputId="numberPhone"
          value={numberPhone !== '' ? numberPhone : ''}
          hint="Ваш номер будет використано тільки для підтвердження"
          placeholder="Будь-ласка введіть вірний номер"
          onChange={value => handleChange(setNumberPhone, value)}
        />
        <RegistrationField
          label="Електрона пошта *"
          inputType="text"
          inputId="email"
          value={email.trim() !== '' ? email : ''}
          placeholder="Будь-ласка введіть дійсну адресу"
          onChange={value => handleChange(setEmail, value)}
        />
      </div>
    </div>
  );
};

export default CommonData;
