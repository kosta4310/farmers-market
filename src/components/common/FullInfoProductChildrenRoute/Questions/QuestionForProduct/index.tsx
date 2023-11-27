import { FC, useState } from 'react';

import like from '../../../../../assets/icons/fullInfoCard/like.svg';
import disLike from '../../../../../assets/icons/fullInfoCard/disLike.svg';
import arrow from '../../../../../assets/icons/fullInfoCard/arrow.svg';

const QustionForProduct: FC = () => {
  const [countLike, setCountLike] = useState<number>(0);
  const [countDisLike, setCountDisLike] = useState<number>(0);

  function counterLike(): void {
    if (countLike === 0 && countDisLike !== 1) {
      setCountLike(countLike + 1);
    }
  }
  function counterDisLike(): void {
    if (countDisLike === 0 && countLike !== 1) {
      setCountDisLike(countDisLike + 1);
    }
  }

  return (
    <div className="border  border-stroke_input rounded-lg">
      <div className="flex justify-between px-4 py-2 border-b mb-4 border-stroke_input">
        <h2 className="font-medium text-text_com">Ігор Яцик</h2>
        <p className=" text-disabled">20.08.2023</p>
      </div>
      <div className="px-4">
        <div className="mb-3">
          <p className=" text-text_com">
            Надійний покупець. Купував у мене яблуки, груши та абрикоси
            домовились що він саме приїде та забере у мене продукти.
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <button className="flex gap-2 items-center " type="button">
            <img src={arrow} alt="arrow" />
            <span className="text-sm text-secondary">Відповісти</span>
          </button>
          <div className="flex items-center ">
            <button className="mr-2" type="button" onClick={counterLike}>
              <img src={like} alt="arrow" />
            </button>
            <p className="text-sm text-secondary mr-8">{countLike}</p>
            <button className="mr-2" type="button" onClick={counterDisLike}>
              <img src={disLike} alt="arrow" />
            </button>

            <p className="text-sm text-secondary">{countDisLike}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QustionForProduct;
