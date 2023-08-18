import React, { FC } from 'react';

interface RegistrationFieldAreaProps {
  label: string;
  fieldId: string;
  placeholder: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

const RegistrationFieldArea: FC<RegistrationFieldAreaProps> = ({
  label,
  fieldId,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <label className="flex gap-1 flex-col" htmlFor={fieldId}>
      {label}
      <textarea
        className={`border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0`}
        id={fieldId}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default RegistrationFieldArea;
