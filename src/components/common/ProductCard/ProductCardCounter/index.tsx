import { FC, useState } from 'react';

import plus from '../../../../assets/icons/count/plus.svg';
import minus from '../../../../assets/icons/count/minus.svg';

type CounterState = {
  count: number;
};

const ProductCardCounter: FC = () => {
  const [state, setState] = useState<CounterState>({ count: 0 });

  function decrement() {
    if (state.count === 0) {
      return;
    }
    setState({ count: state.count - 1 });
  }

  function increment(): void {
    setState({ count: state.count + 1 });
  }

  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={decrement}>
        <img src={minus} alt="minus" />
      </button>
      <p>{state.count}</p>
      <button type="button" onClick={increment}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};
export default ProductCardCounter;
