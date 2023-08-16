import React, { FC } from 'react';

interface CheckboxProps {
  label: string | React.ReactElement;
  inputId: string;
  placeholder?: string;
  onChange?: () => void;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  inputId,
  placeholder,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-2" htmlFor={inputId}>
      <input
        className="h-5 w-5 accent-[#00A919]"
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
