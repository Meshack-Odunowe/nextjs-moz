"use client";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { UserButton } from "@clerk/nextjs";
function ForTalents() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const handleFreelancerClick = () => {
    setSelectedSection("freelancer");
    setHasError(false);
  };

  const handleStudentClick = () => {
    setSelectedSection("student");
    setHasError(false);
  };

  const buttonText =
    selectedSection === "freelancer"
      ? "Sign up as a skilled talent"
      : selectedSection === "student"
      ? "Sign up as a student"
      : "Sign Up";

  const handleCreateAccountClick = () => {
    if (!selectedSection) {
      setHasError(true);
    } else {
      if (selectedSection === "freelancer") {
        router.push("/register");
        window.scrollTo(0, 0);
      } else if (selectedSection === "student") {
        window.scrollTo(0, 0);
        router.push("/workinprogress");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Talents</title>
        <meta
          name="description"
          content=" Join as a skilled talent or learner.  "
        />
        <link rel="canonical" href="/talents" />
      </Head>
      <div className="h-screen max-w-[800px] mx-auto ">
        <h1 className="text-center font-bold text-3xl my-8 px-4">
          Join as a skilled talent or learner.{" "}
        </h1>
        <div className="px-4 mx-auto flex flex-col justify-between md:flex-row gap-8">
          <div
            onClick={handleFreelancerClick}
            className={`border p-6 shadow-lg rounded-md ${
              selectedSection === "freelancer"
                ? "bg-purple-700 text-white"
                : "bg-purple-50"
            }`}>
            <div className="flex justify-between mx-4">
              <span
                className={`text-4xl text-center font-bold ${
                  selectedSection === "freelancer"
                    ? "text-white"
                    : "text-purple-700"
                }`}>
                <BsPersonWorkspace />
              </span>
            </div>
            <p className={`mx-4 m-8 text-lg`}>
              I am a skilled talent looking for a job.{" "}
            </p>
          </div>
          <div
            onClick={handleStudentClick}
            className={`border p-6 shadow-lg rounded-md ${
              selectedSection === "student"
                ? "bg-purple-700 text-white"
                : "bg-purple-50"
            }`}>
            <div className="flex justify-between mx-4">
              <span
                className={`text-4xl text-center font-bold ${
                  selectedSection === "student"
                    ? "text-white"
                    : "text-purple-700"
                }`}>
                <PiStudentFill />
              </span>
            </div>
            <p className={`mx-4 m-8 text-lg`}>
              I want to acquire new skills .{" "}
            </p>
          </div>
        </div>
        {hasError && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Kindly choose from the options above.
          </p>
        )}
        <div className="text-center mt-8">
          <button
            onClick={handleCreateAccountClick}
            className={`text-center mx-auto bg-purple-700 text-white px-4 py-2 rounded-md flex items-center justify-center ${
              !selectedSection ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default ForTalents;
