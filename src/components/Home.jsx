import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalPage, setFinalPage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v4/characters?page=${currentPage}&limit=15&q=&order_by=favorites&sort=desc`
      );
      const data = await response.json();
      setAnimeData(data.data);
      setFinalPage(data.pagination.last_visible_page)
    };
    fetchData();
  }, [currentPage]);

 

  const nextPage = () => {
    if(currentPage !== finalPage){
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const previousPage = () => {
    if(currentPage !== 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Search currentPage={currentPage} onSetAnimeData={setAnimeData}/>
        <div className="w-full flex items-center justify-center">
          <div className="w-[80%] my-5">
            <div className="mx-5 flex justify-between">
              <button
                className="border-2 bg-[#212121] px-4 py-2 rounded-lg"
                onClick={previousPage}
              >
                Previous
              </button>
              <button className="border-2 bg-[#212121] px-4 py-2 rounded-lg" onClick={nextPage}>Next</button>
            </div>
            {animeData.length !== 0 ? animeData.map((anime) => (
              <div key={anime.mal_id} className="border-2 rounded-lg m-5">
                <Card data={anime} />
              </div>
            )) : <div className="text-center text-lg mt-10">No Data Found</div> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
