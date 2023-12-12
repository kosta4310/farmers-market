import { Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';

interface Props {
  buttonName: ReactNode;
  children: ReactNode;
  isModalOpenMenu: boolean;
  setIsModalOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const DropDownMenu: FC<Props> = ({
  isModalOpenMenu,
  setIsModalOpenMenu,
  buttonName,
  children,
}) => {
  const menuRef = useRef<HTMLElement>(null);

  useClickOutside(menuRef, () => {
    if (isModalOpenMenu) {
      setTimeout(() => setIsModalOpenMenu(false), 50);
    }
  });

  function handleButtonClick(): void {
    setIsModalOpenMenu(!isModalOpenMenu);
  }

  return (
    <div className="relative">
      <button onClick={handleButtonClick}>{buttonName}</button>
      {isModalOpenMenu && (
        <nav
          ref={menuRef}
          className="absolute z-50 top-[calc(100%+1rem)] bg-white min-w-full whitespace-nowrap p-3 right-0 cursor-auto outline-none shadow-sm"
        >
          {children}
        </nav>
      )}
    </div>
  );
};

export default DropDownMenu;
