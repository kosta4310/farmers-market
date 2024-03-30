import { FC, useState } from 'react';
import TamplateSort from '../../common/TamplateSort';
import ProductCard from '../../common/ProductCard';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from '../../../utils/localStorageUtils';
import { Product } from '../MyProductsPage';
import trash from '../../../assets/icons/trash/trash.svg';

const MyFavoritesPage: FC = () => {
  const [list, setList] = useState<Product[]>(getLocalStorageItem('favorite'));

  const handleSort = (sortedList: Product[]) => {
    setList(sortedList);
  };
  
  const deleteAll = () => {
    removeLocalStorageItem('favorite');
    setList(getLocalStorageItem('favorite'));
  };

  return (
    <div className="pl-3 pt-5 pr-10 pb-10">
      <h1 className="text-2xl text-text_com font-semibold mb-6 ">
        Список бажань
      </h1>

      <div className="flex justify-between  mb-6 max-w-[897px]">
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={deleteAll}
        >
          <svg className="w-5 h-5">
            <use href={trash + '#trash'} />
          </svg>
          <span className="leading-6 text-disabled ">Видалити все</span>
        </button>
        <TamplateSort prop={list} sortFn={handleSort} />
      </div>
      <ul className="flex gap-3 flex-wrap">
        {list.map(item => (
          <li key={item.id} className="mb-4">
            <ProductCard prop={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFavoritesPage;
