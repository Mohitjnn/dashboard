import React from "react";
import { IoPeopleOutline, IoEyeOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

const Users = () => {
  return (
    <>
      <div className="flex space-x-4 w-full">
        <button className="flex w-full justify-center h-fit space-x-2 rounded-lg items-center p-2 bg-OrangeLight border-[1px] border-Orange text-sm font-medium text-Orange">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
              stroke="#DC4A2D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>

          <span> Delete Job </span>
        </button>
        <button className="flex w-full justify-center h-fit space-x-2 rounded-lg items-center p-2 bg-Orange border-[1px] border-orangeBorder text-sm font-medium text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "#ffffff" }}
          >
            <path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
          </svg>
          <span> Edit Job </span>
        </button>
      </div>
      <div className="flex flex-col items-center px-3">
        <div className="flex border-b-2 px-2 py-6 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <IoPeopleOutline
              style={{
                height: 20,
                width: 20,
                color: "#3D3D3D",
              }}
            />
            <h1 className="text-sm font-semibold text-grayDark2">Applicants</h1>
          </div>
          <h1 className="text-m font-bold text-grayDark2">400</h1>
        </div>
        <div className="flex border-b-2 px-2 py-6 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <BsPersonCheck
              style={{
                height: 20,
                width: 20,
                color: "#3D3D3D",
              }}
            />
            <h1 className="text-sm font-semibold text-grayDark2">Matches</h1>
          </div>
          <h1 className="text-m font-bold text-grayDark2">100</h1>
        </div>
        <div className="flex border-b-2 px-2 py-6 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <BiMessage
              style={{
                height: 20,
                width: 20,
                color: "#3D3D3D",
              }}
            />
            <h1 className="text-sm font-semibold text-grayDark2">Messages</h1>
          </div>
          <h1 className="text-m font-bold text-grayDark2">147</h1>
        </div>
        <div className="flex px-2 py-6 h-full justify-between items-center w-full">
          <div className="w-fit space-x-2 flex items-center ">
            <IoEyeOutline
              style={{
                height: 20,
                width: 20,
                color: "#3D3D3D",
              }}
            />
            <h1 className="text-sm font-semibold text-grayDark2">Views</h1>
          </div>
          <h1 className="text-m font-bold text-grayDark2">800</h1>
        </div>
      </div>
    </>
  );
};

export default Users;
