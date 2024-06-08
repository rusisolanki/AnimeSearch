import { useEffect, useState } from "react";

const Search = ({currentPage, onSetAnimeData}) => {
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    const searchData = setTimeout(async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/characters?page=${currentPage}&limit=15&q=${searchedValue}&order_by=favorites&sort=desc`
      );
      const data = await res.json();
      onSetAnimeData(data.data)
    
    }, 1000);

    return () => clearTimeout(searchData);
  }, [searchedValue]);
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center h-96 bg-[url('../../cover.jpeg')] bg-cover bg-no-repeat">
      <h1 className="text-[3rem] text-red-700 font-bold bg-[#212121] rounded-lg px-5 py-2">
        Search Anime Characters
      </h1>
      <input
        type="text"
        placeholder="Search"
        className="border border-white text-white text-xl bg-[#212121] w-[50%] h-12 p-5 rounded-lg"
        onChange={(e) => setSearchedValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
