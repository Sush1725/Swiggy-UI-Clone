import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import catgories from "../data/category.json";
import { useEffect, useState } from "react";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(catgories);
  }, []);
  const nextSlide = () => {
    if (catgories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
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
        {category.map((cat, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={index}
              className="w-[150px] shrink-0 duration-500"
            >
              <img src={cat.image} alt={cat.path} />
            </div>
          );
        })}
      </div>

       <hr className="h-px w-full bg-gray-400 border-0 mx-auto my-6" />


   
    </div>
  );
}
