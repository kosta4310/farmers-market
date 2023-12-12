import { Dispatch, FC, SetStateAction, useState } from 'react';
import { List } from '../../shared/SearchProduct';

type ProductFilterProps = {
  prop: List[];
  filterFn: Dispatch<SetStateAction<List[]>>;
};

const ProductPriceFilter: FC<ProductFilterProps> = ({ prop, filterFn }) => {
  const [lowestPrice, setLowestPrice] = useState<string>('');
  const [upperPrice, setUpperPrice] = useState<string>('');

  function fnFilter(value: number, id: string) {
    switch (id) {
      case '1':
        return value;
      case '2':
        return value <= 50;
      case '3':
        return value >= 50 && value <= 100;
      case '4':
        return value >= 100 && value <= 250;
      case '5':
        return value >= 250 && value <= 500;
      case '6':
        return value >= 500;

      default:
        return upperPrice
          ? value >= Number(lowestPrice) && value <= Number(upperPrice)
          : value >= Number(lowestPrice) && value;
    }
  }

  const handlePriceFilter: React.EventHandler<React.SyntheticEvent> = e => {
    const target = e.target as HTMLButtonElement | HTMLInputElement;
    const { id } = target;
    filterFn(prop?.filter(({ price }) => fnFilter(price, id)));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'low') {
      return setLowestPrice(value);
    }
    setUpperPrice(value);
  };

  return (
    <div className="w-[291px] border p-3 ">
      <ul className="flex flex-col gap-3">
        <li>
          <button
            id="1"
            className="font-medium text-disabled hover:text-text_com"
            onClick={handlePriceFilter}
          >
            Усі
          </button>
        </li>
        <li>
          <button
            id="2"
            className="font-medium text-disabled hover:text-text_com"
            onClick={handlePriceFilter}
          >
            Менше 50 ₴
          </button>
        </li>
        <li>
          <button
            className="font-medium text-disabled hover:text-text_com"
            id="3"
            onClick={handlePriceFilter}
          >
            50 - 100 ₴
          </button>
        </li>
        <li>
          <button
            className="font-medium text-disabled hover:text-text_com"
            id="4"
            onClick={handlePriceFilter}
          >
            100 - 250 ₴
          </button>
        </li>
        <li>
          <button
            className="font-medium text-disabled hover:text-text_com"
            id="5"
            onClick={handlePriceFilter}
          >
            250 - 500 ₴
          </button>
        </li>
        <li>
          <button
            className="font-medium text-disabled hover:text-text_com"
            id="6"
            onClick={handlePriceFilter}
          >
            Більше 500 ₴
          </button>
        </li>
        <li className="flex ">
          <p className="mr-2 font-medium text-disabled hover:text-text_com">
            Від
          </p>
          <input
            className="w-16 h-8 border-2 mr-5 rounded px-2 text-disabled"
            onChange={handleSearchChange}
            value={lowestPrice}
            id="low"
            type="number"
            onBlur={handlePriceFilter}
          />
          <p className="mr-2 font-medium text-disabled hover:text-text_com">
            До
          </p>
          <input
            id="upper"
            className="w-16 h-8 border-2 rounded px-2 text-disabled"
            onChange={handleSearchChange}
            value={upperPrice}
            type="number"
            onBlur={handlePriceFilter}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProductPriceFilter;
