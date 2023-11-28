import { FC, useState } from 'react';

import send from '../../../../assets/icons/fullInfoCard/send.svg';
import QustionForProduct from './QuestionForProduct';

const Questions: FC = () => {
  const [question, setQuestion] = useState<string>('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('питання', question);
    setQuestion('');
  };

  const arr: number[] = [0, 1, 2, 3, 4, 5];
  return (
    <div className="w-[851px]   ">
      <div className=" w-[820px] h-[350px] overflow-y-auto mb-4  ">
        <ul>
          {arr.map(com => (
            <li key={com} className="mb-4 mr-6">
              <QustionForProduct />
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[820px]">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              name="yourQuestion"
              type="text"
              className="h-12 w-full border border-stroke_input rounded mb-4 p-4 focus:outline-none focus:border-secondary"
              placeholder="Введіть ваше питання або коментар"
              value={question}
              onChange={e => setQuestion(e.target.value)}
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

export default Questions;
