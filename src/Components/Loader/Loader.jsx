import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black flex-col">
      <svg
        className="w-40 h-40 logo-stroke mb-4"
        viewBox="0 0 95 90"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
      >
        <path
          d="M70,10
             A40,40 0 1,0 90,50
             H60
             A,5 0 1,1 50,30
             Z"
        />
      </svg>
      <h1 className="text-white text-2xl tracking-widest font-semibold">
        GaganDeep Singh
      </h1>
    </div>
  );
};

export default Loader;
