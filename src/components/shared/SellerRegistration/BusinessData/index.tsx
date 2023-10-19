import { FC } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import RegistrationField from '../../../common/RegistrationField';
import UploadAndDisplayImage from '../../../common/FileUpload';
import RegistrationFieldArea from '../../../common/RegistrationFieldArea';
import RadioChoice from '../../../common/RadioChoice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { sellerRegistrationSlice } from '../../../../store/reducers/sellerSlice';

const getHoursList = (from: number, to: number) => {
  const minutes = ['00', '30'];
  const res: Array<string> = [];
  for (let index = from; index < to; index++) {
    minutes.forEach(minute => res.push(index + ':' + minute));
  }
  res.push(to + ':' + '00');
  return res;
};

const getSelectOption = () =>
  getHoursList(6, 21).map((hours, idx) => {
    return (
      <option key={idx} value={hours}>
        {hours}
      </option>
    );
  });

const BusinessData: FC = () => {
  const {
    setBusinessName,
    setSellerType,
    setFactoryAddress,
    setAboutUs,
    setContactPerson,
    setWorkHoursFrom,
    setWorkHoursTo,
  } = sellerRegistrationSlice.actions;

  const {
    businessName,
    sellerType,
    factoryAddress,
    aboutUs,
    contactPerson,
    workHoursFrom,
    workHoursTo,
  } = useAppSelector(state => state.sellerRegistration);

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
        <div>
          <h3 className="pb-3">Виберіть тип підприємства *</h3>
          <div className="flex gap-28 mb-4">
            <RadioChoice
              label="Юридична особа/ФОП"
              value="business"
              selectedOption={sellerType}
              handleOptionChange={e =>
                handleChange(setSellerType, e.target.value)
              }
            />
            <RadioChoice
              label="Приватна особа"
              value="private"
              selectedOption={sellerType}
              handleOptionChange={e =>
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
            onChange={value => handleChange(setBusinessName, value)}
          />
        )}
        {sellerType === 'business' ? (
          <>
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
          </>
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
      </div>
    </div>
  );
};

export default BusinessData;
