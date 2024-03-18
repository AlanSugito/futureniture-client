import { InputText } from "../../components";
import search from "../../assets/search.svg";
import Suggestions from "./Suggestions";

import { useState } from "react";

const SearchBar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const find = (e) => {
    if (e.key === "Enter") {
      setShowSuggestions(false);
      return;
    }

    setTimeout(() => {
      setShowSuggestions(true);
    }, 300);
  };

  return (
    <div className="centerize relative">
      <div className="relative">
        <InputText
          inputClassName={
            "rounded-full py-4 pl-16 border-white text-white w-[600px] placeholder-white"
          }
          placeholder={"Find your favorite products..."}
          onKeyPress={find}
          onBlur={() => setShowSuggestions(false)}
        />
        <img src={search} alt="search" className="absolute left-3 top-5" />
      </div>
      <Suggestions visible={showSuggestions} />
    </div>
  );
};

export default SearchBar;
