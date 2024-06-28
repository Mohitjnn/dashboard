"use client";
import React, { useState } from "react";

const filterArray = ["Job Preview", "Applicants", "Match", "Messages"];

const JobOptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {filterArray.map((filter, index) => (
        <div>
          <button
            key={index}
            className={`text h-full content-center flex flex-col items-center ${
              index === activeIndex
                ? "text-Orange font-black"
                : "text-grayMedium font-medium"
            }`}
            onClick={() => handleClick(index)}
          >
            {filter}
            <span
              className={`absolute w-16 h-[2px] bottom-0 ${
                index === activeIndex ? "bg-Orange" : ""
              }`}
            ></span>
          </button>
        </div>
      ))}
    </>
  );
};

export default JobOptions;
