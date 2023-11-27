import { FC } from 'react';

interface StatusProps {
  template: number;
}

const ProductCardStatus: FC<StatusProps> = ({ template }) => {
  function getStatus() {
    switch (template) {
      case 1:
        return { text: 'ХІТ', color: 'bg-attention' };
      case 2:
        return { text: 'НОВЕ', color: 'bg-secondary' };
      case 3:
        return { text: 'АКЦІЙНА ЦіНА', color: 'bg-text_com' };
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
