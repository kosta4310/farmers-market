import { FC } from 'react';

interface statusProps {
  template: number;
}

const ProductCardStatus: FC<statusProps> = ({ template }) => {
  function getStatus() {
    switch (template) {
      case 1:
        return { text: 'ХІТ', color: 'bg-[#FF4646]' };
      case 2:
        return { text: 'НОВЕ', color: 'bg-[#0D7211]' };
      case 3:
        return { text: 'АКЦІЙНА ЦіНА', color: 'bg-[#444]' };
      default:
        return {};
    }
  }
  type Meaning = { color?: string; text?: string };
  const { color, text }: Meaning = getStatus();

  return (
    <>
      {color && (
        <div className={`${color} px-3`}>
          <p className="text-lg font-medium text-white  ">{text}</p>
        </div>
      )}
    </>
  );
};

export default ProductCardStatus;
