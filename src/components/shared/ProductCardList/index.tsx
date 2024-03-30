import { FC, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import ProductCard from '../../common/ProductCard';
import arrowLeft from '../../../assets/icons/prodCard/arrow-left.svg';
import arrowRight from '../../../assets/icons/prodCard/arrow-right.svg';
import { productCardList } from '../../../constants/productCardList';

interface props {
  prop: boolean;
}

const ProductCardList: FC<props> = ({ prop }) => {
  const swiperRef = useRef<SwiperType>();
  const location = useLocation();

  return (
    <div className="mt-[60px]  mb-[97px]">
      <div className="mb-10 relative">
        <h1 className="text-[40px] font-semibold leading-9 text-secondary text-center ">
          {prop ? 'Найпопулярніші товари' : 'Нещодавно переглянуті товари'}
        </h1>
        <div className="absolute top-0 right-[calc(50vw-610px)]">
          <button
            className="mr-3"
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={arrowRight} alt="right" />
          </button>
          <button type="button" onClick={() => swiperRef.current?.slideNext()}>
            <img src={arrowLeft} alt="left" />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Swiper
          slidesPerView={4}
          loop={false}
          modules={[Navigation, Virtual]}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
          virtual
          className="mySwiper w-[1250px] "
        >
          <ul>
            {productCardList.map(card => (
              <li key={card.id}>
                <SwiperSlide>
                  <NavLink
                    to={`/product/:${card.id}/description`}
                    state={{ from: location }}
                  >
                    <ProductCard prop={card} />
                  </NavLink>
                </SwiperSlide>
              </li>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCardList;
