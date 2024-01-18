import React from "react";
import bolaji from "../../../public/bolajisamson.jpeg";
import Image from "next/image";
import Link from "next/link";

function Bolaji() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={bolaji}
          alt="Bolaji samson"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Bolaji Samson</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Data Scientist | Operation Research Specialist | Business Analyst </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link href={"https://www.linkedin.com/in/bolaji-samson-augustine-a55737149/"} target="_blank">
            www.linkedin.com/in/bolaji-samson-augustine        </Link>
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
        <h2 className=" font-bold text-2xl my-16">About Bolaji</h2>
        <p className="  leading-8 mb-16">
        A passionate problem-solver with proven experience in research and business analysis. An enthusiast of Artificial Intelligence(AI) for driving business solutions and powering market research.
        </p>
      </div>
    </div>
  );
}

export default Bolaji;
