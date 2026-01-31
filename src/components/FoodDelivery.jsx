import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

export default function FoodDelivery() {
  const cities = [
    "Order food online in Gurgaon",
    "Order food online in Ranchi",
    "Order food online in Prayagraj",
    "Order food online in Delhi",
    "Order food online in Thane",
    "Order food online in Jammu",
    "Order food online in Gangtok",
    "Order food online in Noida",
    "Order food online in Chandighar",
    "Order food online in Gurgaon",
    "Order food online in Kolkata",
    "Order food online in Gurgaon",
    "Order food online in Pune",
    "Order food online in Hyderabad",
    "Order food online in Bangaluru",
    "Order food online in Gurgaon",
    "Order food online in Chennai",
    "Order food online in Greater Noida",
    "Order food online in Ghazipur",
    "Order food online in Gurgaon",
    "Order food online in Varanasi",
    "Order food online in Itanagar",
    "Order food online in Meerut",
    "Order food online in Kochi",
  ];

  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded((prev) => !prev);
  };
  const visibleItems = expanded ? cities : cities.slice(0, 8);

  return (
    <div className="max-w-[1100px] mx-auto px-4 my-14">
      <h2 className="text-2xl font-bold mb-6">Cities with food delivery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {visibleItems.map((city) => (
          <div
            key={city}
            className="text-sm font-bold text-slate-600 text-center py-4  border-[1px] border-slate-300 rounded-xl hover:text-slate-900 cursor-pointer"
          >
            {city}
          </div>
        ))}
      </div>
      <div
        onClick={toggle}
        className="flex items-center justify-center gap-1 mt-4  text-orange-500 cursor-pointer"
      >
        <span className="text-sm font-extrabold">
          {expanded ? "Show Less" : "Show More"}
        </span>
        <RxCaretDown
          Size={25}
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </div>
    </div>
  );
}
