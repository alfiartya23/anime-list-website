import Link from "next/link";
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <header className="bg-color-accent sticky top-0">
      <div className="flex flex-col justify-between p-4 gap-2 md:items-center md:flex-row ">
        <Link href={"/"} className="text-white font-bold text-2xl">
          Anime List
        </Link>

        {/* Input Search Component */}
        <InputSearch />
      </div>
    </header>
  );
};

export default NavBar;
