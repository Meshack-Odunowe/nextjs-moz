"use client";
import { useState } from "react";
import noel from "../../public/noel.jpg";
import frederick from "../../public/fred-mentor.png";
import Victor from "../../public/victor-mentor.jpg";
import Image from "next/image";

const Explore = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      image: frederick,
      name: "Frederick",
      occupation: "Software Engineer",
    },
    {
      image: Victor,
      name: "Victor Ouko",
      occupation: "Experienced IT & Business consultant",
    },
    
    
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    window.scrollTo(0, 0);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    window.scrollTo(0, 0);

    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div data-aos-duration="2000" data-aos="fade-up">
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="flex flex-col md:grid md:grid-cols-3 md:px-4 gap-y-16 md:my-16 md:flex-wrap md:mx-auto max-w-[1240px] items-center flex-grow gap-8">
        {currentData.map((item, index) => (
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            key={index}
            className="px-4 leading-8 flex flex-col border shadow-lg py-8 rounded-lg hover:scale-110 transition-all ">
            <Image
              width={400} height={400}
              src={item.image}
              alt={item.name}
              className="rounded-md w-full h-full object-cover"
            />
            <h2 className="font-bold">{item.name}</h2>
            <p className=" text-purple-700"> {item.occupation}</p>
          </div>
        ))}
      </div>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        className="flex justify-center mb-8">
        {data.length > itemsPerPage && (
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="flex gap-8 text-white mt-12">
            <button
              onClick={handlePrevPage}
              className="bg-purple-700 px-6 py-2 rounded-md"
              disabled={currentPage === 1}>
              Prev
            </button>

            <button
              onClick={handleNextPage}
              className="bg-purple-700 px-6 py-2 rounded-md"
              disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
