import { FC, useEffect, useState } from 'react';

import TamplateSort from '../../common/TamplateSort';
import SellerProductTamplate from '../../common/SellerProductTamplate';
// import { productCardList } from '../../../constants/productCardList';
import { thunkGetAllProduct } from '../../../api/getAllProduct';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

interface Subcategory {
  id: string;
  name: string;
}

interface Subsubcategory {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}
export interface Product {
  address: string | null;
  caloricContent: string;
  carbohydrates: string;
  category: Category;
  createdAt: string;
  deliveryPlaces: string;
  deliveryTypes: string;
  description: string;
  fats: string;
  favorites: boolean;
  id: string;
  image: string;
  isActive: boolean | null;
  name: string;
  newProduct: boolean;
  phoneNumber: string;
  price: number;
  proteins: string;
  quantity: null;
  specialOffer: null;
  subcategory: Subcategory;
  subsubcategory: Subsubcategory;
  topProduct: null;
  unit: string;
}

const MyProductsPage: FC = () => {
  const [list, setList] = useState<Product[]>([]);

  const dispatch = useAppDispatch();
  const prod = useAppSelector(state => state.productState.myProducts);

  useEffect(() => {
    dispatch(thunkGetAllProduct());
  }, [dispatch]);

  const handleSort = (sortedList: Product[]) => {
    setList(sortedList);
  };

  return (
    <div className="pl-3 pt-5 pr-10 pb-10">
      <h1 className="text-2xl text-text_com font-semibold mb-6 ">
        Мої оголошення
      </h1>

      <div className="flex justify-end mb-6">
        <TamplateSort prop={prod} sortFn={handleSort} />
      </div>
      <ul>
        {(list.length === 0 ? prod : list).map(item => (
          <li key={item.id} className="mb-4">
            <SellerProductTamplate prop={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProductsPage;
