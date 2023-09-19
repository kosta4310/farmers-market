import React, { FC, useState } from 'react';
import hiddenEye from '../../../assets/icons/common/hidden-eye.svg';
import './index.css';

interface RegistrationFieldProps {
  label: string;
  inputType: string;
  inputId: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  hint?: string;
}

const RegistrationField: FC<RegistrationFieldProps> = ({
  label,
  inputId,
  inputType,
  placeholder,
  value,
  onChange,
  hint,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputType === 'number' && e.target.value.length > 9) {
      e.target.value = e.target.value.slice(0, 9);
    }

    if (onChange) {
      onChange(e.target.value);
    }
  };

  const hintMessage = <span className="text-xs text-gray-500">{hint}</span>;

  if (inputType === 'password') {
    return (
      <label className="flex gap-1 flex-col" htmlFor={inputId}>
        {label}
        <span className="flex gap-2 border border-gray-200 rounded p-3">
          {isShowPassword ? (
            <input
              className="w-full outline-none focus:bg-none focus:ring-0"
              id={inputId}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          ) : (
            <input
              className="w-full outline-none focus:bg-none focus:ring-0"
              id={inputId}
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          )}
          <img
            className="cursor-pointer"
            src={hiddenEye}
            alt="hidden"
            onClick={handleShowPassword}
          />
        </span>
        {hintMessage}
      </label>
    );
  }

  if (inputType === 'number') {
    return (
      <label className="flex gap-1 flex-col" htmlFor={inputId}>
        {label}
        <div className="flex items-center">
          <span className="border border-gray-200 rounded-tl rounded-bl p-3 text-gray-400">
            +380
          </span>
          <input
            className="border border-gray-200 rounded-tr rounded-br p-3 outline-none focus:bg-none focus:ring-0 w-full"
            id={inputId}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
        {hintMessage}
      </label>
    );
  }

  return (
    <label className="flex gap-1 flex-col" htmlFor={inputId}>
      {label}
      <input
        className="border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0"
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {hintMessage}
    </label>
  );
};

export default RegistrationField;
