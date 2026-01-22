import { useEffect, useState } from "react";
import groceries from "../data/grocery.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Grocery() {
  const [slide, setSlide] = useState(0);
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
    setGrocery(groceries);
  }, []);
  const nextSlide = () => {
    if (groceries.length - 8 == slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">Shop groceries on Instamart</div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {grocery.map((gro, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={index}
              className="w-[150px] shrink-0 duration-500 "
            >
              <img src={gro.image} alt={gro.path} />
            </div>
          );
        })}
      </div>
      {/* <hr className="my-6 border-[1px]" /> */}
    </div>
  );
}
