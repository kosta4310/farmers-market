import { FC } from 'react';
import RegistrationField from '../../../common/RegistrationField';
import Button from '../../../common/Button';
import Checkbox from '../../../common/Checkbox';

const AuthForm: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        <RegistrationField
          label="Номер телефону або електронна пошта"
          inputType="text"
          inputId="auth"
          placeholder="Введіть номер телефону або електронну пошту"
        />
        <RegistrationField
          label="Пароль"
          inputType="text"
          inputId="password"
          placeholder="Введіть пароль"
        />
        <div className="flex items-center justify-between w-full mb-4">
          <Checkbox label={`Запам'ятати мене`} inputId="check" />
          <span className="text-default cursor-pointer">Нагадати пароль</span>
        </div>
      </div>
      <Button color="green">Увійти</Button>
    </div>
  );
};

export default AuthForm;
