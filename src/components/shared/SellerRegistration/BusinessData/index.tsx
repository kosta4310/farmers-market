import { FC, Fragment } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import RegistrationField from '../../../common/RegistrationField';
import UploadAndDisplayImage from '../../../common/FileUpload';
import RegistrationFieldArea from '../../../common/RegistrationFieldArea';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { registrationSlice } from '../../../../store/reducers/registrationSlice';
import RadioChoice from '../../../common/RadioChoice';

const BusinessData: FC = () => {
  const {
    setBusinessName,
    setSellerType,
    setFactoryAddress,
    setWorkSchedule,
    setAboutUs,
    setContactPerson,
  } = registrationSlice.actions;

  const {
    businessName,
    sellerType,
    factoryAddress,
    workSchedule,
    aboutUs,
    contactPerson,
  } = useAppSelector((state) => state.registration);

  const dispatch = useAppDispatch();

  const handleChange = (
    action: (value: string) => AnyAction,
    value: string,
  ) => {
    dispatch(action(value));
  };

  const content = (
    <div className="flex flex-col w-[558px] mt-20 mx-auto">
      <div className="flex flex-col gap-6 mb-7">
        <div>
          <h3 className="pb-3">Виберіть тип підприємства *</h3>
          <div className="flex gap-28 mb-4">
            <RadioChoice
              label="Юридична особа"
              value="business"
              selectedOption={sellerType}
              handleOptionChange={(e) =>
                handleChange(setSellerType, e.target.value)
              }
            />
            <RadioChoice
              label="Приватна особа"
              value="private"
              selectedOption={sellerType}
              handleOptionChange={(e) =>
                handleChange(setSellerType, e.target.value)
              }
            />
          </div>
        </div>
        {sellerType === 'business' && (
          <RegistrationField
            label={`Назва підприємства *`}
            inputType="text"
            inputId="factoryName"
            value={businessName}
            placeholder="Будь-ласка введіть дійсну назву"
            onChange={(value) => handleChange(setBusinessName, value)}
          />
        )}
        {sellerType === 'business' ? (
          <Fragment>
            <UploadAndDisplayImage
              label={'Фотографія підприємства *'}
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
          </Fragment>
        ) : (
          <UploadAndDisplayImage
            label={'Фото'}
            inputId={'photo'}
            hint="Зображення має бути не більшим ніж 2 МБ, 
          та розміром не більше 1024х1024 пікселей."
          />
        )}
        <RegistrationFieldArea
          label={sellerType === 'business' ? 'Про нас *' : 'Про мене'}
          fieldId="aboutUs"
          value={aboutUs}
          placeholder="Розкажіть будь ласка про себе"
          onChange={(value) => handleChange(setAboutUs, value)}
        />
        <RegistrationField
          label="Ім’я та прізвище контактної особи"
          inputType="text"
          inputId="contactPerson"
          value={contactPerson}
          placeholder="Будь-ласка наешіть ім’я та прізвище контактної особи"
          onChange={(value) => handleChange(setContactPerson, value)}
        />
        <RegistrationField
          label="Локація для самовивозу"
          inputType="text"
          inputId="factoryAddress"
          value={factoryAddress}
          placeholder="Будь-ласка введіть дійсну адресу"
          onChange={(value) => handleChange(setFactoryAddress, value)}
        />
        <RegistrationField
          label="Часи роботи підприємства для самовивізу продуктів та товарів"
          inputType="text"
          inputId="workSchedule"
          value={workSchedule}
          placeholder="Будь-ласка напішіть дійсні часи роботи"
          onChange={(value) => handleChange(setWorkSchedule, value)}
        />
      </div>
    </div>
  );

  return content;
};

export default BusinessData;
