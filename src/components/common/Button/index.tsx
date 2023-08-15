import { FC, ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color: string;
  size?: string;
}

enum Colors {
  GREEN = 'bg-default hover:bg-green-600 text-white',
  BLACK = 'bg-black hover:bg-zinc-700 text-white',
}

const Button: FC<ButtonProps> = ({ onClick, children, color, size }) => {
  const GREEN_COLOR = 'green';
  const BLACK_COLOR = 'black';

  const getColor = (color: string) => {
    switch (color) {
      case BLACK_COLOR:
        return Colors.BLACK;
      case GREEN_COLOR:
        return Colors.GREEN;
      default:
        return Colors.BLACK;
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 ${size} font-normal ${getColor(
        color
      )} py-3 px-5 rounded-md shadow-2xl transition duration-300 ease-in-out mb-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
