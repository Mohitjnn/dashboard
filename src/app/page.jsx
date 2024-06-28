import JobOptions from "@/components/Filters/Filters";

import JobData from "@/components/JobPageComponents/JobData";
import CompanyData from "@/components/JobPageComponents/CompanyData";

import Users from "@/components/JobPageComponents/Users";

const jobData = {
  Position: "Senior Product Designer",
  PostTime: "2",
  Active: true,
  Location: "Delaware,USA",
  payRangeMin: "300k",
  payRangeMax: "400k",
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

const companyData = [
  { title: "Company Size", property: "1k-2k" },
  { title: "Type", property: "Private" },
  {
    title: "Sector",
    property: "Information Technology, Infrastructure",
  },
  { title: "Funding", property: "Bootstrapped" },
  {
    title: "Founded In",
    property: 2019,
  },
  {
    title: "Founded By",
    property: [
      {
        Name: "Scott Farquhar",
        Link: "https://www.google.com/search?q=Scott+Farquhar",
      },
      {
        Name: "Mike Cannon-Brookes",
        Link: "https://www.google.com/search?q=Mike+Cannon-Brookes",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <center>
        <section
          className="relative w-full flex justify-start px-24 items-center space-x-20 h-[7vh]"
          style={{ boxShadow: "0px 0px 2px  #897d7d" }}
        >
          <JobOptions />
        </section>
        <section className="w-full flex justify-between ">
          <div className="w-[76%] border-r-2 ">
            <JobData jobData={jobData} />
            <CompanyData companyData={companyData} />
          </div>
          <div className="w-[24%] border-l-2 bg-[#FCFCFC] flex flex-col p-6">
            <Users />
          </div>
        </section>
      </center>
    </main>
  );
}
