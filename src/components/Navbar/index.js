import Link from "next/link";
import InputSearch from "./InputSearch";

const NavBar = () => {
  return (
    <header className="bg-sky-500 sticky top-0">
      <div className="flex md:flex-row flex-col items-center justify-between p-4 gap-2">
        <Link href={"/"} className="text-white font-bold text-2xl">
          Anime Streaming
        </Link>

        {/* Input Search Component */}
        <InputSearch />
      </div>
    </header>
  );
};

export default NavBar;
