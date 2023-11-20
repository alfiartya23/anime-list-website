import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  // on Default mode, if you didn't declare "use client" then this component will be server component

  // Calling API server Component
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4`);
  const recommendedAnime = await response2.json();
};

export default Home;
