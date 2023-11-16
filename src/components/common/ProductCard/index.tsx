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

  return (
    <div className="w-[291px] h-auto pb-3 bg-[#F4F4F4]">
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
        <div className="absolute top-3 right-3">
          <button type="button" onClick={() => setLike(!like)}>
            {like ? (
              <img src={hartR} alt="logo" />
            ) : (
              <img src={hartW} alt="logo" />
            )}
          </button>
        </div>
      </div>
      <div className="px-3 mb-4">
        <h1 className="mb-4 text-xl font-medium  text-[#444]">
          Яблуко білий налив
        </h1>
        <p className="text-sm  text-[#888]">
          Власна плантація яблук вирощено без пестецидів
        </p>
      </div>
      <div className="flex justify-between px-3 mb-4">
        <ProductCardCounter />
        <div className="flex ">
          <p className="line-through text-base font-medium text-[#444] mr-2">
            115 грн
          </p>
          <p className="underline text-base font-medium text-[#0D7211]">
            95 грн
          </p>
        </div>
      </div>
      <div className="px-3  ">
        {buyIt ? (
          <button
            className="w-full h-12  flex justify-center items-center rounded-md border-[#FF4646] border "
            onClick={() => setBuyIt(false)}
          >
            <span className="mr-3 text-base  text-[#FF4646]">Відмінити</span>
            <img src={basketRed} alt="basket" />
          </button>
        ) : (
          <button
            className="w-full h-12 bg-[#00A9191A] flex justify-center items-center rounded-md border-[#0D7211] border hover:bg-[#0D7211]"
            onClick={() => setBuyIt(true)}
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
