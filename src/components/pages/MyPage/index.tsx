import { FC, useEffect, useState } from 'react';
import UploadAndDisplayImage from '../../common/FileUpload';
import Button from '../../common/Button';
import { useAppSelector } from '../../../hooks/redux';
import { sellerRegistrationSlice } from '../../../store/reducers/sellerSlice';
import { useDispatch } from 'react-redux';
import RegistrationField from '../../common/RegistrationField';
import { getSelectOption } from '../../shared/SellerRegistration/ShippingData';

const inputStyle =
  'w-full border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0';

const Label = ({ label }: { label: string }) => (
  <p className={'text-[16px] font-medium mb-2 text-text_com leading-6'}>
    {label}
  </p>
);

const MyPage: FC = () => {
  const [isSeller, setIsSeller] = useState(true);

  const user = useAppSelector(state => state.userState.user);
  const userinfo = useAppSelector(state => state.sellerRegistration);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        dispatch(
          sellerRegistrationSlice.actions.SET_FIELD({
            field: key,
            value: value,
          }),
        );
      });
    }
    if (user.userConfig?.role === 'buyer') {
      setIsSeller(false);
    }
  }, [user, dispatch]);

  const onHandleChangeField = (name: string, value: any) => {
    dispatch(
      sellerRegistrationSlice.actions.SET_FIELD({
        field: name,
        value: value,
      }),
    );
  };

  const timeSplit = (value: string) => {
    const time = userinfo.workingHours?.split('-');
    if (time !== undefined) {
      if (value === 'from') {
        return time[0];
      }
      return time[1];
    }
  };

  const handleSaveChange = () => {
    console.log('save');
  };

  return (
    <div className="p-[16px]">
      <div className="flex flex-col  mb-7">
        <h2 className="text-2xl text-gray-700 font-medium">Мої данні</h2>
        <div id={'name'} className={'w-2/3 my-6'}>
          <Label label={'Ім’я *'} />
          <input
            placeholder={
              "Введіть ім'я використовуючи українську або латинську абетку"
            }
            className={inputStyle}
            id={'name'}
            required
            value={userinfo?.name}
            onChange={e => onHandleChangeField('name', e.target.value)}
          />
        </div>
        <div id={'lastName'} className={'w-2/3 mb-6'}>
          <Label label={'Прізвище'} />
          <input
            placeholder={
              "Введіть  прізвище'я використовуючи українську або латинську абетку"
            }
            className={inputStyle}
            id={'lastName'}
            required
            value={userinfo?.lastName}
            onChange={e => {
              onHandleChangeField('lastName', e.target.value);
            }}
          />
        </div>
        <div id={'phoneNumber'} className={'w-2/3 mb-6'}>
          <Label label={'Номер телефону'} />
          <div className="flex">
            <span className="border border-gray-200 rounded-tl rounded-bl p-3 text-gray-400">
              +380
            </span>
            <input
              placeholder={'Будь-ласка введіть вірний номер'}
              className={inputStyle}
              id={'phoneNumber'}
              required
              value={userinfo?.phoneNumber}
              onChange={e => {
                onHandleChangeField('phoneNumber', e.target.value);
              }}
            />
          </div>
        </div>
        <div id={'email'} className={'w-2/3 mb-6'}>
          <Label label={'Електрона пошта *'} />
          <input
            placeholder={
              'Введіть електрона пошту використовуючи українську або латинську абетку'
            }
            className={inputStyle}
            id={'email'}
            required
            value={user.userConfig?.email}
          />
        </div>
        {isSeller && (
          <div id={'companyName'} className={'w-2/3 mb-6'}>
            <Label label={'Назва підприємства*'} />
            <input
              placeholder={
                'Введіть назву підприємства* використовуючи українську або латинську абетку'
              }
              className={inputStyle}
              id={'companyName'}
              required
              value={userinfo?.companyName}
              onChange={e => {
                onHandleChangeField('companyName', e.target.value);
              }}
            />
          </div>
        )}

        {isSeller && (
          <div id={'image'} className={'mb-6'}>
            <Label label={'Фотографія підприємства*'} />
            <UploadAndDisplayImage
              label={''}
              inputId={'companyImage'}
              hint="Зображення має бути не більшим ніж 2 МБ,
          та розміром не більше 1024х1024 пікселей."
              selectedImage={userinfo?.image}
              handleChange={(_, value) => {
                // onHandleChangeField('image', value);
                onHandleChangeField('image', value);
                // setSelectedImage(value);
              }}
            />
          </div>
        )}

        {isSeller && (
          <div id={'logo'} className={'mb-6'}>
            <Label label={'Логотип підприємства'} />
            <UploadAndDisplayImage
              label={''}
              inputId={'companyLogo'}
              hint="Зображення має бути не більшим ніж 2 МБ,
          та розміром не більше 1024х1024 пікселей."
              selectedImage={userinfo?.logo}
              handleChange={(_, value) => {
                // onHandleChangeField('logo', value);
                onHandleChangeField('logo', value);

                // setSelectedLogo(value);
              }}
            />
          </div>
        )}

        {isSeller && (
          <div id={'aboutUs'} className={'w-2/3 mb-6'}>
            <Label label={'Про нас *'} />
            <textarea
              placeholder={
                'Введіть опис підприємства використовуючи українську або латинську абетку'
              }
              rows={5}
              className={inputStyle}
              id={'aboutUs'}
              required
              value={userinfo?.aboutUs}
              onChange={e => {
                onHandleChangeField('aboutUs', e.target.value);
              }}
            />
          </div>
        )}

        {isSeller && (
          <div id={'contactPerson'} className={'w-2/3 mb-6'}>
            <Label label={'Ім’я та прізвище контактної особи'} />
            <input
              placeholder={
                'Введіть ім’я та прізвище використовуючи українську або латинську абетку'
              }
              className={inputStyle}
              id={'contactPerson'}
              required
              value={userinfo?.contactPerson}
              onChange={e => {
                onHandleChangeField('contactPerson', e.target.value);
              }}
            />
          </div>
        )}

        {isSeller && (
          <div id={'address'} className={'w-2/3 mb-6'}>
            <Label label={'Локація для самовивізу'} />
            <input
              placeholder={
                'Введіть локація використовуючи українську або латинську абетку'
              }
              className={inputStyle}
              id={'address'}
              required
              value={userinfo?.address}
              onChange={e => {
                onHandleChangeField('address', e.target.value);
              }}
            />
          </div>
        )}

        {isSeller && (
          <div id={'time'} className={'w-2/3 mb-6'}>
            <Label
              label={
                'Часи роботи підприємства для самовивізу продуктів та товарів'
              }
            />

            <div className="flex">
              <label htmlFor="fromHours" className="mr-6">
                З
                <select
                  className="border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0 ml-2 pr-20 "
                  id="fromHours"
                  placeholder="Вибиріть час"
                  value={
                    userinfo.workHoursFrom
                      ? userinfo.workHoursFrom
                      : userinfo.workingHours
                        ? timeSplit('from')
                        : userinfo.workHoursFrom
                  }
                  onChange={({ target }) =>
                    onHandleChangeField('workHoursFrom', target.value)
                  }
                >
                  {getSelectOption()}
                </select>
              </label>
              <label htmlFor="toHours" className="">
                До
                <select
                  className="border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0 ml-2 pr-20"
                  id="toHours"
                  placeholder="Вибиріть час"
                  value={
                    userinfo.workHoursTo
                      ? userinfo.workHoursTo
                      : userinfo.workingHours
                        ? timeSplit('to')
                        : userinfo.workHoursTo
                  }
                  onChange={({ target }) =>
                    onHandleChangeField('workHoursTo', target.value)
                  }
                >
                  {getSelectOption()}
                </select>
              </label>
            </div>
          </div>
        )}

        <div id={'password'} className={'w-2/3 mb-6'}>
          <Label label={'Пароль'} />
          <RegistrationField
            label=""
            inputType="password"
            inputId="password"
            value={userinfo?.password}
            placeholder="Будь-ласка введіть дійсні значення"
            hint="Пароль має містити мінімум 8 символів, одну маленьку літеру та одну велику літеру"
            onChange={value => onHandleChangeField('password', value)}
            // onChange={e => {
            //   onHandleChangeField('password', e.target.value);
            // }}
          />
        </div>
        <div id={'repeatPassword'} className={'w-2/3 mb-6'}>
          <Label label={'Пароль'} />
          <RegistrationField
            label=""
            inputType="password"
            inputId="passwordRepeat"
            value={userinfo?.repeatPassword}
            placeholder="Підтвердіть пароль"
            onChange={value => onHandleChangeField('repeatPassword', value)}
            // onChange={e => {
            //   onHandleChangeField('passwordRepeat', e.target.value);
            // }}
          />
        </div>
        <div className={'grid grid-cols-max2 gap-6'}>
          <span className="flex justify-center mb-7">
            <Button color="green" size="w-max" onClick={handleSaveChange}>
              Редагувати
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
