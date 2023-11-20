import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const SearchPage = async ({ params }) => {
  try {
    // on Default mode, if you didn't declare "use client" then this component will be server component
    const keyword = params.keyword;

    // Fix space symbol on UI
    const decodedKeyword = decodeURI(keyword);

    // Calling API server Component
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
    const searchAnime = await response.json();

    return (
      <>
        <section>
          <Header title={`Result for "${decodedKeyword}"`} />
          {/* Anime List component has all data from Top Anime API*/}
          <AnimeList api={searchAnime} />
        </section>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default SearchPage;
