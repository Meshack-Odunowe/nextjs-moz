'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import mainImage2 from '../public/group.jpg';
import Head from 'next/head';
import Hero from './components/hero/page';
import HowItWorks from './components/howitworks/page';
import Testimonial from './components/testimonial/page';
import FrequentlyAskedQuestions from './components/frequentlyAskedQuestions/page';
import NewsletterSubscribe from './components/NewsletterSubscribe';
function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {

    AOS.init();
    AOS.refresh();

    window.scrollTo(0, 0);
  }, []);

  const wip = () => {
    router.push("/workinprogress"); 
  };

  const handleSignUp = () => {
    router.push("/signup"); // 
  };

  const handleGetStartedClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
  <title>Home</title>
  <meta
    name="Home"
    content=" Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge Business Growth.  "
  />
  <link rel="canonical" href="/home" />
</Head>

      <div>
        <div className="flex justify-between items-center gap-16 leading-8  max-w-[1240px] mx-auto flex-col lg:flex-row px-4">
          <div>
            <h1 className="md:text-6xl text-4xl leading-[60px] font-bold md:leading-[80px] flex items-center justify-center  text-gray-700   md:text-start  ">
              Unlocking African Talents for Global Success
            </h1>
            <p className="mt-8 text-[18px] text-gray-500 md:text-start ">
              Welcome to Mozisha, Africa's Skills Factory.
            </p>
            <div className="flex flex-col lg:flex-row mt-16   md:gap-8">
              {' '}
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold w-full">
                  <Link href="/business"
                    onClick={handleGetStartedClick}>For Businesses
                  </Link>
                </button>
                <p className="text-sm text-center mb-16">
                  Boost your Business with Top Talents
                </p>
              </div>
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold w-full">
                  <Link href="/talents" onClick={handleGetStartedClick}>For Talents
                  </Link>
                </button>
                <p className="text-sm text-center mb-16">
                  Access In-Demand Skills and Jobs
                </p>
              </div>
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full">
                  <Link href="/mentors" onClick={handleGetStartedClick}>For Mentors
                  </Link>
                </button>
                <p className="text-sm text-center mb-16">
                  Guide Emerging Talents to Success
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] ">
            <Image
              src={mainImage2}
              alt="main image, showing a diverse group of people smiling."
              className="rounded-lg h-[400px] md:h-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
        <p className="mx-auto max-w-[1240px] text-gray-500 ml-28 mb-8 md:my-8">
        </p>
      </div>
      <Hero />
      <HowItWorks />
      <Testimonial />
      <FrequentlyAskedQuestions /> 
      <NewsletterSubscribe/>
    </>
  );
}

export default Home;
