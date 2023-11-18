import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">{title}</h1>

      {/* Validation for Search Result */}
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
