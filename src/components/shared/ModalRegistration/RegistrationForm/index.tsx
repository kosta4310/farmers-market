import React, { FC, useState } from 'react';
import RegField from '../../../common/RegistrationField';
import Button from '../../../common/Button';
import RadioChoice from '../../../common/RadioChoice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux.ts';
import { registrationSlice } from '../../../../store/reducers/registrationSlice.ts';

interface RegistrationFormProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationForm: FC<RegistrationFormProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [selectedOption, setSelectedOption] = useState('buyer');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setTemplate } = registrationSlice.actions;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    dispatch(setTemplate(e.target.value));
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleButtonRegistration = () => {
    navigate('/registration');
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        <RegField
          label="Номер телефону або електронна пошта"
          labelPosition="left"
          inputType="text"
          inputId="reg"
          placeholder="Введіть номер або електронну пошту"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex gap-28 mb-4">
          <RadioChoice
            label="Як покупець"
            value="buyer"
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <RadioChoice
            label="Як продавець"
            value="seller"
            selectedOption={selectedOption}
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
