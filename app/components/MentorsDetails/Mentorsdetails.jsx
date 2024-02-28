'use client'
import { FaDesktop } from "react-icons/fa";

import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Details() {
  function handleGetStartedClick() {
    window.scrollTo(0, 0);
  }
 
  return (
    <div className="my-24">
      
      <p className=" text-center leading-8 my-8">
        Discover mentors specializing in product fields worldwide.
      </p>

      <div
        
        className="flex flex-col md:grid md:grid-cols-2  gap-16 mt-12">
        <div
          
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div >
            <FaDesktop className="text-3xl text-teal-700" />
          </div>
          <div >
            <h2 className="md:text-2xl font-extrabold text-purple-500">
              Design
            </h2>
            <p className="text-teal-700 font-bold">Creative problem-solving</p>
          </div>
        </div>

        <div
          
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <ImStatsBars className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">Data</h2>
            <p className="text-teal-700 font-bold">
              Extracting valuable insights and knowledge from data .
            </p>
          </div>
        </div>
      
        <div
          
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <ImStatsBars className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">
International Development            </h2>
            <p className="text-teal-700 font-bold">
            Fostering sustainable economic growth.
            </p>
          </div>
        </div>
        <div
          
          className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <ImStatsBars className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="md:text-2xl font-extrabold text-purple-700">
Sales and Marketing            </h2>
            <p className="text-teal-700 font-bold">
            Promote, sell, and distribute products or services .
            </p>
          </div>
        </div>
      </div>
      <button className=" text-center font-bold my-8 bg-purple-700 text-white px-6 py-2 rounded-md cursor-pointer hover:underline">
        <Link href="explore" onClick={handleGetStartedClick}>
          Explore Mentors
        </Link>{" "}
      </button>
    </div>
  );
}

export default Details;
