import React, { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <label
      htmlFor="search"
      className="flex flex-col gap-1 mb-4 animate-fade-right animate-duration-500 text-lg"
    >
      Buscar frase
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Ahora un poema ..."
        onChange={handleInputChange}
        className="w-full border-b-[1px] focus:outline-none text-lg"
      />
    </label>
  );
};

export default SearchBar;
