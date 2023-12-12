import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ProductCard from '../../common/ProductCard';
import { productCardList } from '../../../constants/productCardList';
import ProductSort from '../../common/ProductSort';
import ProductPriceFilter from '../../common/ProductPriceFilter';

export type List = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
};

const SearchProduct: FC = () => {
  const [list, setList] = useState<List[]>([]);
  const location = useLocation();
  const { state } = location;

  const newProdList = list.slice(0);

  useEffect(() => {
    setList(productCardList);
  }, []);

  return (
    <div className="py-8  flex justify-center ">
      <div className="w-[1200px] ">
        <div className="flex justify-end">
          <ProductSort prop={newProdList} sortFn={setList} />
        </div>

        <div className="flex gap-3 ">
          <div>
            <div className="w-[291px] h-12 border flex items-center px-3">
              <p className="text-lg font-semibold leading-6 text-text_com">
                {state.label}
              </p>
            </div>
            <div className="w-[291px] h-[336px] border mb-4"></div>

            <div className="w-[291px] h-12 border flex items-center px-3">
              <p className="text-lg font-semibold leading-6 text-text_com">
                Вартість
              </p>
            </div>
            <ProductPriceFilter prop={productCardList} filterFn={setList} />
          </div>

          <ul className="flex  flex-wrap  gap-3">
            {list?.map(card => (
              <li key={card.id} className="mb-3">
                <NavLink
                  to={`/product/:${card.id}/description`}
                  state={{ from: location }}
                >
                  <ProductCard prop={card} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SearchProduct;
