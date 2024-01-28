import React from "react";
import ruona from "../../../public/Ruona.jpeg";
import Image from "next/image";
import Link from "next/link";

function Ruona() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={ruona}
          alt="Ruona Ouko"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Ruona Dibie</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Software Engineeer</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link
                href={"https://www.linkedin.com/in/ruona-dibie-b3738757/"}
                target="_blank">
"www.linkedin.com/in/ruona-dibie-b3738757/"              </Link>
            </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Availability :</p>
            <p>Available</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Years of Experience:</p>
            <p>5yrs +</p>
          </span>
        </div>
      </div>
      <div className=" border-gray-300 mt-16 border-b-8"></div>
      <div>
        <h2 className=" font-bold text-2xl my-16">About Ruona</h2>
        <p className="  leading-8 mb-16">
        I was born and raised in Nigeria before moving the US. I am currently a Software Engineer at LinkedIn. I've been in the Tech Industry for over four years now and I absolutely love it. I am very big on sports, fitness and the outdoors. I look forward to working with you all to learn and grow together.
        </p>

        
      </div>
    </div>
  );
}

export default Ruona;
