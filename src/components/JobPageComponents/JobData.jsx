import React from "react";
import { LiaCoinsSolid } from "react-icons/lia";
import Image from "next/image";

const JobData = ({ jobData }) => {
  return (
    <>
      <div className="w-full flex flex-col border-b-2 px-24 py-7 space-y-3 items-start justify-start">
        <div className="flex space-x-4 items-center">
          <h1 className="text-3xl text-grayDark2 font-black">
            {jobData.Position}
          </h1>
          <div className="flex w-fit space-x-1 text-grayMedium items-center justify-start">
            <div className="w-1 h-1 rounded-full bg-gray-200" />
            <p className="text-xs font-medium">{`posted ${jobData.PostTime} days ago`}</p>
          </div>
          <div
            className={`flex space-x-1 border-2  items-center w-fit  px-1 ${
              jobData.Active
                ? "bg-green-50 border-greenMedium"
                : "bg-orange-200 border-orange-400"
            } rounded-2xl`}
          >
            <div
              className={`w-[5px] h-[5px] rounded-full ${
                jobData.Active ? "bg-green-700 " : "bg-orange-700 "
              }`}
            />
            <p
              className={`text-xs ${
                jobData.Active ? "text-green-700 " : "text-orange-700 "
              } font-semibold`}
            >
              {jobData.Active ? "Open" : "Closed"}
            </p>
          </div>
        </div>
        <div className="flex space-x-8 items-center text-grayDark text font-medium">
          <div className="flex w-fit space-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
                stroke="#5D5D5D"
                stroke-width="2.5"
              ></path>
              <path
                d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
                stroke="#5D5D5D"
                stroke-width="2.5"
              ></path>
            </svg>
            <h1>{jobData.Location}</h1>
          </div>
          <div className="flex w-fit space-x-1 items-center">
            <LiaCoinsSolid className="h-10 w-10" />
            <h1>{`$${jobData.payRangeMin} - $${jobData.payRangeMax} `}</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex border-b-2 px-24 py-7 space-x-24 items-start justify-start">
        <div className="flex flex-col space-y-2 items-start justify-center">
          <h1 className="text-grayLight2 font-medium text-xs">
            Skills Required
          </h1>
          {jobData.skillsRequired.map((skill) => (
            <div className=" flex p-[0.1rem] text-xs space-x-1 font-medium text-blueDark justify-start items-center w-fit h-fit border-2 rounded-md">
              <Image src={skill.icon} height={10} width={15} />
              <h1>{skill.Name}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-grayLight2 font-medium text-xs">
            Preffered Language
          </h1>
          <h1 className="text-grayDark2 font-bold text-sm">
            {jobData.prefferedLanguage}
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-grayLight2 font-medium text-xs">Type</h1>
          <h1 className="text-grayDark2 font-bold text-sm">{jobData.Type}</h1>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-grayLight2 font-medium text-xs">
            Years Of Experience
          </h1>
          <h1 className="text-grayDark2 font-bold text-sm">
            {`${jobData.ExperienceYears}+ Years of Experience`}
          </h1>
        </div>
      </div>
      <div className="w-full flex-col border-b-[2px] px-24 py-10 space-y-2 font-medium text-m  text-left">
        <h1 className="text-grayLight2 text-xs">About The Job</h1>
        <ol className="list-decimal pl-4 flex flex-col justify-start items-start">
          {jobData.jobDetails.description.map((description) => (
            <li className="text-gray-700 ">{description}</li>
          ))}
        </ol>
        <h1 className="text-gray-700 ">Benefits:</h1>
        <div>
          {jobData.jobDetails.benefits.map((benefit) => (
            <div className="text-gray-700 pl-4 relative flex items-center space-x-2">
              <p className="w-[5px] h-[5px] rounded-full bg-gray-700" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
        <h1 className="text-gray-700 ">Schedule:</h1>
        <div className="text-gray-700 pl-4 relative flex items-center space-x-2">
          <p className="w-[5px] h-[5px] rounded-full bg-gray-700" />
          <p>{jobData.jobDetails.schedule}</p>
        </div>
        <h1 className="text-gray-700 ">Supplemant pay types:</h1>
        <div>
          {jobData.jobDetails.PayTypes.map((payType) => (
            <div className="text-gray-700 pl-4 relative flex items-center space-x-2">
              <p className="w-[5px] h-[5px] rounded-full bg-gray-700" />
              <p>{payType}</p>
            </div>
          ))}
        </div>
        <h1 className="text-gray-700 ">
          Work Location: {jobData.jobDetails.Location}
        </h1>
      </div>
    </>
  );
};

export default JobData;
