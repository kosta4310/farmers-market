import { FC, useState } from 'react';

import send from '../../../../assets/icons/fullInfoCard/send.svg';
import Rating from '../../starReting';

const Feedback: FC = () => {
  const [feedback, setFeedback] = useState<string>('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('коментар', feedback);
    setFeedback('');
  };

  const arr: number[] = [0, 1, 2, 3, 4, 5];

  return (
    <div className="w-[851px]   ">
      <div className=" w-[820px] h-[350px] overflow-y-auto mb-4  ">
        <ul>
          {arr.map(com => (
            <li key={com} className="mb-4 mr-6">
              <div className="border  border-stroke_input rounded-lg">
                <div className="flex justify-between px-4 py-2 border-b mb-4 border-stroke_input">
                  <h2 className="font-medium text-text_com">Фірма “Крона”</h2>
                  <p className=" text-disabled">17.08.2023</p>
                </div>
                <div className="px-4">
                  <div className="mb-2">
                    <Rating star={4} active={true} />
                  </div>
                  <div>
                    <p className=" text-text_com">
                      Надійний покупець. Купував у мене яблуки, груши та
                      абрикоси домовились що він саме приїде та забере у мене
                      продукти.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[820px]">
        {feedback && (
          <div className="mb-4">
            <Rating star={0} active={false} />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>
            <input
              name="yourFeedback"
              type="text"
              className="h-12 w-full border border-stroke_input rounded mb-4 p-4 focus:outline-none focus:border-secondary"
              placeholder="Введіть ваше питання або коментар"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-[265px] h-[45px] rounded border border-secondary flex items-center justify-center "
          >
            <span className="text-secondary  mr-3"> Надіслати</span>
            <img src={send} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
