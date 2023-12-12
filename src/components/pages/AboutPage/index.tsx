import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="px-10 my-20">
      <h1 className="text-[40px] text-secondary font-semibold leading-9 mb-10">
        Про нас
      </h1>
      <h2 className="text-2xl text-text_com font-semibold mb-4">
        Чому саме ми?
      </h2>
      <p className="text-lg  leading-6 text-text_com mb-8">
        З дитинства ми звикли купувати якісні овочі, фрукти та м'ясо у звичайних
        фермерів які приїздили на ярмарки, базари, ринки зі своєю продукцією.
        Наразі аграрія, крафтові продукти власного виробництва займає вагому
        частину нашого ринку та вибору! Як знайти все не витрачає багато часу?
        Щоб все було в одному місці, надихнуло нас створити "Farmer's market".
      </p>
      <h2 className="text-2xl text-text_com font-semibold mb-4">Хто з нами?</h2>
      <p className="text-lg  leading-6 text-text_com mb-10">
        Фермери, виробники крафтових продуктів та малі підприємства - які дбають
        про свого споживача та виробляють якісні продукти які пройшли ГОСТ
        стандарти
      </p>
      <h2 className="text-[40px] text-secondary font-semibold leading-9 mb-8">
        Контакти
      </h2>
      <p className="text-xl text-text_com font-medium mb-2">
        Наш номер
        <span className="text-lg underline font-normal ml-2">
          <a href="tel:+380991122333">0991122333</a>
        </span>
      </p>
      <p className="text-lg text-text_com font-semibold underline ">
        Електронна скринька
        <span className="text-lg font-normal underline ml-2">
          <a href="mailto:+380991122333"> fermer`s_market@gmail.com</a>
        </span>
      </p>
      <p className="text-lg text-text_com font-semibold underline ">
        Локація
        <span className="text-lg font-normal  ml-2">
          <a href="https://maps.app.goo.gl/JY3ZsaXmv9kYD55N7" target="_blank">
            м.Київ, вул. Соборна 125
          </a>
        </span>
      </p>
    </div>
  );
};

export default AboutPage;
