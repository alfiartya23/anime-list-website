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
    // Prevent default
    event.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };

  // Challenge - SESI_2
  // Handle enter button to search
  const handleEnter = (event) => {
    // If user press enter
    if (event.key === "Enter") {
      const keyword = searchRef.current.value;

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input type="text" placeholder="Title, genres" className="w-full p-2 rounded-md px-10 border focus:outline-none" ref={searchRef} onKeyDown={handleEnter} />
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
