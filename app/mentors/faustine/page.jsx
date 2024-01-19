import React from "react";
import faustine from "../../../public/Faustine.jpg";
import Image from "next/image";
import Link from "next/link";

function Faustine() {
  return (
    <div className="  px-8 md:px-32">
      <div className="flex max-w-4xl flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={faustine}
          alt="Faustine Wabwire"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Faustine Wabwire</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title:</p>
            <p>Senior Program Officer, Global Policy & Advocacy at Bill & Melinda Gates Foundation  </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link href={"https://www.linkedin.com/in/faustine-wabwire-355b96b/"} target="_blank">
              www.linkedin.com/in/faustine-wabwire-355b96b/              </Link>
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
        <h2 className=" font-bold text-2xl my-16">About Faustine</h2>
        <p className="  leading-8 mb-16">
        Ms. Faustine Wabwire is a Senior Program Officer for Global Policy and Advocacy at the Bill and Melinda Gates Foundation. She has also served as Adjunct Professor at Eastern University, Philadelphia; and as Guest Lecturer at Georgetown University, in Washington, DC.



Ms. Wabwire has testified before the United States Congress. She educates U.S. policy makers—Congress and the White House--opinion leaders and other global influencers on the importance of effective, country-led development policy and cooperation in an increasingly interconnected world.



Her efforts have contributed to shaping various U.S. government policies and passage of several bills and legislations, including in the areas of trade, health, agriculture and nutrition, foreign aid transparency and accountability, among others. She has provided expert contributions to USAID’s Advisory Committee on Voluntary Foreign Aid, and other high-level  U.S. government task forces. 



She is a regular commentator on multimedia platforms including Voice of America.

She holds Master’s degrees in Development Management (from Ruhr University, Germany); Development Studies (from the University of the Western Cape, South Africa); and Intercultural Service, Leadership and Management (from SIT Graduate Institute, Vermont, USA). 



Ms. Wabwire has work experience in Africa, Europe and the United States. She speaks Kiswahili, English and some French. 

This global experience allows her to serve beyond her daily job. She currently serves as the Vice Chair of her Parish community of St. Augustine Catholic Church in Washington, DC, and is a committed mentor to the next generation of leaders. She believes that working in public policy is a calling, and attributes her passion to shaping public policy to her formative years in Kenya, where she was born and raised.
        </p>
      </div>
    </div>
  );
}

export default Faustine;
