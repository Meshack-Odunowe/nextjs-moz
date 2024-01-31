// pages/apprentice.js

import Image from 'next/image';
import GetApprenticeForm from '../../components/GetApprenticeForm/GetApprenticeForm'

export const metadata = {
  title:'Get Apprentice',
description:"As your trusted growth partner, we can connect you with an apprentice for a 3-month practical journey. "
}
const Apprentice = () => {
 

  return (
    <>
      
      <div
        
        className="text-center text-3xl md:text-4xl font-bold"
      >
Be part of shaping Africa's future workforce.      </div>

      <div >
        <Image
          src="/getapprentice.jpg" 
          alt="Two people shaking hands"
          width={800}
          height={533} 
          className="mx-auto rounded-md w-[800px] py-16 px-4 my-8"
        />
        {/* <p
          
          className="py-4 leading-8 px-4 md:px-16"
        >
          Join other VC-backed companies supported by Mozisha. As your trusted
          growth partner, we specialize in providing top-notch operations,
          sales, marketing, and customer support talents tailored to your unique
          needs. We also provide data and technology talents. Our commitment is
          to empower your business with strategic resources for accelerated
          growth.
        </p> */}
      </div>

      <div className="max-w-[1000px] mx-auto px-8 h-full pb-48 shadow-2xl mb-44">
        <h3 className="text-purple-800 leading-8 text-center mt-20">
          Fill out the form below and let Mozisha be the driving force behind
          your success.
        </h3>

        <GetApprenticeForm />
      </div>
    </>
  );
};

export default Apprentice;
