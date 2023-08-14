import React, { FC, useState } from 'react';
import search from '../../../assets/icons/user-bar/search.svg';

const SearchBar: FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <label
      htmlFor="search"
      className="flex gap-2 bg-white rounded-md shadow-md w-1/3 px-3 py-1"
    >
      <img src={search} alt="search" />
      <input
        id="search"
        className="rounded-md focus:outline-none
        focus:shadow-outline text-opacity-50 border-opacity-50 w-full"
        type="text"
        value={searchText}
        onChange={handleSearchChange}
      />
    </label>
  );
};

export default SearchBar;
