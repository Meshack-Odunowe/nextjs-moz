import React from 'react'
import Image from "next/image";


function BusinessInfo() {
  return (
    <div>

    <div className="flex max-w-6xl bg-purple-100 rounded-lg p-6 shadow-xl  mx-auto flex-col md:flex-row gap-4 md:gap-24 my-24 items-center">
      <div className="md:w-1/2">
        <Image
          src='/united.jpeg'
          alt="people joining hands in solidarity"
          className="rounded-md"
          width={800}
          height={600}
        />
      </div>
      <div className="md:w-1/2 leading-8">
        <h1 className="text-center py-8 text-gray-600 font-bold text-2xl">
          Enrich Your Diversity
        </h1>
        <p className=' text-gray-500'>
          We pride ourselves in the rich diversity of our talents. Mozishans
          come from over 50 countries, 3000 ethnic groups, and 2100
          languages in Africa. We also ensure that at least 50% of all our
          talents are women. By partnering with Mozisha, you are sure to
          significantly enhance diversity, equity and inclusion in your
          organization
        </p>
      </div>
    </div>
    <div className="flex max-w-6xl bg-gray-100 rounded-lg p-6 shadow-xl mx-auto items-center flex-col md:flex-row-reverse pt-20 gap-4 md:gap-24 my-24">
      <div className="md:w-1/2">
        <Image
          src='/group3.jpg'
          alt="young people discussing"
          className="rounded-md"
          width={800}
          height={600}
        />
      </div>
      <div className="md:w-1/2 leading-8">
        <h1 className="text-center py-8 text-gray-600 font-bold text-2xl">
          Unique Training Model
        </h1>
        <p className=' text-gray-500'>
          Mozisha leverages a combination of study and on the job learning
          to nurture its talents. Through our partnership with businesses
          around the world with whom we co-design our courses, we ensure
          that our talents are trained and retrained to meet the demands of
          the constantly changing labour market.
        </p>
      </div>
    </div>
    <div className="flex max-w-6xl bg-slate-100 rounded-lg p-6 shadow-xl  mx-auto flex-col items-center md:flex-row pt-20 gap-4 md:gap-24 my-24">
      <div className="md:w-1/2">
        <Image
          src='/pexels.jpg'
          alt="young boy working"
          className="rounded-md"
          width={800}
          height={600}
        />
      </div>
      <div className="md:w-1/2 leading-8">
        <h1 className="text-center py-8 text-gray-600 font-bold text-2xl">
          A Footprint in Africa.
        </h1>
        <p className=' text-gray-500'>
          As the most youthful continent in the world, Africa is poised to
          be the major supplier of human capital in the next few decades.
          With Mozisha’s access to talents from over 50 countries in Africa,
          we are well positioned to help your organization tap into the
          future of the global labour force.
        </p>
      </div>{" "}
      </div>
    </div>  )
}

export default BusinessInfo