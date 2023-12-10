import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { subCategory } from '../../../../constants/categories.ts';
import { mainCategories } from '../../../../constants/categories.ts';
import Close from '../../../../assets/icons/subProd/close.svg';

type SubCat = {
  categoryId: number;
  value: string;
  label: string;
  image: string;
}[];

const NavCategories: FC = () => {
  const [subContainer, setSubConteiner] = useState<boolean>(false);
  const [subList, setSubList] = useState<SubCat>([]);
  const [activeId, setActiveId] = useState<number>(0);
  const [subName, setSubName] = useState<string>('');

  const openSubCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSubConteiner(true);
    setSubName(target.innerText);
    setSubList(subCategory.filter(el => el.categoryId === Number(target.id)));

    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  };

  function closeSubCategories() {
    setSubConteiner(false);
    setActiveId(0);
    window.onscroll = window.onload;
  }

  return (
    <div className="">
      <div className="relative z-20 bg-white">
        <ul className="flex items-center justify-center gap-20 py-3 font-semibold shadow-md ">
          {mainCategories.map(({ id, label }) => (
            <li
              onClick={() => setActiveId(id)}
              key={id}
              className={
                activeId === id
                  ? 'text-default cursor-pointer transition duration-300 ease-in-out'
                  : 'hover:text-default cursor-pointer transition duration-300 ease-in-out'
              }
            >
              <button
                type="button"
                onClick={openSubCategories}
                id={id.toString()}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {subContainer && (
        <div className=" absolute top-0 z-10 h-full overflow-hidden w-full bg-black bg-opacity-50 ">
          <div className="h-[289px] bg-white mt-[152px] pt-6 px-10">
            <div className="flex mb-6 justify-between">
              <h1 className="text-3xl leading-6 font-semibold text-secondary">
                {subName}
              </h1>
              <button type="button" onClick={closeSubCategories}>
                <svg className="w-6 h-6 stroke-disabled hover:stroke-text_com">
                  <use href={Close + '#close'} />
                </svg>
              </button>
            </div>

            <ul className=" flex items-center  gap-16">
              {subList?.map(item => (
                <li key={item.value}>
                  <div className="bg-card_background  h-40 rounded-md border-2 border-card_background hover:border-secondary">
                    <NavLink
                      to={'/product'}
                      onClick={closeSubCategories}
                      state={item}
                    >
                      <img
                        src={item.image}
                        alt="product"
                        className="object-cover h-[100px] w-[100px] mb-4 rounded-t-md"
                      />
                      <p className="w-[100px] text-center text-sm text-text_com">
                        {item.label}
                      </p>
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCategories;
