import { FC, useState } from 'react';

import basketW from '../../../../assets/icons/prodCard/basketW.svg';
import basketRed from '../../../../assets/icons/prodCard/basketRed.svg';
import build from '../../../../assets/icons/fullInfoCard/build.svg';
import hart from '../../../../assets/icons/fullInfoCard/hart.svg';
import hartRed from '../../../../assets/icons/fullInfoCard/hartRed.svg';
import ProductCardCounter from '../../ProductCard/ProductCardCounter';
import Rating from '../../starReting';
import Share from "../../SocialShare";

const Description: FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(95);
  const [buyIt, setBuyIt] = useState<boolean>(false);

  const totalCost = (count: number) => {
    const price = 95;
    const total = price * count;
    setTimeout(() => {
      setTotalPrice(total);
    }, 0);
  };

  return (
    <div className="gap-[18px] flex flex-col w-[576px]">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-semibold text-text_com">Твердий сир</h1>
        <p className="text-disabled">17.08.2023</p>
      </div>
      <div className="flex justify-between ">
        <Rating star={4} active={true} />
        <Share />
      </div>
      <div className="flex justify-between ">
        <div className="flex">
          {true && <img src={build} alt="logo" className="mr-3" />}
          <h2 className=" text-text_com text-lg">Сироварня “Василя”</h2>
        </div>
        <button className="flex items-center " onClick={() => setLike(!like)}>
          <span className="mr-3 text-base text-disabled">
            {like ? 'Видалити' : 'Додати до обраного'}
          </span>
          {like ? (
            <img src={hartRed} alt="image" />
          ) : (
            <img src={hart} alt="image" />
          )}
        </button>
      </div>
      <div className="">
        <p className="text-sm text-disabled">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque
          corrupti nisi nulla error laudantium, aliquam eius omnis vitae dolore
          harum rem, fugit soluta possimus deleniti commodi quo distinctio.
          Eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          laboriosam animi corporis sed quibusdam exercitationem repellat. Iure
          blanditiis recusandae nostrum repudiandae libero quae maxime nobis
          excepturi perspiciatis eum, sint maiores.
        </p>
      </div>
      <div>
        <p className="text-secondary">
          При замовленні в цього продовця на суму 500грн, доставка безкоштовна
        </p>
      </div>
      <div className="flex justify-between ">
        <div className="flex items-center">
          <ProductCardCounter prop={totalCost} />
          <p className="text-lg text-text_com ml-6">кг</p>
        </div>
        <div className="flex ">
          {true && (
            <p className="line-through text-base font-medium text-text_com mr-2">
              115 грн
            </p>
          )}

          <p className="underline text-base font-medium text-attention">
            95 грн
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <p className="text-2xl font-semibold text-text_com">Сума до сплати:</p>
        <p className="text-2xl font-semibold text-text_com">{totalPrice} грн</p>
      </div>
      <div>
        {buyIt ? (
          <button
            className="w-[265px] h-12  flex justify-center items-center rounded-md border-attention border "
            onClick={() => setBuyIt(false)}
          >
            <span className="mr-3 text-base  text-attention">Відмінити</span>
            <img src={basketRed} alt="basket" />
          </button>
        ) : (
          <button
            className="w-[265px] h-12 bg-secondary flex justify-center items-center rounded-md"
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

export default Description;
