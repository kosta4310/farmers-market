import { FC } from 'react';

import car from '../../../../assets/icons/delivery/car.svg';
import scooter from '../../../../assets/icons/delivery/scooter.svg';
import box from '../../../../assets/icons/delivery/box.svg';

interface statusProps {
  template: number;
}

const ProductCardDeliver: FC<statusProps> = ({ template }) => {
  function getStatus() {
    switch (template) {
      case 1:
        return { text: ' Безкоштовна доставка', image: car };
      case 2:
        return { text: 'Самовивіз', image: box };
      case 3:
        return { text: 'Кур’єрська доставка', image: scooter };
      default:
        return {};
    }
  }

  type Deliv = { image?: string; text?: string };
  const { image, text }: Deliv = getStatus();

  return (
    <>
      {text && (
        <div className="flex bg-black/30 items-center">
          <img src={image} alt="delivery type" />
          <p className="text-xs font-normal w-20 text-white ml-1">{text}</p>
        </div>
      )}
    </>
  );
};

export default ProductCardDeliver;
