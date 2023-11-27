import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../common/Button';
import Checkbox from '../../../common/Checkbox';
import { checkFieldsFourthPage } from '../checkFields';
import RegistrationField from '../../../common/RegistrationField';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  sellerRegistrationSlice,
  thunkSellerSignUp,
} from '../../../../store/reducers/sellerSlice';

const SellerRegistrationForm: FC = () => {
  const navigate = useNavigate();

  const {
    phoneNumber,
    name,
    lastName,
    companyName,
    typeSeller,
    address,
    aboutUs,
    contactPerson,
    password,
    repeatPassword,
    workHoursFrom,
    workHoursTo,
    isCheckRules,
    image,
    logo,
    deliveryConditions,
  } = useAppSelector(state => state.sellerRegistration);

  const { email } = useAppSelector(state => state.registrationCommon);

  const dispatch = useAppDispatch();

  const checkboxLabel = (
    <span className="text-xs">
      Продовжуючи, я погоджуюсь з{' '}
      <Link className="text-default font-semibold" to="/rules">
        умовами використання
      </Link>
    </span>
  );

  function handleRegistration() {
    if (checkFieldsFourthPage(password, repeatPassword, isCheckRules)) {
      console.log({
        phoneNumber,
        name,
        lastName,
        companyName,
        typeSeller,
        address,
        aboutUs,
        contactPerson,
        password,
        workHoursFrom,
        workHoursTo,
        image,
        logo,
        email,
        deliveryConditions,
      });
      dispatch(
        thunkSellerSignUp({
          phoneNumber,
          name,
          lastName,
          companyName,
          typeSeller,
          address,
          aboutUs,
          contactPerson,
          password,
          workHoursFrom,
          workHoursTo,
          image,
          logo,
          deliveryConditions,
          email,
        }),
      );
      navigate('/');
    }
  }
  const handleChange = (field: string, value: any) => {
    dispatch(sellerRegistrationSlice.actions.SET_FIELD({ field, value }));
  };
  return (
    <div className="flex flex-col w-[558px] mt-20 mx-auto">
      <div className="flex flex-col gap-6 mb-7">
        <RegistrationField
          label="Пароль *"
          inputType="password"
          inputId="password"
          value={password}
          placeholder="Будь-ласка введіть дійсні значення"
          hint="Пароль має містити мінімум 8 символів, одну маленьку літеру та одну велику літеру"
          onChange={value => handleChange('password', value)}
        />
        <RegistrationField
          label="Пароль *"
          inputType="password"
          inputId="passwordRepeat"
          value={repeatPassword}
          placeholder="Підтвердіть пароль"
          onChange={value => handleChange('repeatPassword', value)}
        />
        <Checkbox
          label={checkboxLabel}
          inputId="rulesCheckbox"
          onChange={() => handleChange('isCheckRules', !isCheckRules)}
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
};

export default SellerRegistrationForm;
