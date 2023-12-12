import React, { FC } from 'react';

interface CheckboxProps {
  label: string | React.ReactElement;
  inputId: string;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (val: never) => void;
  classes?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  inputId,
  placeholder,
  onChange,
  classes,
}) => {
  return (
    <label className={`flex items-center gap-2 ${classes}`} htmlFor={inputId}>
      <input
        className="cursor-pointer h-5 w-5 accent-[#00A919]"
        id={inputId}
        type="checkbox"
        placeholder={placeholder}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
