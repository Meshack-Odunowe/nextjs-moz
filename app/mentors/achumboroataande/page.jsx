import React from "react";
import achumboro from "../../../public/achumboroataande.jpeg";
import Image from "next/image";
import Link from "next/link";
function Achumboro() {
  return (
    <div className="  px-8 md:px-32 ">
      <div className="flex max-w-lg flex-col md:flex-row gap-8 justify-center items-start ">
        <Image
          width={200}
          height={100}
          src={achumboro}
          alt="Alicia"
          className=" rounded-full"
        />
        <div className=" leading-8">
          <h1 className=" text-2xl font-bold">Achumboro Ataande</h1>
          <span className="flex  gap-4">
            <p className=" font-semibold">Job title :</p>
            <p> Attorney | Entrepreneur </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> LinkedIn:</p>
            <p className=" text-blue-500 underline">
              <Link className=" max-w-xl flex-wrap text-sm"
                href={"https://www.linkedin.com/in/achumboroataande/"}
                target="_blank">
                www.linkedin.com/in/achumboroataande/
              </Link>
            </p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Availability :</p>
            <p>Available</p>
          </span>
          <span className="flex flex-row gap-4">
            <p className=" font-semibold"> Years of Experience:</p>
            <p>5yrs +</p>
          </span>
        </div>
      </div>
      <div className=" border-gray-300 mt-16 border-b-8"></div>
      <div>
        <h2 className=" font-bold text-2xl my-16">About Achumboro</h2>
        <p className="  leading-8 mb-16">
          Achumboro Ataande is a 4x entrepreneur and investor. He is an attorney
          and an angel investor. In addition, Achumboro owns and operates two
          companies. Uplift Communities is a company that educates adults,
          teens, and children on financial literacy, entrepreneurship,
          leadership, life skills, college readiness, and workforce development.
          Achumboro invests in early-stage startups in the US and Africa. He has
          spoken at Fortune 500 companies, UN-related events, Universities, and
          other events on entrepreneurship, leadership, and investing. He also
          reads 200+ business, investing, and self-development books per year.
          He has traveled to 30+ countries, and plans to visit another 100+
          countries in the next 20 years. Achumboro Ataande is a licensed
          lawyer, angel investor, owns and operates two companies. His Company
          Uplift Communities educates thousands of participants yearly on
          entrepreneurship, financial literacy, leadership, and job readiness.
        </p>
      </div>

    </div>
  );
}

export default Achumboro;
