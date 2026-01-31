import React, { useEffect, useRef, useState } from "react";
import restaurantChains from "../data/restaurantChains.json";
import Card from "./Card";

export default function OnlineDelivery() {
  const filterOptions = [
    "Filter",
    "Sort by",
    "Fast Delivery",
    "New on Swiggy",
    "Ratings 4.0+",
    "Pure Veg",
    "Offers",
    "Rs.300-Rs.600",
    "Less than Rs.300",
  ];
  const [data, setData] = useState([]);

  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setData(restaurantChains);
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto px-2 mt-12" ref={componentRef}>
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurant with online food delivery in Delhi
        </div>
      </div>
      <div
        className={
          isAtTop ? "fixed top-0 z-[9999999] bg-white w-full left-0" : ""
        }
      >
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3">
          {filterOptions.map((option) => {
            return (
              <div className="p-2 text-xs font-semibold rounded-md shadow cursor-pointer hover:bg-slate-100">
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:grid grid-cols-4 gap-3 mt-8">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
    </div>
  );
}
