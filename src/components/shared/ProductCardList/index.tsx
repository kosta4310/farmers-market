import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import ProductCard from '../../common/ProductCard';
import arrowLeft from '../../../assets/icons/prodCard/arrow-left.svg';
import arrowRight from '../../../assets/icons/prodCard/arrow-right.svg';

interface props {
  prop: boolean;
}

const ProductCardList: FC<props> = ({ prop }) => {
  const swiperRef = useRef<SwiperType>();

  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    'Slide 8',
    'Slide 9',
  ];

  return (
    <div className="mt-[60px]  mb-[97px]">
      <div className="mb-10 relative">
        <h1 className="text-[40px] font-semibold leading-9 text-[#0D7211] text-center ">
          {prop ? 'Найпопулярніші товари' : 'Нещодавно переглянуті товари'}
        </h1>
        <div className="absolute top-0 right-[calc(50vw-570px)]">
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
          loop={true}
          modules={[Navigation, Virtual]}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
          virtual
          className="mySwiper w-[1250px] "
        >
          <ul>
            {slides?.map(slide => (
              <li key={slide}>
                <SwiperSlide>
                  <ProductCard />
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
