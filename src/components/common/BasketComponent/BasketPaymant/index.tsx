import { FC, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import aPay from '../../../../assets/img/paymantImage/aPay.png';
import gPay from '../../../../assets/img/paymantImage/gPay.png';
import lPay from '../../../../assets/img/paymantImage/lPay.png';
import watch from '../../../../assets/icons/backet/watch.svg';

const BasketPaymant: FC = () => {
  const [watchNumber, setWatchNumber] = useState(false);
  const [cardNum, setCardNum] = useState('');
  const [cardDate, setCardDate] = useState({ mm: '', yy: '' });
  const [cardCvv, setCardCvv] = useState('');
  const refs = {
    month: useRef<HTMLInputElement | null>(null),
    year: useRef<HTMLInputElement | null>(null),
  };

  const cardNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case '1':
        {
          const cardNumber = e.target.value
            .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
            .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);

          if (cardNumber !== null) {
            const formattedCardNumber = cardNumber[0];
            setCardNum(formattedCardNumber);
          }
        }
        break;
      case '2':
        {
          const cardDateMm = e.target.value;
          const inputDigits = cardDateMm.slice(0, 2);
          setCardDate({ ...cardDate, mm: inputDigits });
          if (inputDigits.length === 2 && refs.year.current) {
            refs.year.current.focus();
          }
        }
        break;
      case '3':
        {
          const cardDateYy = e.target.value;
          const inputDigits = cardDateYy.slice(0, 2);
          setCardDate({ ...cardDate, yy: inputDigits });
          if (inputDigits.length === 0 && refs.month.current) {
            refs.month.current.focus();
          }
        }
        break;
      case '4':
        {
          const cardNumberCvv = e.target.value;
          setCardCvv(cardNumberCvv.slice(0, 3));
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="mt-20 ">
      <div className=" mb-10 pl-10">
        <h1 className="text-[40px] font-semibold leading-9 text-black ">
          Сплатити замовлення
        </h1>
      </div>
      <div className="w-[504px] mx-auto">
        <h2 className="font-medium text-text_com mb-2">НОМЕР КАРТКИ</h2>
        <form className="relative">
          <input
            type={watchNumber ? 'text' : 'password'}
            placeholder="XXXX XXXX XXXX XXXX"
            className="h-12 w-full border border-stroke_input rounded-md mb-2 px-4 outline-none"
            onChange={cardNumberInput}
            value={cardNum}
            id="1"
          />
          <button
            type="button"
            className="absolute top-[14px] right-4"
            onClick={() => setWatchNumber(!watchNumber)}
          >
            <svg
              className={
                watchNumber
                  ? 'w-5 h-5 fill-secondary'
                  : 'w-5 h-5  fill-stroke_input'
              }
            >
              <use href={watch + '#watch'} />
            </svg>
          </button>

          <p className="text-xs text-input mb-3">Це поле є обов'язковим.</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <h2 className="underline font-medium text-text_com mr-4 ">
                Строк дії картки
              </h2>
              <input
                type="number"
                placeholder="MM"
                className="h-12 w-[42px] border-t border-b border-l border-stroke_input rounded-l-md outline-none px-2"
                onChange={cardNumberInput}
                value={cardDate.mm}
                ref={refs.month}
                id="2"
              />
              <span className=" h-12 border-t border-b  border-stroke_input flex items-center">
                /
              </span>
              <input
                type="number"
                placeholder="YY"
                className="h-12 w-[42px] border-t border-b border-r border-stroke_input rounded-r-md outline-none px-2"
                onChange={cardNumberInput}
                value={cardDate.yy}
                ref={refs.year}
                id="3"
              />
            </div>
            <div className="flex items-center">
              <h2 className="underline font-medium text-text_com mr-4">CVV</h2>
              <input
                type="number"
                placeholder="XXX"
                className="h-12 w-[83px] border border-stroke_input rounded-md px-4 outline-none"
                onChange={cardNumberInput}
                value={cardCvv}
                id="4"
              />
            </div>
          </div>
          <p className="text-xs text-input mb-3">Це поле є обов'язковим.</p>
        </form>
      </div>
      <div className="my-10 text-center">
        <p className="font-medium text-black">або</p>
      </div>
      <div className="w-[880px] flex justify-between mx-auto mb-[84px]">
        <button
          type="button"
          className="w-[204px] h-[204px] border-2 rounded-lg border-stroke_input hover:border-secondary flex justify-center items-center"
        >
          <img src={lPay} alt="liqpay" width={152} height={152} />
        </button>
        <button
          type="button"
          className="w-[204px] h-[204px] border-2 rounded-lg border-stroke_input hover:border-secondary flex justify-center items-center"
        >
          <img src={aPay} alt="appelPay" width={152} height={152} />
        </button>
        <button
          type="button"
          className="w-[204px] h-[204px] border-2 rounded-lg border-stroke_input hover:border-secondary flex justify-center items-center"
        >
          <img src={gPay} alt="googlePay" width={152} height={152} />
        </button>
      </div>
      <div className="flex justify-center mb-32">
        <NavLink to={'/'}>
          <button
            type="button"
            className="h-12 w-[240px] bg-secondary text-white rounded-md "
          >
            Оплатити
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BasketPaymant;
