import { FC, useState } from 'react';

import defaultImg from '../../../assets/img/default-image.jpg';
import basketW from '../../../assets/icons/prodCard/basketW.svg';
import logo from '../../../assets/icons/prodCard/logo.svg';
import hartW from '../../../assets/icons/prodCard/hartW.svg';
import hartR from '../../../assets/icons/prodCard/hartR.svg';
import basketRed from '../../../assets/icons/prodCard/basketRed.svg';

import ProductCardCounter from './ProductCardCounter';
import ProductCardStatus from './ProductCardStatus';
import ProductCardDeliver from './ProductCardDeliver';

const ProductCard: FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const [buyIt, setBuyIt] = useState<boolean>(false);

  const totalCost = (count: number) => {
    const price = 95;
    const total = price * count;
    return total;
  };

  return (
    <div className="w-[291px] h-auto pb-3 bg-card_background">
      <div className="w-[291px] h-[221px] mb-4 relative">
        <img src={defaultImg} alt="image" />
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
          <button
            type="button"
            onClick={e => {
              setLike(!like), e.preventDefault();
            }}
          >
            {like ? (
              <img src={hartR} alt="logo" />
            ) : (
              <img src={hartW} alt="logo" />
            )}
          </button>
        </div>
      </div>

      <div className="px-3 mb-4">
        <h1 className="mb-4 text-xl font-medium  text-text_com">
          Яблуко білий налив
        </h1>
        <p className="text-sm h-[40px] overflow-ellipsis overflow-hidden text-disabled">
          Власна плантація яблук вирощено без пестецидів
        </p>
      </div>
      <div className="flex justify-between px-3 mb-4">
        <ProductCardCounter prop={totalCost} />
        <div className="flex ">
          <p className="line-through text-base font-medium text-text_com mr-2">
            115 грн
          </p>
          <p className="underline text-base font-medium text-secondary">
            95 грн
          </p>
        </div>
      </div>
      <div className="px-3 ">
        {buyIt ? (
          <button
            className="w-full h-12  flex justify-center items-center rounded-md border-attention border "
            onClick={e => {
              setBuyIt(false), e.preventDefault();
            }}
          >
            <span className="mr-3 text-base  text-attention">Відмінити</span>
            <img src={basketRed} alt="basket" />
          </button>
        ) : (
          <button
            className="w-full h-12 bg-[#00A9191A] flex justify-center items-center rounded-md border-secondary border hover:bg-secondary"
            onClick={e => {
              setBuyIt(true), e.preventDefault();
            }}
          >
            <span className="mr-3 text-base  text-white">Додати в кошик</span>
            <img src={basketW} alt="basket" />
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
