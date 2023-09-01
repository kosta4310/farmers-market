import { FC } from 'react';

interface Props {
  page: number;
}
const PageNavigation: FC<Props> = ({ page }) => {
  return (
    <div className="flex justify-between">
      <div
        className={`flex justify-center items-center rounded-full bg-gray-200 ${
          page === 1 && 'bg-green-700'
        } w-10 p-2`}
      >
        <span className="block">1</span>
      </div>
      <div className="border-b-2 border-gray-500 grow relative bottom-5"></div>
      <div
        className={`flex justify-center items-center rounded-full bg-gray-200 ${
          page === 2 && 'bg-green-700'
        } w-10 p-2`}
      >
        <span className="block">2</span>
      </div>
      <div className="border-b-2 border-gray-500 grow relative bottom-5"></div>
      <div
        className={`flex justify-center items-center rounded-full bg-gray-200 ${
          page === 3 && 'bg-green-700'
        } w-10 p-2`}
      >
        <span className="block">3</span>
      </div>
    </div>
  );
};

export default PageNavigation;
