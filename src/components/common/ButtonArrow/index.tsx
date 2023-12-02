import { FC, MouseEvent, ReactNode } from 'react';
import ArrowLeft from '../../../assets/icons/arrow/ArrowLeft.svg';
import ArrowRight from '../../../assets/icons/arrow/ArrowRight.svg';

export interface ButtonArrowProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  direction: 'left' | 'right';
  hide: boolean;
}

const ButtonArrow: FC<ButtonArrowProps> = ({
  onClick,
  children,
  direction,
  hide,
}) => {
  return (
    <button
      className={`${
        hide && 'invisible'
      } flex items-center justify-center gap-2  font-normal py-3 text-2xl transition duration-300 ease-in-out text-gray-700`}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <>
          <span>
            <img src={ArrowLeft} alt="arrow left"></img>
          </span>
          {children}
        </>
      ) : (
        <>
          {children}
          <span>
            <img src={ArrowRight} alt="arrow right"></img>
          </span>
        </>
      )}
    </button>
  );
};

export default ButtonArrow;
