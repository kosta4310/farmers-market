import { FC } from 'react';

interface PageNavigationProps {
  page: number;
}
const PageNavigation: FC<PageNavigationProps> = ({ page }) => {
  return (
    <>
      <div className="flex items-center">
        <div
          className={`flex justify-center items-center rounded-full  ${
            page === 1 ? 'bg-secondary' : 'bg-stroke_input'
          } w-10 p-2`}
        >
          <span className={`block ${page === 1 && 'text-white'}`}>1</span>
        </div>

        <div className="border-b-2 border-disabled grow bottom-5"></div>

        <div
          className={`flex justify-center items-center rounded-full  ${
            page === 2 ? 'bg-secondary' : 'bg-stroke_input'
          } w-10 p-2`}
        >
          <span className={`block ${page === 2 && 'text-white'}`}>2</span>
        </div>

        <div className="border-b-2 border-disabled grow bottom-5"></div>

        <div
          className={`flex justify-center items-center rounded-full  ${
            page === 3 ? 'bg-secondary' : 'bg-stroke_input'
          } w-10 p-2`}
        >
          <span className={`block ${page === 3 && 'text-white'}`}>3</span>
        </div>

        <div className="border-b-2 border-disabled grow bottom-5"></div>

        <div
          className={`flex justify-center items-center rounded-full  ${
            page === 4 ? 'bg-secondary' : 'bg-stroke_input'
          } w-10 p-2`}
        >
          <span className={`block ${page === 4 && 'text-white'}`}>4</span>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={`text-left ${
            page === 1 ? 'text-secondary' : 'text-input'
          } `}
        >
          Основна <br /> інформація
        </span>

        <div className="grow"></div>

        <span
          className={`text-center ${
            page === 2 ? 'text-secondary' : 'text-input'
          } `}
        >
          Інформація <br />
          про підприємство
        </span>

        <div className="grow"></div>

        <span
          className={`text-right ${
            page === 3 ? 'text-secondary' : 'text-input'
          } `}
        >
          Умови доставки
        </span>

        <div className="grow"></div>

        <span
          className={`text-right ${
            page === 4 ? 'text-secondary' : 'text-input'
          } `}
        >
          Реєстрація
        </span>
      </div>
    </>
  );
};

export default PageNavigation;
