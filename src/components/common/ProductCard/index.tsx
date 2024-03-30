import { FC, MouseEvent, useEffect, useState } from 'react';

import defaultImg from '../../../assets/img/default-image.jpg';
import basketW from '../../../assets/icons/prodCard/basketW.svg';
import logo from '../../../assets/icons/prodCard/logo.svg';
import hartW from '../../../assets/icons/prodCard/hartW.svg';
import hartR from '../../../assets/icons/prodCard/hartR.svg';
import basketRed from '../../../assets/icons/prodCard/basketRed.svg';

import ProductCardCounter from './ProductCardCounter';
import ProductCardStatus from './ProductCardStatus';
import ProductCardDeliver from './ProductCardDeliver';
import { getCurrentDay } from '../../../utils/func/getCurrentDay';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../../utils/localStorageUtils';
interface Props {
  prop: {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
  };
}

const ProductCard: FC<Props> = ({ prop }) => {
  const [like, setLike] = useState<boolean>(false);
  const [buyIt, setBuyIt] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(prop.price);
  const [amt, setAmt] = useState(1);

  const totalCost = (count: number) => {
    const total = prop.price * count;
    setTotalPrice(total);
    setAmt(count);
  };

  useEffect(() => {
    const getDataFromStorage = (key: string) => {
      const items = getLocalStorageItem(key);
      const itemId = items?.map((id: { id: string }) => id.id);
      const findItemsId = itemId?.find((id: string) => id === prop.id);
      return findItemsId;
    };

    const findCartItems = getDataFromStorage('market');
    const findFavoriteItems = getDataFromStorage('favorite');

    if (findCartItems) {
      setBuyIt(true);
    }

    if (findFavoriteItems) {
      setLike(true);
    }
  }, [prop.id]);

  function generateOrderNumber() {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${timestamp}-${randomNumber}`;
  }

  const handleSaveAndRemoveToStorage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBuyIt(!buyIt);
    const cartItems = getLocalStorageItem('market');

    if (buyIt) {
      const updatedCartItems = cartItems.filter(
        (item: { id: string }) => item.id !== prop.id,
      );
      setLocalStorageItem('market', updatedCartItems);
    } else {
      const newCartItem = {
        id: prop.id,
        price: totalPrice,
        time: getCurrentDay(),
        name: prop.name,
        quantity: amt,
        orderNum: generateOrderNumber().substring(6, 13),
      };
      cartItems.push(newCartItem);
      setLocalStorageItem('market', cartItems);
    }
  };

  const saveAndRemoveFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike(!like);
    const favoriteItems = getLocalStorageItem('favorite');
    if (like) {
      const updatedFavoriteItems = favoriteItems.filter(
        (item: { id: string }) => item.id !== prop.id,
      );
      setLocalStorageItem('favorite', updatedFavoriteItems);
    } else {
      favoriteItems.push(prop);
      setLocalStorageItem('favorite', favoriteItems);
    }
  };

  return (
    <div className="w-[291px] h-auto pb-3 bg-card_background">
      <div className="w-[291px] h-[221px] mb-4 relative object-cover">
        <img
          src={defaultImg}
          alt="image"
          className="w-[291px] h-[221px] object-cover "
        />
        <div className="absolute top-3 left-3">
          <ProductCardStatus template={2} />
        </div>
        <div className="absolute bottom-3 left-3">
          <ProductCardDeliver template={1} />
        </div>
        <div className="absolute bottom-3 right-3">
          <img src={logo} alt="logo" />
        </div>
        <div className="absolute top-3 right-3  ">
          <button type="button" onClick={saveAndRemoveFavorite}>
            <img src={like ? hartR : hartW} alt="logo" />
          </button>
        </div>
      </div>

      <div className="px-3 mb-4">
        <h1 className="mb-4 text-xl font-medium  text-text_com">{prop.name}</h1>
        <p className="text-sm h-[40px] overflow-ellipsis overflow-hidden text-disabled">
          Власна плантація яблук вирощено без пестецидів
        </p>
      </div>
      <div className="flex justify-between px-3 mb-4">
        <ProductCardCounter prop={totalCost} />
        <div className="flex ">
          {prop.oldPrice && (
            <p className="line-through text-base font-medium text-text_com mr-2">
              {prop.oldPrice} грн
            </p>
          )}

          <p className="underline text-base font-medium text-secondary">
            {prop.price} грн
          </p>
        </div>
      </div>
      <div className="px-3 ">
        <button
          className={
            buyIt
              ? 'border-attention w-full h-12  flex justify-center items-center rounded-md border'
              : 'border-secondary w-full h-12  flex justify-center items-center rounded-md border hover:bg-card_background '
          }
          onClick={handleSaveAndRemoveToStorage}
        >
          <span
            className={
              buyIt
                ? 'mr-3 text-base  text-attention'
                : 'mr-3 text-base  text-secondary'
            }
          >
            {buyIt ? 'Відмінити' : 'Додати в кошик'}
          </span>
          <img src={buyIt ? basketRed : basketW} alt="basket" />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
