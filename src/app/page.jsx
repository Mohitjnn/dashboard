import JobOptions from "@/components/Filters/Filters";
import { LiaCoinsSolid } from "react-icons/lia";
import Image from "next/image";

const jobData = {
  Position: "Senior Product Designer",
  PostTime: "2",
  Active: true,
  Location: "Delaware,USA",
  payRangeMin: 300000,
  payRangeMax: 400000,
  skillsRequired: [
    { Name: "Figma", icon: "/figma.png" },
    { Name: "Adobe Illustrator", icon: "/adobeIllustrator.png" },
    { Name: "Adobe XD", icon: "/adobeXd.png" },
  ],
  prefferedLanguage: "English",
  Type: "Full Time",
  ExperienceYears: 3,
  jobDetails: {
    description: [
      "Handle the UI/UX research design",
      "Work on researching on latest web applications designs & trends",
      "Work on conceptualizing and visualizing",
      "Work on creating graphics content and other graphic related works",
    ],
    benefits: ["Health Insurance", "Provident Fund"],
    schedule: "Day Shift",
    PayTypes: ["Performance bonus", "Yearly bonus"],
    Location: "In Person",
  },
};

export default function Home() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main>
      <center>
        <section
          className="relative w-full flex justify-start px-20 items-center space-x-20 h-[10vh]"
          style={{ boxShadow: "0px 0px 2px  #897d7d" }}
        >
          <JobOptions />
        </section>
        <section className="w-full flex justify-between ">
          <div className="w-[75%] border-r-2 ">
            <div className="w-full flex flex-col border-b-2 px-20 py-8 space-y-4 items-start justify-start">
              <div className="flex space-x-4 items-center">
                <h1 className="subHeading text-gray-700">{jobData.Position}</h1>
                <div className="flex w-fit space-x-1 text-gray-500 items-center">
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <p className="text-xs">{`posted ${jobData.PostTime} days ago`}</p>
                </div>
                <div
                  className={`flex space-x-2 border-2  items-center w-fit px-2 py-1 ${
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
              <div className="flex space-x-8 items-center text-gray-500 text font-semibold">
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
                      stroke="#4b5563"
                      stroke-width="2.5"
                    ></path>
                    <path
                      d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
                      stroke="#4b5563"
                      stroke-width="2.5"
                    ></path>
                  </svg>
                  <h1>{jobData.Location}</h1>
                </div>
                <div className="flex w-fit space-x-1 items-center">
                  <LiaCoinsSolid className="h-10 w-10" />
                  <h1>{`${formatter.format(
                    jobData.payRangeMin
                  )} - ${formatter.format(jobData.payRangeMax)} `}</h1>
                </div>
              </div>
            </div>
            <div className="w-full flex border-b-2 px-20 py-8 space-x-10 items-start justify-start">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <h1 className="text-gray-500 font-medium text-sm">
                  Skills Required
                </h1>
                {jobData.skillsRequired.map((skill) => (
                  <div className=" flex p-1 text-xs space-x-1 justify-start items-center w-fit h-fit border-2 rounded-lg">
                    <Image src={skill.icon} height={10} width={20} />
                    <h1>{skill.Name}</h1>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-gray-500 font-medium text-sm">
                  Preffered Language
                </h1>
                <h1 className="text-gray-700 font-bold text-m">
                  {jobData.prefferedLanguage}
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-gray-500 font-medium text-sm">Type</h1>
                <h1 className="text-gray-700 font-bold text-m">
                  {jobData.Type}
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-gray-500 font-medium text-sm">
                  Years Of Experience
                </h1>
                <h1 className="text-gray-700 font-bold text-m">
                  {`${jobData.ExperienceYears}+ Years of Experience`}
                </h1>
              </div>
            </div>
            <div className="w-full flex-col border-b-[2px] px-20 py-8 font-medium text-m text-left">
              <h1 className="text-gray-400">About The Job</h1>
              <div>
                {jobData.jobDetails.description.map((description) => (
                  <p className="text-gray-700 ">{description}</p>
                ))}
              </div>
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
          </div>
          <div className="w-[25%] border-l-2">section 2</div>
        </section>
      </center>
    </main>
  );
}
