"use client";
import React, { useState } from "react";
import { PiHandCoinsLight, PiBellSimpleLight } from "react-icons/pi";
import Image from "next/image";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("jobs");
  const [open, setOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div
      className="w-full flex px-10 py-4 justify-between top-0 bg-white sticky z-10 items-center"
      style={{ boxShadow: "0px 4px 4px 0px  #D9D9D91A" }}
    >
      <div className="text px-5 py-3 bg-stone-200 text-orange-600 h-fit font-semibold content-center">
        Logo
      </div>
      <div className="w-fit  p-2 flex justify-between space-x-[9vh] text-m bg-white rounded-[7vh] border-2 items-center">
        <button
          className={`flex w-full justify-center gap-1 text space-x-4 rounded-[7vh] px-3 py-3  font-medium ${
            activeButton === "jobs"
              ? "bg-Orange text-white border-orangeBorder border-2"
              : " text-grayLight "
          }`}
          onClick={() => handleButtonClick("jobs")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            style={{ fill: activeButton === "jobs" ? "#ffffff" : "#B0B0B0" }}
          >
            <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path>
          </svg>
          Jobs
        </button>
        <div className="relative">
          <button
            className={`flex w-full justify-center gap-1 text space-x-4 rounded-[7vh] px-3 py-3  font-medium  ${
              activeButton === "messages"
                ? "bg-Orange text-white border-orangeBorder border-2"
                : "bg-white text-grayLight "
            }`}
            onClick={() => handleButtonClick("messages")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: activeButton === "messages" ? "#ffffff" : "#B0B0B0",
              }}
            >
              <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path>
            </svg>
            Messages
          </button>
          <div
            className={`absolute top-4 left-7 translate-x-1/3  ${
              activeButton === "messages"
                ? "bg-white -translate-y-1/2"
                : "bg-Orange -translate-y-1/2"
            } text-white rounded-full  `}
            style={{ width: "6px", height: "6px" }}
          />
        </div>
        <button
          className={`flex w-full justify-center gap-1 text space-x-4 rounded-[7vh] px-3 py-3  font-medium  ${
            activeButton === "payments"
              ? "bg-Orange text-white border-orangeBorder border-2"
              : " text-grayLight "
          }`}
          onClick={() => handleButtonClick("payments")}
        >
          <PiHandCoinsLight
            className="h-6 w-6"
            style={{
              fill: activeButton === "payments" ? "#ffffff" : "#B0B0B0",
            }}
          />
          Payments
        </button>
      </div>
      <div className="flex w-fit items-center space-x-6">
        <div className="relative">
          <PiBellSimpleLight className="h-8 w-8" />
          <div
            className="absolute top-1 right-1 bg-Orange -translate-y-1/2 translate-x-1/2 text-white rounded-full "
            style={{ width: "6px", height: "6px" }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-2 items-center">
            <Image src="/atlassian.png" height={30} width={30} />
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="#555555"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            name="priceRange"
            className={`absolute top-[10vh] right-8 p-2 border-2 gap-y-2 bg-white rounded-lg h-fit outline-none w-fit ${
              open ? "" : "hidden"
            }`}
          >
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
