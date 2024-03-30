import { FC, useState } from 'react';
import RegistrationField from '../../../common/RegistrationField';
import Button from '../../../common/Button';
import Checkbox from '../../../common/Checkbox';
import { useNavigate } from 'react-router-dom';
import {
  registrationCommonSlice,
  thunkAuthSignin,
} from '../../../../store/reducers/registrationCommon';
import { useAppDispatch } from '../../../../hooks/redux';
import { userSlice } from '../../../../store/reducers/userSlice.ts';
import { setLocalStorageItem } from '../../../../utils/localStorageUtils.ts';

interface AuthProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm: FC<AuthProps> = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setIsLogged } = registrationCommonSlice.actions;
  const { SET_LOGGED_USER } = userSlice.actions;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isKeepUserLogIn, setIsKeepUserLogIn] = useState(false);

  function handleOnClick(): void {
    if (login.trim() === '' || password.trim() === '') return;

    dispatch(thunkAuthSignin({ email: login, password })).then(res => {
      dispatch(setIsLogged(true));
      if (res.payload.buyer) {
        dispatch(SET_LOGGED_USER(res.payload.buyer));
        // isKeepUserLogIn &&
          setLocalStorageItem('token', res.payload.buyer.token);
      }
      if (res.payload.seller) {
        dispatch(SET_LOGGED_USER(res.payload.seller));
        
        // isKeepUserLogIn &&
          setLocalStorageItem('token', res.payload.seller.token);
      }
    });
    navigate('/');
    setIsModalOpen(!isModalOpen);
  }

  function handleOnChangeLogin(value: string): void {
    setLogin(value);
  }

  function handleOnChangePassword(value: string): void {
    setPassword(value);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        <RegistrationField
          label="Номер телефону або електронна пошта"
          inputType="text"
          inputId="auth"
          value={login}
          onChange={handleOnChangeLogin}
          placeholder="Введіть номер телефону або електронну пошту"
        />
        <RegistrationField
          label="Пароль"
          inputType="text"
          inputId="password"
          value={password}
          placeholder="Введіть пароль"
          onChange={handleOnChangePassword}
        />
        <div className="flex items-center justify-between w-full mb-4">
          <Checkbox
            onChange={() => {
              setIsKeepUserLogIn(!isKeepUserLogIn);
            }}
            label={`Запам'ятати мене`}
            inputId="check"
          />
          <span className="text-default cursor-pointer">Нагадати пароль</span>
        </div>
      </div>
      <Button color="green" onClick={handleOnClick}>
        Увійти
      </Button>
    </div>
  );
};

export default AuthForm;
