"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import office from "../../public/office.png";
import Link from "next/link";
import "aos/dist/aos.css";
import WhyMentorWithMozisha from "../components/AllAboutMentors/WhyMentorWithMozisha";
import { FaRegHandPointRight, FaRocket, FaRocketchat } from "react-icons/fa";
import Image from "next/image";
import MenteesTab from "../components/AllAboutMentors/MenteesTab";
const Ment = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div
      data-aos-duration="2000"
      data-aos="fade-up"
      className="px-8 max-w-[1200px] mx-auto mt-12">
      <h1 className=" text-4xl text-center font-bold  md:text-6xl pb-16">
        Welcome to Mozisha Mentorship
      </h1>{" "}
      <p className=" flex items-center  gap-x-4 text-2xl font-semibold mb-4">
        <span className="  text-purple-700">
          <FaRocket />
        </span>{" "}
        A Platform for Unlocking Potentials.    </p>
      <p className=" leading-8 tracking-wider mb-8">
      At Mozisha, we believe in the power of mentorship to transform careers and lives. Whether you're a seasoned professional eager to share your wisdom or a talented individual seeking guidance, Mozisha Mentorship is your gateway to success and fulfillment.
      </p>
      <div data-aos-duration="2000" data-aos="fade-up">
        <div data-aos-duration="2000" data-aos="fade-up" className="mb-32">
          <h2 className=" font-bold md:text-3xl mb-8">
            Ready to Begin? Choose Your Path:
          </h2>
          <Link
            href="mentorform"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-4 mb-4 hover:underline  text-purple-700  mr-4">
            <span>
              <FaRegHandPointRight />
            </span>
            I Want to Become a Mentor
          </Link>
          <Link
            href="menteeform"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-4 mb-4 hover:underline  text-purple-700  mr-4">
            <span>
              <FaRegHandPointRight />
            </span>
            I'm Looking for a Mentor
          </Link>
        </div>
      </div>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}>
        <TabList className={`flex justify-center md:justify-start`}>
          <Tab>
            <span
              className={` hover:bg-purple-700 hover:text-white ${
                selectedTab === 0 ? "text-purple-700 hover:bg-purple-700 hover:text-white " : "text-black"
              } px-12 rounded-md py-2 font-bold`}>
              Mentor
            </span>
          </Tab>
          <Tab>
            <span
              className={` hover:bg-purple-700 hover:text-white ${
                selectedTab === 1 ? "text-purple-700 hover:bg-purple-700 hover:text-white" : "text-black"
              } px-12 rounded-md py-2 font-bold`}>
              Mentee
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="flex flex-col md:flex-row mt-8 mb-16  gap-8 items-center">
            <div data-aos-duration="2000" data-aos="fade-up" className="">
              <h1 className="my-8 text-3xl md:text-4xl font-bold">
A platform for unlocking potentials              </h1>
              <p className=" leading-8 mb-8">
               By dedicating just one hour each month, you can help shape the future of young african professionals.
              </p>
            
              <button className="bg-purple-700 text-white rounded-md px-6 py-2 mb-8 hover:bg-white hover:text-purple-700 hover:font-bold">
                <Link
                  href="mentorform"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                  Become a Mentor
                </Link>
              </button>
            </div>
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="bg-purple-500 h-full  rounded-md ">
              <Image
                width={800}
                height={400}
                data-aos-duration="2000"
                data-aos="fade-left"
                className="rounded-md"
                src={office}
                alt=""
              />
            </div>
          </div>
          <div>
            <WhyMentorWithMozisha />
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <MenteesTab />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Ment;
