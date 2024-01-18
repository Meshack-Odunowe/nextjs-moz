import React from "react";
import frederick from "../../../public/fred-mentor.png";
import Image from "next/image";
import Link from "next/link";

function Fred() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={frederick}
          alt="Frederick Ohen"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Frederick Ohen</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Senior iOS Engineer </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link href={"https://www.linkedin.com/in/frederickohen/"} target="_blank">
              www.linkedin.com/in/frederickohen/              </Link>
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
        <h2 className=" font-bold text-2xl my-16">About Frederick</h2>
        <p className="  leading-8 mb-16">
          “Frederick is a dedicated and experienced software engineer,
          specializing in iOS development. His career pivoted from the field of
          pharmacy to computer science after graduating from the University of
          Houston. Frederick’s passion for technology led him on a journey of
          self-discovery and reskilling, which culminated in his attending a
          specialized bootcamp for iOS development. With a firm grasp of iOS
          development, Frederick relocated to Silicon Valley, the global hub for
          innovation, where he secured his first major role as an iOS engineer.
          Over the past seven years, he has not only honed his skills in iOS
          development but also gained invaluable experience working with
          large-scale consumer applications. Frederick’s expertise lies in his
          ability to craft seamless user experiences and his understanding of
          the intricate nuances of consumer behavior. His work has enabled
          businesses to engage more effectively with their customers and drive
          significant growth. Now, Frederick is eager to leverage his knowledge
          and robust expertise to give back, specifically by investing in
          African startups. He believes in the immense potential these ventures
          hold and is keen on contributing to the burgeoning tech scene on the
          continent.
        </p>
      </div>
    </div>
  );
}

export default Fred;
