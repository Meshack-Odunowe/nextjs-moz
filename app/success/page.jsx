/* eslint-disable react/no-unescaped-entities */
// pages/success.js
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import welcome from '../../public/handshake2.jpg';
import Image from 'next/image';

const SuccessPage = () => {
  return (
    <>
      <div className="bg-green-50 my-20 md:px-28 flex flex-col gap-8 ">
        <div>
          <h2 className="text-center text-3xl font-bold text-green-500 py-16">
            Thank you for your submission🤝
          </h2>
        </div>
        <div className="px-4 object-cover max-w-[500px] rounded-lg mb-8 mx-auto">
          <Image width={400} height={400} src={welcome} alt="Image of people shaking hands" />
        </div>
        <p className="text-purple-600 text-center font-extrabold">
          We'll be in touch soon.!
        </p>
        <div className="mx-auto">
          <Link href="/" 
           className="bg-purple-600 text-purple-50 py-2 px-4 rounded-lg w-full">
              Back to Homepage
          
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
