import AnimeList from "@/components/AnimeList";

import Link from "next/link";

const Home = async () => {
  // on Default mode, if you didn't declare "use client" then this component will be server component

  // Calling API server Component
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl">Most Popular</h1>
        <Link href="/popular" className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">
          See more
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
        {anime.data.map((data) => {
          /* data.mal_id is used for each anime show id */
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.jpg.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
