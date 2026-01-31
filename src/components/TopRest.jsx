import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import restaurantChains from "../data/restaurantChains.json";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function TopRest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(restaurantChains);
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto px-2 mt-12">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Delhi
        </div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-hidden">
        {data.map((d, i) => {
          return <Card width="w-full md:w-[273px]" {...d} key={i} />;
        })}
      </div>
      <hr className="h-px w-full bg-gray-400 border-0 mx-auto my-10" />
    </div>
  );
}
