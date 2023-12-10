import { FC, MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color: string;
  size?: string;
}

// eslint-disable-next-line no-unused-vars
enum Colors {
  // eslint-disable-next-line no-unused-vars
  GREEN = 'bg-default hover:bg-green-600 text-white',
  // eslint-disable-next-line no-unused-vars
  BLACK = 'bg-black hover:bg-zinc-700 text-white',
  // eslint-disable-next-line no-unused-vars
  TRANSPARENT = 'hover:bg-default hover:text-white hover:border-[#00A919] text-green border-2 border-green-700',
}

const Button: FC<ButtonProps> = ({ onClick, children, color, size }) => {
  const GREEN_COLOR = 'green';
  const BLACK_COLOR = 'black';
  const TRANSPARENT_COLOR = 'transparent';

  const getColor = (color: string) => {
    switch (color) {
      case BLACK_COLOR:
        return Colors.BLACK;
      case GREEN_COLOR:
        return Colors.GREEN;
      case TRANSPARENT_COLOR:
        return Colors.TRANSPARENT;
      default:
        return Colors.BLACK;
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 ${size}  font-normal ${getColor(
        color,
      )} py-3 px-5 rounded-md shadow-2xl transition border duration-300 ease-in-out mb-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
