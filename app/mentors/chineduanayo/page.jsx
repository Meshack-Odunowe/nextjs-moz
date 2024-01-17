import React from "react";
import chinedu from "../../../public/chineduanayo.jpeg";
import Image from "next/image";
import Link from "next/link";

function Chinedu() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={chinedu}
          alt="ChineduAnayo"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Chinedu Anayo</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Data Analyst | Business Intelligence Developer | SQL Expert | Instructor</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link href={"https://www.linkedin.com/in/chinedu-anayokafor/ "} target="_blank">
              https://www.linkedin.com/in/chinedu-anayokafor/              </Link>
            </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Availability :</p>
            <p>Available</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Years of Experience:</p>
            <p> 5yrs +</p>
          </span>
        </div>
      </div>
<div className=" border-gray-300 mt-16 border-b-8"></div>
      <div>
        <h2 className=" font-bold text-2xl my-16">About Chinedu</h2>
        <p className="  leading-8 mb-16">
        Chinedu Anayokafor is a seasoned Data Analyst and Business Intelligence Consultant with over 10 years of extensive experience spanning various industries, including Telecommunications, Technology, and Consultancy. His in-depth expertise encompasses the entire spectrum of data analysis and business intelligence, from data collection and cleansing to advanced analytics and insightful reporting.

Throughout his career, Chinedu has consistently demonstrated a keen ability to derive meaningful insights from complex datasets, providing actionable recommendations that drive informed business decisions. His analytical skills are complemented by a solid understanding of industry-specific challenges and trends, allowing him to tailor data solutions that address the unique needs of diverse sectors.

Having worked in Telecom, Tech, and Consultancy, Chinedu has honed his ability to navigate and extract value from different business landscapes. He is adept at leveraging cutting-edge technologies and methodologies to enhance data-driven decision-making processes, ultimately contributing to the strategic success of the organizations he serves.

With a proven track record of delivering impactful solutions and a commitment to staying abreast of the latest advancements in data analytics, Chinedu Anayokafor stands as a trusted professional in the field, dedicated to driving excellence through data-driven strategies.

        </p>
      </div>
    </div>
  );
}

export default Chinedu;
