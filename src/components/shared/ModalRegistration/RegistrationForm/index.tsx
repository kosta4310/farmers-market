import React, { FC, useState } from 'react';
import RegField from '../../../common/RegistrationField';
import Button from '../../../common/Button';
import RadioChoice from '../../../common/RadioChoice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';
import { registrationSlice } from '../../../../store/reducers/registrationSlice.ts';
import { registrationCommonSlice } from '../../../../store/reducers/registrationCommon.ts';

interface RegistrationFormProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationForm: FC<RegistrationFormProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [login, setLogin] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { template } = useAppSelector(state => state.registration);
  const { setTemplate } = registrationSlice.actions;
  const { setEmail } = registrationCommonSlice.actions;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemplate(e.target.value));
  };

  const handleInputChange = (value: string) => {
    setLogin(value);
  };

  const handleButtonRegistration = () => {
    if (login.trim() === '') return;

    if (login.includes('@')) {
      dispatch(setEmail(login));
    }

    navigate('/registration');
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        <RegField
          label="Електронна пошта"
          inputType="text"
          inputId="reg"
          placeholder="Введіть електронну пошту"
          value={login}
          onChange={handleInputChange}
        />
        <div className="flex gap-28 mb-4">
          <RadioChoice
            label="Як покупець"
            value="buyer"
            selectedOption={template}
            handleOptionChange={handleOptionChange}
          />
          <RadioChoice
            label="Як продавець"
            value="seller"
            selectedOption={template}
            handleOptionChange={handleOptionChange}
          />
        </div>
      </div>
      <Button color="green" onClick={handleButtonRegistration}>
        Зареєструватися
      </Button>
    </div>
  );
};

export default RegistrationForm;
