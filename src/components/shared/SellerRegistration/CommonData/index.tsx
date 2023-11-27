import { FC } from 'react';
import RegistrationField from '../../../common/RegistrationField';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { sellerRegistrationSlice } from '../../../../store/reducers/sellerSlice';
import { registrationCommonSlice } from '../../../../store/reducers/registrationCommon';

const CommonData: FC = () => {
  const { setEmail } = registrationCommonSlice.actions;
  const { email } = useAppSelector(state => state.registrationCommon);
  const { phoneNumber, name, lastName } = useAppSelector(
    state => state.sellerRegistration,
  );

  const dispatch = useAppDispatch();

  const handleChange = (field: string, value: string) => {
    dispatch(sellerRegistrationSlice.actions.SET_FIELD({ field, value }));
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
          onChange={value => handleChange('name', value)}
        />
        <RegistrationField
          label="Прізвище *"
          inputType="text"
          inputId="surname"
          value={lastName}
          placeholder="Введіть прізвище використовуючи українську або латинську абетку"
          onChange={value => handleChange('lastName', value)}
        />
        <RegistrationField
          label="Номер телефону *"
          inputType="number"
          inputId="numberPhone"
          value={phoneNumber !== '' ? phoneNumber : ''}
          hint="Ваш номер будет використано тільки для підтвердження"
          placeholder="Будь-ласка введіть вірний номер"
          onChange={value => handleChange('phoneNumber', value)}
        />
        <RegistrationField
          label="Електрона пошта *"
          inputType="text"
          inputId="email"
          value={email.trim() !== '' ? email : ''}
          placeholder="Будь-ласка введіть дійсну адресу"
          onChange={value => dispatch(setEmail(value))}
        />
      </div>
    </div>
  );
};

export default CommonData;
