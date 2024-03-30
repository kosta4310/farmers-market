import { FC, useState } from 'react';
import arrow from '../../../assets/icons/subProd/arrow.svg';
import { Product } from '../../pages/MyProductsPage';

type TamplateSortProps = {
  prop: Product[];
  sortFn: (sortedList: Product[]) => void;
};

const TamplateSort: FC<TamplateSortProps> = ({ prop, sortFn }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [titleName, setTitleName] = useState<string>('За датою додавання');

  return (
    <div className="w-[228px] h-12 border-2 border-stroke_input rounded-md mb-3 relative">
      <button
        type="button"
        className="flex justify-center items-center w-[228px] h-12"
        onClick={() => setOpen(!open)}
      >
        <p className="mr-2 text-sm text-text_com">{titleName}</p>
        <svg className="w-5 h-5">
          <use href={arrow + '#arrow'} />
        </svg>
      </button>
      <div className="absolute z-20 bg-white w-[228px]">
        {open && (
          <ul className="border-2 border-stroke_input rounded-md ">
            <li>
              <button
                className="text-sm text-text_com w-full px-3 py-4 hover:bg-but_backgraund hover:text-secondary"
                onClick={() => (
                  sortFn(prop),
                  setOpen(false),
                  setTitleName('За датою додавання')
                )}
              >
                За датою додавання
              </button>
            </li>
            <li>
              <button
                className="text-sm text-text_com w-full px-3 py-4 hover:bg-but_backgraund hover:text-secondary"
                onClick={() => (
                  sortFn(
                    prop
                      .slice()
                      .sort((a: { name: string }, b: { name: string }) =>
                        b.name.localeCompare(a.name),
                      ),
                  ),
                  setOpen(false),
                  setTitleName('За станом оголошення')
                )}
              >
                За станом оголошення
              </button>
            </li>
            <li>
              <button
                className="text-sm text-text_com w-full px-3 py-4 hover:bg-but_backgraund hover:text-secondary"
                onClick={() => (
                  sortFn(
                    prop
                      .slice()
                      .sort(
                        (a: { price: number }, b: { price: number }) =>
                          a.price - b.price,
                      ),
                  ),
                  setOpen(false),
                  setTitleName('Від дешевих до дорогих')
                )}
              >
                Від дешевих до дорогих
              </button>
            </li>
            <li>
              <button
                className="text-sm text-text_com w-full px-3 py-4 hover:bg-but_backgraund hover:text-secondary"
                onClick={() => (
                  sortFn(
                    prop
                      .slice()
                      .sort(
                        (a: { price: number }, b: { price: number }) =>
                          b.price - a.price,
                      ),
                  ),
                  setOpen(false),
                  setTitleName('Від дорогих до дешевих')
                )}
              >
                Від дорогих до дешевих
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TamplateSort;
