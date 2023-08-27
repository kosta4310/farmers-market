import { FC, ReactNode, MouseEvent } from 'react';
import ArrowLeft from '../../../assets/icons/arrow/ArrowLeft.svg';
import ArrowRight from '../../../assets/icons/arrow/ArrowRight.svg';

export interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  direction: 'left' | 'right';
}

const ButtonArrow: FC<ButtonProps> = ({ onClick, children, direction }) => {
  return direction === 'left' ? (
    <button
      className={`flex items-center justify-center gap-2  font-normal  py-3 text-2xl transition duration-300 ease-in-out `}
      onClick={onClick}
    >
      <span>
        <img src={ArrowLeft} alt="arrow left"></img>
      </span>
      {children}
    </button>
  ) : (
    <button
      className={`flex items-center justify-center gap-2  font-normal  py-3 text-2xl transition duration-300 ease-in-out `}
      onClick={onClick}
    >
      {children}
      <span>
        <img src={ArrowRight} alt="arrow right"></img>
      </span>
    </button>
  );
};

export default ButtonArrow;
