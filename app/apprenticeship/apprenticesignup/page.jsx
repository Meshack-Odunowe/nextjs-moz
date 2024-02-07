"use client";

// pages/index.js

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ClipLoader, RingLoader } from "react-spinners";


import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ApprenticeshipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    motivation: "",
    selectedSkill: "",
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
      "service_w6v0yit",
      "template_gvgru2h",
      form.current,
      "KeJ5uXs7qlFjIHPHL"
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
      selectedSkill: formData.selectedSkill,
      motivation:formData.motivation
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

        toast.onChange(() => {
          // Redirect to the "/success" page
          router.push("/success");
        });

        setRegisteredEmails([...registeredEmails, formData.email]);
      } else {
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
      selectedSkill: "",
      motivation:"",
    });
  };

  return (
    <>
      <Head>
        <title>Talent</title>
        <meta name="description" content=" Join as a skilled talent .  " />
        <link rel="canonical" href="/register" />
      </Head>
      <div className="mb-60">
        <div className=" flex flex-col gap-10 lg:flex-row items-center justify-center lg:px-20 my-10">
          <div className="mx-4 md:w-1/2 ">
            <h1 className="text-center md:text-start mt-8 mb-4 leading-10">
              <span className="text-2xl md:text-5xl font-bold mb-16 mr-4 text-purple-700">
                Why 
              </span>{" "}
              <span className="text-red-500 text-2xl md:text-5xl  font-bold">
                 Mozisha Apprenticeship?
              </span>
            </h1>
            <div className="mx-auto md:text-start text-center leading-10 mt-8">
              <p>
                Gain skills, get experience, and secure your future. We're
                bridging the gap between talent and opportunity.
              </p>
            </div>
          </div>
          <div className="rounded- pb-20">
            <Image
              src="/apprenticeship.jpg"
              width={400}
              height={400}
              alt="a young man working"
              className="max-h-[600px] px-4 md:px-0 md:w-[600px] rounded-lg object-cover "
            />
          </div>
        </div>

        <div className="md:max-w-lg mx-auto h-screen mt-8 px-4 ">
          <h2 className="text-2xl font-semibold mb-4">
            Sign up as an apprentice.
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
                placeholder="John Doe"
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
 <div className="py-8">
          <label htmlFor="selectedSkill">Skill</label>
          <select
            name="selectedSkill"
            id="selectedSkill"
            className="border focus-visible:bg-purple-100 w-full pl-5"
            value={formData.selectedSkill}
            onChange={handleInputChange}
          >
            <option className=" py-4 my-8  bg-white" value="">Select a skill</option>
            <option value="International development" className=" bg-white">International development</option>
            <option value="Software development">Sales and Marketing.</option>
            <option value="Data">Data</option>
            <option value="Designs">Designs</option>
          </select>
        </div>
              <label
                htmlFor="text"
                className="block my-8 text-gray-600 text-sm font-medium">
                What's your motivation?{" "}
              </label>
              <textarea
                id="motivation"
                name="motivation"
                placeholder="Tell us why you want to be an apprentice.."
                value={formData.motivation}
                onChange={handleInputChange}
                maxLength={500} // Set a maximum character limit
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

export default ApprenticeshipForm;
