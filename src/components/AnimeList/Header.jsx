import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 my-5 flex justify-between items-center">
      <h1 className="font-bold text-4xl text-color-primary">{title}</h1>
      {/* Validation for Search Result */}
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-sm underline hover:text-color-accent transition-all text-color-primary">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
