"use client";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto gap-4">
      <h1 className="text-6xl font-bold text-color-primary">404</h1>
      <p className="text-color-primary">Cannot find what you are looking for</p>
      <Link href={"/"} className="bg-color-accent text-color-dark px-12 py-3 rounded-xl">
        Back
      </Link>
    </div>
  );
};

export default Page;
