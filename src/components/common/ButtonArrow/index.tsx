import { FC, ReactNode, MouseEvent, Fragment } from 'react';
import ArrowLeft from '../../../assets/icons/arrow/ArrowLeft.svg';
import ArrowRight from '../../../assets/icons/arrow/ArrowRight.svg';

export interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  direction: 'left' | 'right';
  hide: boolean;
}

const ButtonArrow: FC<ButtonProps> = ({
  onClick,
  children,
  direction,
  hide,
}) => {
  return (
    <button
      className={`${
        hide && 'invisible'
      } flex items-center justify-center gap-2  font-normal  py-3 text-2xl transition duration-300 ease-in-out `}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <Fragment>
          <span>
            <img src={ArrowLeft} alt="arrow left"></img>
          </span>
          {children}
        </Fragment>
      ) : (
        <Fragment>
          {children}
          <span>
            <img src={ArrowRight} alt="arrow right"></img>
          </span>
        </Fragment>
      )}
    </button>
  );
};

export default ButtonArrow;
