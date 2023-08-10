import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <input
      className="rounded-md focus:outline-none
      focus:shadow-outline"
      type="text"
    />
  );
};

export default SearchBar;
