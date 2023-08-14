import { FC } from 'react';

interface CheckboxProps {
  label: string;
  inputId: string;
  placeholder?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, inputId, placeholder }) => {
  return (
    <label className="flex items-center justify-center gap-2" htmlFor={inputId}>
      <input
        className="h-5 w-5 accent-[#00A919]"
        id={inputId}
        type="checkbox"
        placeholder={placeholder}
      />
      {label}
    </label>
  );
};

export default Checkbox;
