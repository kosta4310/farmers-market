import { FC, useEffect, useState } from 'react';

import TamplateSort from '../../common/TamplateSort';
import SellerProductTamplate from '../../common/SellerProductTamplate';
import { productCardList } from '../../../constants/productCardList';

export type List = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
};

const MyProductsPage: FC = () => {
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    setList(productCardList);
  }, []);

    const handleSort = (sortedList: List[]) => {
      setList(sortedList);
    };

  return (
    <div className="pl-3 pt-5 pr-10 pb-10">
      <h1 className="text-2xl text-text_com font-semibold mb-6 ">
        Мої оголошення
      </h1>
      <div className="flex justify-end mb-6">
        <TamplateSort prop={productCardList} sortFn={handleSort} />
      </div>
      <ul>
        {list.map(item => (
          <li key={item.id} className="mb-4">
            <SellerProductTamplate prop={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProductsPage;
