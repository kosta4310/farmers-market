import { FC } from 'react';
import RegistrationField from '../../../common/RegistrationField/index.tsx';
import Checkbox from '../../../common/Checkbox/index.tsx';
import Button from '../../../common/Button/index.tsx';
import UploadAndDisplayImage from '../../../common/FileUpload/index.tsx';
import RegistrationFieldArea from '../../../common/RegistrationFieldArea/index.tsx';
import CheckboxLabel from '../../../common/CheckboxLabel';
import ConsentProcessPersonalData from '../../../common/ConsentProcessPersonalData';
import useHandleChange from '../../../../hooks/useHandleChange.ts';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';
import { registrationSlice } from '../../../../store/reducers/registrationSlice.ts';
import { checkFields } from '../../../../utils/registration.util.ts';

// this is old code
const SellerRegistrationForm: FC = () => {
  const {
    setEmail,
    setNumberPhone,
    setSurname,
    setName,
    setBusinessName,
    setSellerType,
    setFactoryAddress,
    setWorkSchedule,
    setAboutUs,
    setContactPerson,
    setPassword,
    setRepeatPassword,
    setIsCheckRules,
  } = registrationSlice.actions;

  const {
    template,
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
    isCheckRules,
  } = useAppSelector(state => state.registration);

  const handleChange = useHandleChange();
  const dispatch = useAppDispatch();

  const handleRegistration = () => {
    checkFields({
      template,
      name,
      surname,
      numberPhone,
      email,
      password,
      repeatPassword,
      isCheckRules,
      businessName,
      sellerType,
      factoryAddress,
      workSchedule,
      aboutUs,
      contactPerson,
    });
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
        <RegistrationField
          label="Назва підприємства *"
          inputType="text"
          inputId="factoryName"
          value={businessName}
          placeholder="Будь-ласка введіть дійсну назву"
          onChange={value => handleChange(setBusinessName, value)}
        />
        <RegistrationField
          label="Тип продавця"
          inputType="text"
          inputId="sellerType"
          value={sellerType}
          placeholder="Будь-ласка введіть дійсну назву"
          onChange={value => handleChange(setSellerType, value)}
        />
        <RegistrationField
          label="Адреса підприємства"
          inputType="text"
          inputId="factoryAddress"
          value={factoryAddress}
          placeholder="Будь-ласка введіть дійсну адресу"
          onChange={value => handleChange(setFactoryAddress, value)}
        />
        <RegistrationField
          label="Часи роботи підприємства для самовивізу продуктів та товарів"
          inputType="text"
          inputId="workSchedule"
          value={workSchedule}
          placeholder="Будь-ласка напішіть дійсні часи роботи"
          onChange={value => handleChange(setWorkSchedule, value)}
        />
        <UploadAndDisplayImage
          label={'Фотографія підприємства'}
          inputId={'factoryPhoto'}
          hint="Зображення має бути не більшим ніж 2 МБ, 
          та розміром не більше 1024х1024 пікселей."
        />
        <UploadAndDisplayImage
          label={'Логотип підприємства'}
          inputId={'factoryLogo'}
          hint="Зображення має бути не більшим ніж 2 МБ, 
          та розміром не більше 1024х1024 пікселей."
        />
        <RegistrationFieldArea
          label="Про нас"
          fieldId="aboutUs"
          value={aboutUs}
          placeholder="Розкажіть будь ласка про себе"
          onChange={value => handleChange(setAboutUs, value)}
        />
        <RegistrationField
          label="Ім’я та прізвище контактної особи"
          inputType="text"
          inputId="contactPerson"
          value={contactPerson}
          placeholder="Будь-ласка наешіть ім’я та прізвище контактної особи"
          onChange={value => handleChange(setContactPerson, value)}
        />
        <RegistrationField
          label="Пароль *"
          inputType="password"
          inputId="password"
          value={password}
          placeholder="Будь-ласка введіть дійсні значення"
          hint="Пароль має містити мінімум 8 символів, одну маленьку літеру та одну велику літеру"
          onChange={value => handleChange(setPassword, value)}
        />
        <RegistrationField
          label="Пароль *"
          inputType="password"
          inputId="passwordRepeat"
          value={repeatPassword}
          placeholder="Підтвердіть пароль"
          onChange={value => handleChange(setRepeatPassword, value)}
        />
        <Checkbox
          label={<CheckboxLabel />}
          inputId="rulesCheckbox"
          onChange={() => dispatch(setIsCheckRules(!isCheckRules))}
        />
        <ConsentProcessPersonalData />
      </div>
      <span className="flex justify-center mb-7">
        <Button color="green" size="w-9/12" onClick={handleRegistration}>
          Створити аккаунт
        </Button>
      </span>
    </div>
  );
};

// export default SellerRegistrationForm;
