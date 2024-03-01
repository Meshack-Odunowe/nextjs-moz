"use client";

// pages/index.js

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ClipLoader, RingLoader } from "react-spinners";
import { FcSalesPerformance } from "react-icons/fc";
import { SiAltiumdesigner } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";
import { SiCoinmarketcap } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import img from "../../public/howtoregister.jpg";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
    phoneNumber:"",
    cvLink: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const router = useRouter();
  const [registeredEmails, setRegisteredEmails] = useState([]); // Keep track of registered emails
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_f47hszb",
        "template_offegni",
        form.current,
        "oCtQ4YXyDy5Xm4BQm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === ""
    ) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 2000,
      });
      setIsLoading(false);
      return;
    }
    // Check if the email is already registered

    if (registeredEmails.includes(formData.email)) {
      toast.error("Email is already registered.", {
        position: "top-right",
        autoClose: 2000,
      });
      setIsLoading(false);
      return;
    }

    sendEmail();

    const url =
      "https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json";

    const formDataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber:formData.phoneNumber,
      text: formData.text,
      cvLink: formData.cvLink,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSave),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
      
        router.push("/success");
       
      
        setRegisteredEmails([...registeredEmails, formData.email]);
      }else {
        toast.error("Data could not be saved.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Error:", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber:"",
      text: "",
      cvLink: "",
    });
  };

  return (
    <>
      <Head>
        <title>Talent</title>
        <meta name="description" content=" Join as a skilled talent .  " />
        <link rel="canonical" href="/register" />
      </Head>
      <div data-aos-duration="2000" data-aos="fade-up " className="mb-60">
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex mx-auto h-screen max-w-[1240px] gap-8 justify-start    leading-8 flex-col md:flex-row relative">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="mx-4 md:w-1/2 ">
            <h1 className="text-center md:text-start mt-8 mb-16 leading-10">
              <span className="text-2xl md:text-8xl font-bold mb-16 text-purple-700">
                Monetize
              </span>{" "}
              <span className="text-red-500 text-2xl md:text-8xl  font-bold">
                Your Skills
              </span>
            </h1>
            <div
              data-aos-duration="2000"
              data-aos="fade-up"
              className="mx-auto md:text-start text-center leading-10 mt-8">
              <p>
                At Mozisha, we offer dignified and fulfilling employment
                opportunities to African talents through our partnerships with
                global businesses.
              </p>
            </div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="rounded- pb-20">
            <Image
              src={img}
              width={400}
              height={400}
              alt="a young man working"
              className="max-h-[600px] px-4 md:px-0 md:w-[600px] rounded-lg object-cover mb-16"
            />
          </div>
        </div>
        <p className="text-center my-16 font-bold">Job Application Process</p>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className=" max-w-[1240px] flex-col md:flex-row mx-auto gap-8 h-screen  px-4 w-fit hidden md:flex">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className=" bg-green-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center  mb-8">
            <p className="text-9xl font-extrabold text-red-500 text-center ">
              1
            </p>
            <h1 className="text-center leading-8 text-purple-500 text-sm ">
              Fill Out the Job Application Forms
            </h1>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-blue-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-yellow-500 text-center pt-8">
              2
            </p>
            <h1 className="text-center leading-8 text-red-500 text-sm">
              {" "}
              Undertake an Interview
            </h1>
          </div>

          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-red-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-yellow-900 text-center pt-8">
              3
            </p>
            <h1 className="text-center leading-8 text-blue-500 text-sm">
              Complete Skill Assessment Tasks.
            </h1>
          </div>

          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-purple-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-500 text-center pt-8">
              4
            </p>
            <h1 className="text-center leading-8 text-red-500 text-sm">
              Get Placed and Start Earning.{" "}
            </h1>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="block md:hidden h-screen pt-16 text-center mx-4">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-900 text-center ">
              1
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Fill Out the Job Application Form.
            </h1>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="block md:hidden h-screen pt-16 text-center mx-4">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-red-600 text-center ">
              2
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Undertake An Interview.{" "}
            </h1>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="block md:hidden h-screen pt-16 text-center mx-4">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-700 text-center ">
              3
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Complete Skills Assessment{" "}
            </h1>
          </div>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="block md:hidden h-screen pt-16 text-center mx-4">
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-900 text-center ">
              4
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Get Placed and Start Earning.{" "}
            </h1>
          </div>
        </div>

        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="h-screen bg-purple-100 flex flex-col items-left py-16 mb-16">
          <h2 className="mx-auto text-left">
            Mozisha offers jobs in the following areas:
          </h2>
          <ul className="text-center max-w-lg md:mx-auto h-screen mx-4">
            <span className="flex flex-row md:items-center gap-4 mt-16">
              <SiCoinmarketcap className="text-3xl text-left text-purple-700" />
              <li> Digital Marketing</li>
            </span>
            <span className="flex flex-row md:items-center gap-4 mt-8 ">
              <FcSalesPerformance className="text-3xl text-left text-purple-700" />
              <li> Sales and Business Development</li>
            </span>

            <span className="flex flex-row md:items-center gap-4 mt-8">
              <AiOutlineDatabase className="text-3xl text-left text-purple-700" />
              <li> Data and Reporting</li>
            </span>
            <span className="flex flex-row md:items-center gap-4 mt-8">
              <SiAltiumdesigner className="text-3xl text-left text-purple-700" />
              <li> Graphic Design and Animation</li>
            </span>
            <span className="flex flex-row md:items-center gap-4 mt-8">
              <BiNetworkChart className="text-3xl text-left text-purple-700" />
              <li> Executive Assistance</li>
            </span>
          </ul>
        </div>

        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="md:max-w-lg mx-auto h-screen mt-8 px-4 my-24">
          <h2 className="text-2xl font-semibold mb-4">
            Sign up to find dignified work.
          </h2>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center mt-8">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block mb-4 text-gray-600 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block  mb-4  text-gray-600 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce] outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block  mb-4  text-gray-600 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
              <label
                htmlFor="number"
                className=" block py-4  text-gray-600  text-sm font-medium">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="youremail@example.com"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
              <label
                htmlFor="cvLink"
                className="block my-4 text-gray-600 text-sm font-medium">
                Link To CV <span className="  font-bold"> (Please ensure the link provides access to view your CV)
                </span> 
              </label>
              <input
                type="text"
                id="cvLink"
                name="cvLink"
                placeholder="Provide Google Drive CV link"
                value={formData.cvLink}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
              <label
                htmlFor="text"
                className="block my-4 text-gray-600 text-sm font-medium">
                Tell us about yourself (500 characters maximum)
              </label>
              <textarea
                id="text"
                name="text"
                placeholder="Tell us about yourself..."
                value={formData.text}
                onChange={handleInputChange}
                maxLength={500} 
                rows={4} 
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
            </div>

            {isLoading ? (
              <div>
                <ClipLoader color={"#7e22ce"} loading={isLoading} size={50} />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-700  mb-4  transition duration-300">
                Submit{" "}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
