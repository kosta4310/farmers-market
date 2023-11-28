import { FC } from 'react';

import FullInfoProduct from '../../shared/FullInfoProduct';
import { useParams } from 'react-router-dom';

const ProductInfo: FC = () => {
  const {id} = useParams();
  
  return (
    <>
      <FullInfoProduct prop={id} />
    </>
  );
};

export default ProductInfo;
