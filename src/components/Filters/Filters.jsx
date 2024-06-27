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
        <button
          key={index}
          className={`text ${
            index === activeIndex
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500"
          } h-full content-center`}
          onClick={() => handleClick(index)}
        >
          {filter}
        </button>
      ))}
    </>
  );
};

export default JobOptions;
