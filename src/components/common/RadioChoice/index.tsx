import { ChangeEvent, FC } from 'react';

interface RadioChoiceProps {
  label: string;
  value: string;
  selectedOption: string;
  handleOptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioChoice: FC<RadioChoiceProps> = ({
  label,
  value,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <label className="flex items-center justify-center gap-2 text-sm">
      <input
        className="w-5 h-5 accent-[#00A919]"
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={handleOptionChange}
        required
      />
      {label}
    </label>
  );
};

export default RadioChoice;
