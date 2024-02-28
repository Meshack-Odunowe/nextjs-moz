import Image from "next/image"
import M from "../../../public/m.png";
import Link from "next/link";
import Arrow from '../../../public/arrow.png'


import locked from "../../../public/locked.jpg";
import locked1 from "../../../public/leadership.webp";
import locked2 from "../../../public/leadership.webp";
import support from "../../../public/network.jpeg";
import support1 from "../../../public/legacy.jpeg";
import network1 from "../../../public/relevance.jpeg";
import Details from "./Details";
function WhyMentorWithMozisha() {
  return (
    <div>
       <div >
           
            <div
              
              className=" bg-teal-100 relative flex-col md:flex-row  p-8  flex gap-8 items-center ">
              <div >
                <div
                  
                  className="  max-w-[600px] justify-center items-center shadow-md rounded-md bg-green-300  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-green-600 p-4 rounded-lg text-white">
                      Shape Careers{" "}
                    </h4>
                    <p className=" ">
                      Your guidance can make a lasting impact on someone's
                      professional journey. Help talents navigate challenges,
                      set goals, and unlock their full potential.
                    </p>
                  </div>
                </div>
                <div
                  
                  className="  max-w-[600px] justify-center items-center shadow-md bg-yellow-100 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-red-800 p-4 rounded-lg text-white">
                      Share Wisdom{" "}
                    </h4>
                    <p className=" ">
                      Your experiences are a treasure trove of insights. Mozisha
                      Mentorship is your platform to share these invaluable
                      lessons, providing mentees with a unique perspective on
                      the realities of the professional world.
                    </p>
                  </div>
                </div>
                <div
                  
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-gray-100 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-gray-800 p-4 rounded-lg text-white">
                      Inspire Growth{" "}
                    </h4>
                    <p className=" ">
                      Witness the transformation of a promising talent into a
                      thriving professional. Your mentorship can be the spark
                      that fuels their success.
                    </p>
                  </div>
                </div>
              </div>
              <Image width={400} height={400}
                
                src={M}
                alt="mentorship"
                className=" object-cover h-96 "
              />
            </div>
      </div>
      


      <div >
            <h2 className=" font-bold text-2xl mb-8 text-center my-24">
              Unlock Personal and Professional Growth{" "}
            </h2>

            <div
              
              className=" bg-yellow-100 relative p-8  flex  flex-col ">
              <div
                
                className=" flex flex-col  gap-8 md:flex-row justify-center items-center my-16">
                <div
                  
                  className="  max-w-[600px]  shadow-2xl rounded-md bg-green-300  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-green-600 p-4 rounded-lg text-white">
                      Enhance Leadership Skill{" "}
                    </h4>
                    <p className=" ">
                      Mentorship is not just about guiding; it's about leading.
                      Sharpen your leadership skills as you guide talents
                      through their career journeys.
                    </p>
                  </div>
                </div>
                <Image width={400} height={400}
                  
                  src={locked1}
                  alt="mentor"
                  className="hidden md:block w-64 h-56 object-cover"
                />
              </div>
              <div
                
                className="flex flex-col  gap-8 md:flex-row-reverse justify-center items-center my-16">
                <div
                  
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-amber-200 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-red-800 p-4 rounded-lg text-white">
                      Expand your Network{" "}
                    </h4>
                    <p className=" ">
                      Connect with a diverse community of mentors and mentees.
                      Mozisha Mentorship opens doors to new relationships,
                      collaborations, and opportunities.
                    </p>
                  </div>
                </div>
                <Image width={400} height={400}
                  
                  src={support}
                  alt=""
                  className="hidden md:block w-64 h-56"
                />
              </div>
              <div
                
                className="flex flex-col  gap-8 md:flex-row justify-center items-center my-16">
                <div
                  
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-gray-100 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-gray-800 p-4 rounded-lg text-white">
                      Stay Relevant{" "}
                    </h4>
                    <p className=" ">
                      Engaging with emerging talents keeps you updated on
                      industry trends and fresh perspectives. Stay ahead in your
                      field by staying connected to the next generation of
                      professionals.
                    </p>
                  </div>
                </div>
                <Image width={400} height={400}
                  
                  src={network1}
                  alt=""
                  className="hidden md:block w-64 h-56 object-cover"
                />
              </div>
            </div>
            <div >
              <h3 className=" font-bold text-2xl mb-8 text-center my-24">
                Foster a Legacy of Success
              </h3>
            </div>
            <div
              
              className=" bg-yellow-100 relative p-8  flex  flex-col ">
              <div
                
                className=" flex flex-col  gap-8 md:flex-row justify-center items-center my-16">
                <div
                  
                  className="  max-w-[600px]  shadow-2xl rounded-md bg-green-300  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-green-600 p-4 rounded-lg text-white">
                      Leave Your Mark{" "}
                    </h4>
                    <p className=" ">
                      Your mentorship contributes to a legacy of success. Be a
                      part of Mozisha's mission to nurture talents, preparing
                      them for the challenges and triumphs of the professional
                      world.
                    </p>
                  </div>
                </div>
                <Image  width={400} height={400}
                  
                  src={locked2}
                  alt="mentor"
                  className="hidden md:block w-64 h-56 object-cover"
                />
              </div>
              <div
                
                className="flex flex-col  gap-8 md:flex-row-reverse justify-center items-center my-16">
                <div
                  
                  className="  max-w-[600px] justify-center items-center shadow-2xl bg-amber-200 rounded-md p-4text-white  gap-12 p-4 mb-8">
                  <div
                    
                    className="mb-8 ">
                    <h4 className=" text-2xl font-semibold mb-4 bg-red-800 p-4 rounded-lg text-white">
                      Build a Professional Legacy{" "}
                    </h4>
                    <p className=" ">
                      Your influence extends beyond your individual successes.
                      Mozisha Mentorship allows you to contribute to the
                      collective success of a new generation of professionals,
                      leaving a lasting legacy.
                    </p>
                  </div>
                </div>
                <Image width={400} height={400}
                  
                  src={support1}
                  alt=""
                  className="hidden md:block w-64 h-56 object-cover"
                />
              </div>
            </div>

            <div >
              <h5 className=" text-2xl font-bold text-center my-16">
                Join Mozisha Mentorship - Where Your Expertise Shapes the Future{" "}
              </h5>
              <div
                
                className=" flex flex-col md:flex-row gap-8 mb-8">
                <div
                  
                  className=" rounded-xl border p-4 shadow-xl relative">
                  <Image width={400} height={400}
                    
                    src={Arrow}
                    alt="arrow"
                    className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
                  />

                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Sign Up
                  </p>
                  <p className=" font-semibold tracking-wide leading-8">
                    Share your expertise, interests, and availability. Let us
                    match you with a mentee ready to benefit from your guidance.
                  </p>
                </div>
                <div
                  
                  className="relative rounded-xl border p-4 shadow-xl">
                  <Image width={400} height={400}
                    
                    src={Arrow}
                    alt="arrow"
                    className="hidden md:block w-12 h-4 md:absolute md:-right-8 md:top-2/4"
                  />
                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Guide talents{" "}
                  </p>
                  <p className=" font-semibold tracking-wide leading-8">
                    Engage in meaningful conversations, share your experiences,
                    and provide valuable insights. Watch your mentees grow into
                    confident, capable professionals.
                  </p>
                </div>
                <div
                  
                  className="relative rounded-xl border p-4 shadow-xl">
                  <p className=" text-red-600 px-6 py-2 border-red-300 border w-fit rounded-xl">
                    Be Rewarded{" "}
                  </p>

                  <p className=" font-semibold tracking-wide leading-8">
                    The satisfaction of seeing your mentees succeed is
                    unparalleled. But we don't stop there; receive recognition,
                    build your network, and be a part of a community making a
                    difference.
                  </p>
                </div>
              </div>
            </div>

            <div >
              <p className="flex flex-row items-center gap-4 text-2xl font-bold tracking-wide leading-8 mt-16 mb-8">
                <span>{/* <FaGraduationCap /> */}</span>
                <span>
                  Ready to Ignite Success? Become a Mozisha Mentor Today!
                </span>
              </p>
              <p className=" leading-8 max-w-3xl mb-8">
                Your knowledge can transform lives. Sign up as a Mozisha Mentor
                today and be the guiding force behind the next generation of
                professionals.
              </p>
              <p className="mb-12">
                <Link
                  href="mentorform"
                  className=" text-purple-700 underline mr-4"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}>
                  Apply Now
                </Link>{" "}
                and embark on a rewarding journey of mentorship!{" "}
              </p>
            </div>
          </div>
    </div>
  )
}

export default WhyMentorWithMozisha
