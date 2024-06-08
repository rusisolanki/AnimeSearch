import { FaHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const Card = ({ data }) => {

  return (
    <>
      <div className="flex justify-between items-center bg-[#272727] rounded-lg">
        <div className="flex items-center">
          <div>
            <img
              src={data.images.jpg.image_url}
              alt="Anime Characters"
              className="w-24 h-28 p-3"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{data.name}</h3>
            <div className="grid grid-cols-3">
            {data.nicknames.map((name, index) => (
            
              <span key={index} className="text-center border border-gray-600 m-1 px-1 bg-[#3a3a3a]">{name}</span>
            
            ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1"><FaHeart/>{data.favorites}</div>
          <div className="m-4">
            <a href={data.url} target="_blank">
            <FaArrowRight className="text-4xl"/>
            </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Card;
