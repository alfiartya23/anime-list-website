"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  // Search
  const searchRef = useRef();
  const router = useRouter();

  //   Handle search button
  const handleSearch = (event) => {
    // Challenge - SESI_2
    // Handle enter button and click button to search
    if (event.key === "Enter" || event.type === "click") {
      // Prevent default
      event.preventDefault();

      const keyword = searchRef.current.value;
      // Challenge - SESI_3
      // If input search is empty then do nothing
      if (keyword === "") {
        return;
      } else {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input type="text" placeholder="Title, genres" className="w-full p-2 rounded-md px-10 border focus:outline-none" ref={searchRef} onKeyDown={handleSearch} />
      {/* Search Button */}
      <button className="absolute top-2 start-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>

      {/* Clear Button */}
      <button className="absolute top-2 end-2">
        <X size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
