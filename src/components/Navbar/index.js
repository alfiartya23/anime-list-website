import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-sky-500">
      <div className="flex md:flex-row flex-col items-center justify-between p-4 gap-2">
        <Link href={"/"} className="text-white font-bold text-2xl">
          AnimeList
        </Link>
        <input type="text" placeholder="Search anime" className="p-2 rounded-md" />
      </div>
    </header>
  );
};

export default NavBar;
