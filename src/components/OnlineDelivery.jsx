import React, { useEffect, useRef, useState } from "react";
import restaurantChains from "../data/restaurantChains.json";
import Card from "./Card";

export default function OnlineDelivery() {
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
    <div className="max-w-[1200px] mx-auto" ref={componentRef}>
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurant with online food delivery in Delhi
        </div>
      </div>
      <div className={isAtTop ? "fixed top-0 z-[9999999] bg-white w-full left-0" : ""}>
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort by</div>
          <div className="p-3 rounded-md shadow">Filter</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card {...d} />;
        })}
      </div>
    </div>
  );
}
