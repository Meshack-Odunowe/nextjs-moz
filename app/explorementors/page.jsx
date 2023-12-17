'use client'
import { useState } from 'react';
import noel from '../../public/noel.jpg';
import frederick from '../../public/fred-mentor.png';
import Victor from '../../public/victor-mentor.jpg';
import Image from 'next/image';

const Explore = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      image: frederick,
      name: "John Doe",
      occupation: "Software Engineer",
      yearsOfExperience: 5,
    },
    {
      image: Victor,
      name: "Alice Johnson",
      occupation: "Frontend Developer",
      yearsOfExperience: 2,
    },
    {
      image: noel,
      name: "Bob Smith",
      occupation: "UX Designer",
      yearsOfExperience: 4,
    },
    {
      image: noel,
      name: "Emily White",
      occupation: "Data Scientist",
      yearsOfExperience: 6,
    },
    {
      image: noel,
      name: "David Lee",
      occupation: "Product Manager",
      yearsOfExperience: 7,
    },
    {
      image: noel,
      name: "Laura Wilson",
      occupation: "Graphic Designer",
      yearsOfExperience: 3,
    },
    {
      image: noel,
      name: "Michael Brown",
      occupation: "Backend Developer",
      yearsOfExperience: 5,
    },
    {
      image: noel,
      name: "Sophia Davis",
      occupation: "Network Administrator",
      yearsOfExperience: 4,
    },
    {
      image: noel,
      name: "Olivia Harris",
      occupation: "Marketing Specialist",
      yearsOfExperience: 2,
    },
    {
      image: noel,
      name: "Ethan Hall",
      occupation: "UI/UX Designer",
      yearsOfExperience: 3,
    },
    {
      image: noel,
      name: "Isabella Martinez",
      occupation: "Mobile App Developer",
      yearsOfExperience: 4,
    },
    // Add more data objects as needed
  ];


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    window.scrollTo(0,0)
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    window.scrollTo(0,0)

    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div data-aos-duration="2000"
              data-aos="fade-up">
      <div data-aos-duration="2000"
              data-aos="fade-up" className='flex flex-col md:grid md:grid-cols-3 md:px-4 gap-y-16 md:my-16 md:flex-wrap md:mx-auto max-w-[1240px] items-center flex-grow gap-8'>
        {currentData.map((item, index) => (
          <div data-aos-duration="2000"
              data-aos="fade-up" key={index} className='px-4 leading-8 flex flex-col border shadow-lg py-8 rounded-lg hover:scale-110 transition-all '>
            <Image width={400} src={item.image} alt={item.name} className='rounded-md w-full h-full object-cover' />
            <h2 className='font-bold'>{item.name}</h2>
            <p>Occupation: {item.occupation}</p>
            <p>Years of Experience: {item.yearsOfExperience} years</p>
          </div>
        ))}
      </div>
      <div data-aos-duration="2000"
              data-aos="fade-up" className='flex justify-center mb-8'>
        {data.length > itemsPerPage && (
          <div data-aos-duration="2000"
              data-aos="fade-up" className='flex gap-8 text-white mt-12'>
            <button onClick={handlePrevPage} className="bg-purple-700 px-6 py-2 rounded-md" disabled={currentPage === 1}>
              Prev
            </button>
          
            <button onClick={handleNextPage} className="bg-purple-700 px-6 py-2 rounded-md" disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
