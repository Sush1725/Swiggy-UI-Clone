import React from "react";

function Footer() {
  return (
    <div className="bg-slate-200 min-h-52">
      <div className="flex gap-4 justify-around">
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
      </div>
      <hr className="my-6 border-[2px] bg-red-800" />

      <h5
        style={{ font: 25 }}
        className="font-extrabold text-center text-gray-800"
      >
        At your door step
      </h5>
    </div>
  );
}

export default Footer;
