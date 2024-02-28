"use client"; // pages/team.js
import { useEffect } from "react";
import Image from "next/image";

import achumboro from "../../../public/achumboroataande.jpeg";
import faustine from "../../../public/Faustine.jpg";
import alicia from "../../../public/alicia.jpeg";

import kene from "../../../public/kene.jpg";
import lorna from "../../../public/lorna.jpeg";
import sola from "../../../public/sola.png";
import Link from "next/link";

const Team = () => {
 

  return (
    <>
      <div
        
        className="max-w-[768px] mx-auto">
        <h1 className="md:text-center font-bold text-gray-950 uppercase text-4xl mb-8 md:text-5xl md:py-16 pt-8">
          Executive Team
        </h1>
        <div >
          <div
            
            className="mx-auto justify-center items-center md:gap-16">
            <div
              
              className="flex flex-col md:flex-row md:gap-16 md:mb-12 justify-center md:items-center h-screen md:h-full">
              <div >
                <Image
                  className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src={kene}
                  alt="Image of Dr Kene, the chief Executive Officer"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl">
                  Dr. Kenechukwu Ikebuaku
                </p>
                <p
                  
                  className="text-gray-700 font-bold mt-4">
                  Founder/Chief Executive Officer
                </p>
                <blockquote
                  
                  className="italic text-sm my-4">
                  Dr Kenechukwu Ikebuaku is an award-winning development
                  scholar, educator, and entrepreneur with over 12 years of
                  experience in teaching, mentoring, business, and youth
                  development. His expertise spans across talent development,
                  youth entrepreneurship, business development and partnerships;
                  recruitment; management; research; and teaching. Kenechukwu
                  serves as an editorial board member of the Journal of
                  Entrepreneurship in Emerging Economies. His passion is to see
                  that every young African has ample opportunity to fulfill
                  their dreams.
                </blockquote>
                <a
                  
                  className="text-gray-700 font-bold underline"
                  href="https://www.linkedin.com/in/kenechukwu-ikebuaku-phd-781662154/"
                  target="_">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div
              
              className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center my-8 md:justify-start h-screen md:h-full md:items-center">
              <div >
                <Image
                  className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src={lorna}
                  alt="Image of Lorna, our chief talent officer"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl">
                  Prof. Lorna Holtman
                </p>
                <p
                  
                  className="text-gray-700 font-bold mt-4">
                  Chief Talent Officer
                </p>
                <blockquote
                  
                  className="italic text-sm my-4">
                  Professor Lorna Holtman brings over 35 years of experience in
                  higher education, specializing in talent development,
                  research, internationalization, and project management. Her
                  doctoral expertise lies in curriculum and instruction, with a
                  primary research focus on mathematics and science education.
                  Before joining Mozisha, Professor Holtman served as a director
                  at the University of the Western Cape, recognized as one of
                  Africa&apos;s top universities. She is also a Certified
                  Reinvention Practitioner.
                </blockquote>
                <Link
                  
                  className="text-gray-700 font-bold underline"
                  href="https://www.linkedin.com/in/lorna-holtman-323b09b/"
                  target="_">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
            <div
              
              className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center my-8 md:justify-start h-screen md:h-full md:items-center">
              <div >
                <Image
                  className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src={sola}
                  alt="Image of Sola,our chief operating officer"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl">
                  Sola Osinoiki{" "}
                </p>
                <p
                  
                  className="text-gray-700 font-bold mt-4">
                  Chief Operating Officer{" "}
                </p>
                <blockquote
                  
                  className="italic text-sm my-4">
                  Sola Osinoiki is a business executive with over 25 years of
                  working experience in the Tech industry. Sola has spent
                  numerous years working on global HR systems implementation and
                  consulting with major international organizations and
                  fast-growing Small and Medium Size businesses. Sola has also
                  been able to help businesses understand IT solutions including
                  bespoke developments and off-the-shelf technology. Technology
                  wise, he is conversant with a range of solutions in HR
                  Technology, People Analytics and People Data space and has
                  fulfilled a variety of roles in projects utilizing these tools
                  as a client, implementer of services and technology and as a
                  seasoned advisor and consultant. He is currently helping
                  businesses solve issues across the HR lifecycle and enabling
                  the use of AI in HR.
                </blockquote>
                <Link
                  
                  className="text-gray-700 font-bold  underline   "
                  href="https://www.linkedin.com/in/solaosinoiki/ 
          "
                  target="_">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        
        className="max-w-[768px] mx-auto">
        <h1 className="md:text-center font-bold text-gray-950 uppercase text-4xl  md:text-4xl md:py-16 py-24">
          Advisory Board{" "}
        </h1>
        <div >
          <div
            
            className="mx-auto justify-center items-center md:gap-16">
            <div
              
              className="flex flex-col  md:flex-row md:gap-16 md:my-24 justify-center md:items-center  md:h-full ">
              <div >
                <Image
                  className="rounded-full  object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src={achumboro}
                  alt="Image of Achumboro Ataande, a member of the advisory board"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl ">
                  Achumboro Ataande{" "}
                </p>

                <blockquote
                  
                  className="italic text-sm my-4">
                  Achumboro Ataande is a 4x entrepreneur and investor. He is an
                  attorney and an angel investor. In addition, Achumboro owns
                  and operates two companies. Uplift Communities is a company
                  that educates adults, teens, and children on financial
                  literacy, entrepreneurship, leadership, life skills, college
                  readiness, and workforce development. Achumboro invests in
                  early-stage startups in the US and Africa. He has spoken at
                  Fortune 500 companies, UN-related events, Universities, and
                  other events on entrepreneurship, leadership, and investing.
                  He also reads 200+ business, investing, and self-development
                  books per year. He has traveled to 30+ countries, and plans to
                  visit another 100+ countries in the next 20 years. Achumboro
                  Ataande is a licensed lawyer, angel investor, owns and
                  operates two companies. His Company Uplift Communities
                  educates thousands of participants yearly on entrepreneurship,
                  financial literacy, leadership, and job readiness.
                </blockquote>
                <a
                  
                  className="text-gray-700 font-bold underline"
                  href="www.linkedin.com/in/achumboroataande/"
                  target="_">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div
              
              className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center  md:justify-start h-screen md:h-full md:items-center  my-96">
              <div >
                <Image
                  className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src={faustine}
                  alt="Image of Faustine, a member of the advisory board"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl">
                  Faustine Wabwire{" "}
                </p>

                <blockquote
                  
                  className="italic text-sm my-4">
                  Ms. Faustine Wabwire is a Senior Program Officer for Global
                  Policy and Advocacy at the Bill and Melinda Gates Foundation.
                  She has also served as Adjunct Professor at Eastern
                  University, Philadelphia; and as Guest Lecturer at Georgetown
                  University, in Washington, DC. Ms. Wabwire has testified
                  before the United States Congress. She educates U.S. policy
                  makers—Congress and the White House--opinion leaders and other
                  global influencers on the importance of effective, country-led
                  development policy and cooperation in an increasingly
                  interconnected world. Her efforts have contributed to shaping
                  various U.S. government policies and passage of several bills
                  and legislations, including in the areas of trade, health,
                  agriculture and nutrition, foreign aid transparency and
                  accountability, among others. She has provided expert
                  contributions to USAID’s Advisory Committee on Voluntary
                  Foreign Aid, and other high-level U.S. government task forces.
                  She is a regular commentator on multimedia platforms including
                  Voice of America. She holds Master’s degrees in Development
                  Management (from Ruhr University, Germany); Development
                  Studies (from the University of the Western Cape, South
                  Africa); and Intercultural Service, Leadership and Management
                  (from SIT Graduate Institute, Vermont, USA). Ms. Wabwire has
                  work experience in Africa, Europe and the United States. She
                  speaks Kiswahili, English and some French. This global
                  experience allows her to serve beyond her daily job. She
                  currently serves as the Vice Chair of her Parish community of
                  St. Augustine Catholic Church in Washington, DC, and is a
                  committed mentor to the next generation of leaders. She
                  believes that working in public policy is a calling, and
                  attributes her passion to shaping public policy to her
                  formative years in Kenya, where she was born and raised.
                </blockquote>
                <Link
                  
                  className="text-gray-700 font-bold underline"
                  href="www.linkedin.com/in/faustine-wabwire-355b96b/"
                  target="_">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
            <div
              
              className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center my-8 md:justify-start  md:h-full md:items-center">
              <div >
                <Image
                  className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src={alicia}
                  alt="Image of Alicia"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl">
                  Alicia Kimiagarov{" "}
                </p>

                <blockquote
                  
                  className="italic text-sm my-4">
                  Alicia Kimiagarov turns data analytics into visualizations,
                  detailed reports, and viable action plans to solve real
                  business problems and enhance operational performance. Her
                  focus is on working efficiently and with exceptional attention
                  to detail as she conducts data analyses, create informative
                  models, build reports, and present insights to key
                  stakeholders. she considers herself a collaborative strategist
                  who enjoys working on cross-functional teams and is passionate
                  about helping others develop professionally.
                </blockquote>
                <Link
                  
                  className="text-gray-700 font-bold  underline   "
                  href="www.linkedin.com/in/aliciakimiagarov/
          "
                  target="_">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
            <div
              
              className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center my-8 md:justify-start  md:h-full md:items-center">
              <div >
                <Image
                  className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                  src="/gilbert.jpg"
                  alt="Image of Gilbert Anyetei"
                  width={200}
                  height={200}
                />
              </div>
              <div >
                <p
                  
                  className="text-gray-900 font-extrabold text-2xl">
                  Gibert Anyetei{" "}
                </p>

                <blockquote
                  
                  className="italic text-sm my-4">
                  Gilbert Anyetei currently serves as an Investment Associate at
                  Innovation Edge. Innovation Edge is an early stage
                  impact-first investment firm that invests in early stage
                  social enterprises. Gilbert is responsible for growing the IE
                  investment profile, which includes pipeline building, venture
                  building and portfolio management. Before this, he joined
                  RisCura’s alternative investment services division, which
                  focused on providing investment advisory services to private
                  equity, venture capital, infrastructure and pension funds. As
                  a Senior Associate, Gilbert was responsible for managing the
                  team of analysts and providing expert investment valuation,
                  modeling and consulting advice. Gilbert was also the principal
                  author of RisCura’s Bright Africa publication – a cutting-edge
                  research initiative focusing on Africa’s investment landscape.
                  Prior to RisCura, he obtained his Chartered Accountant
                  qualification after completing his articles at
                  PricewaterhouseCoopers in the financial services division
                  (insurance, asset management and other niche financial service
                  offerings). He studied Business Science (Specialising in
                  Finance and Accounting) and thereafter he obtained a
                  Postgraduate Diploma in Accounting at the University of Cape
                  Town. Gilbert is an experienced investment professional who is
                  passionate about supporting innovative entrepreneurs in
                  building and growing their ventures.
                </blockquote>
                <Link
                  
                  className="text-gray-700 font-bold  underline   "
                  href="https://www.linkedin.com/in/gilbert-anyetei-ca-sa-3b983b51/
          "
                  target="_">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
