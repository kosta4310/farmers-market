import { FC } from 'react';

interface PageNavigationProps {
  page: number;
}
const PageNavigation: FC<PageNavigationProps> = ({ page }) => {
  return (
    <div className="flex items-center">
      <div
        className={`flex justify-center items-center rounded-full bg-gray-200 ${
          page === 1 && 'bg-green-basic'
        } w-10 p-2`}
      >
        <span className={`block ${page === 1 && 'text-white'}`}>1</span>
      </div>
      <div className="border-b-2 border-gray-500 grow bottom-5"></div>
      <div
        className={`flex justify-center items-center rounded-full bg-gray-200 ${
          page === 2 && 'bg-green-basic'
        } w-10 p-2`}
      >
        <span className={`block ${page === 2 && 'text-white'}`}>2</span>
      </div>
      <div className="border-b-2 border-gray-500 grow bottom-5"></div>
      <div
        className={`flex justify-center items-center rounded-full bg-gray-200 ${
          page === 3 && 'bg-green-basic'
        } w-10 p-2`}
      >
        <span className={`block ${page === 3 && 'text-white'}`}>3</span>
      </div>
    </div>
  );
};

export default PageNavigation;
