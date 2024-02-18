import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import ProductCard from '../../common/ProductCard';
import { productCardList } from '../../../constants/productCardList';
import ProductSort from '../../common/ProductSort';
import ProductPriceFilter from '../../common/ProductPriceFilter';
import { mainCategories } from '../../../constants/categories';
import { subCategory } from '../../../constants/categories.ts';

export type List = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
};
export type SubCat = {
  categoryId: number;
  value: string;
  label: string;
  image: string;
}[];

const SearchProduct: FC = () => {
  const location = useLocation();
  const { state } = location;

  const [list, setList] = useState<List[]>([]);
  const [subList, setSubList] = useState<SubCat>([]);
  const [activeId, setActiveId] = useState<number>(
    state?.categoryId || state || 0,
  );
  const [activeIdSub, setActiveIdSub] = useState<string>(state?.value || '0');

  const newProdList = list.slice(0);

  useEffect(() => {
    setList(productCardList);
    setSubList(subCategory.filter(el => el.categoryId === activeId));
  }, [activeId]);

  const subCategoriesList = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setActiveId(Number(target.id));
    setSubList(subCategory.filter(el => el.categoryId === Number(target.id)));
    setActiveIdSub('0');
  };

  return (
    <div className="py-8  flex justify-center ">
      <div className="w-[1200px] ">
        <div className="flex justify-end">
          <ProductSort prop={newProdList} sortFn={setList} />
        </div>

        <div className="flex gap-3 ">
          <div>
            <div className="w-[291px] border mb-4 p-3">
              <ul className="flex flex-col gap-3">
                {mainCategories.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={subCategoriesList}
                      id={id.toString()}
                      type="button"
                      className={
                        activeId === id
                          ? 'font-medium text-default '
                          : 'font-medium text-disabled hover:text-text_com'
                      }
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[291px] border mb-4 p-3">
              <ul className="flex flex-col gap-3">
                {subList?.map(({ value, label }) => (
                  <li key={value} onClick={() => setActiveIdSub(value)}>
                    <button
                      type="button"
                      className={
                        activeIdSub === value
                          ? 'font-medium text-default '
                          : 'font-medium text-disabled hover:text-text_com'
                      }
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

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
