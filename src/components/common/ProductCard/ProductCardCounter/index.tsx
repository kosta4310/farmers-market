import { FC, MouseEvent, useState } from 'react';

import plus from '../../../../assets/icons/count/plus.svg';
import minus from '../../../../assets/icons/count/minus.svg';

interface Props {
  prop: (count: number) => void;
}

const ProductCardCounter: FC<Props> = ({ prop }) => {
  const [state, setState] = useState<number>(1);

  function decrement(e: MouseEvent<HTMLButtonElement>): void {
    if (state === 1) {
      e.preventDefault();
      return;
    }
    setState(state - 1);
    prop(state-1);
    e.preventDefault();
  }

  function increment(e: MouseEvent<HTMLButtonElement>): void {
    setState(state + 1);
    prop(state+1);
    e.preventDefault();
  }

  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={decrement}>
        <img src={minus} alt="minus" />
      </button>
      <p>{state}</p>
      <button type="button" onClick={increment}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};
export default ProductCardCounter;
