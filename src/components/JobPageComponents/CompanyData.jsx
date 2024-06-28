import React from "react";
import Image from "next/image";
import Link from "next/link";

const CompanyData = ({ companyData }) => {
  return (
    <>
      <div className="w-full flex flex-col border-b-2 space-y-4 px-20 py-8 items-start justify-start">
        <div className="flex space-x-4 justify-start items-center">
          <div className="h-[6vh] w-[6vh] relative">
            <Image src="/atlassian.png" fill={true} className="object-cover" />
          </div>
          <h1 className="text-grayDark2 text-m font-semibold">Atlassian</h1>
        </div>
        <div className="flex flex-wrap justify-between items-center w-2/3 space-y-4">
          {companyData.map((data, index) => (
            <div
              key={index}
              className="w-1/2 flex flex-col space-y-1 my-2 text-left"
            >
              <h1 className="text-grayLight2 text-sm font-medium">
                {data.title}
              </h1>
              {Array.isArray(data.property) ? (
                <h1 className="text-grayDark2 font-semibold text-sm">
                  {data.property.map((founder, idx) => (
                    <span key={idx}>
                      <Link
                        target="_blank"
                        className="hover:underline"
                        href={founder.Link}
                      >
                        {founder.Name}
                      </Link>
                      {idx < data.property.length - 1 && ", "}
                    </span>
                  ))}
                </h1>
              ) : (
                <h1 className="text-grayDark2 font-semibold text-sm">
                  {data.property}
                </h1>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyData;
