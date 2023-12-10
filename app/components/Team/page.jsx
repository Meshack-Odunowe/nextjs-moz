// pages/team.js
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import kene from "../../../public/kene.jpg";
import lorna from "../../../public/lorna.jpeg";
import sola from "../../../public/sola.png";
import Link from "next/link";

const Team = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos-duration="5000"
      data-aos="fade-up"
      className="max-w-1000px mx-auto">
      <h1 className="md:text-center font-bold text-purple-950 uppercase text-4xl mb-8 md:text-6xl md:py-16 pt-8">
        Our Team
      </h1>
      <div data-aos-duration="5000" data-aos="fade-up">
        <div
          data-aos-duration="5000"
          data-aos="fade-up"
          className="mx-auto justify-center items-center md:gap-16">
          <div
            data-aos-duration="5000"
            data-aos="fade-up"
            className="flex flex-col md:flex-row md:gap-16 md:my-12 justify-center md:items-center h-screen md:h-full">
            <div data-aos-duration="5000" data-aos="fade-up">
              <Image
                className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                src={kene}
                alt="Image of Dr Kene, the chief Executive Officer"
                width={200}
                height={200}
              />
            </div>
            <div data-aos-duration="5000" data-aos="fade-up">
              <p
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-900 font-extrabold text-2xl">
                Dr. Kenechukwu Ikebuaku
              </p>
              <p
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-700 font-bold mt-4">
                Founder/Chief Executive Officer
              </p>
              <blockquote
                data-aos-duration="2000"
                data-aos="fade-up"
                className="italic text-sm my-4">
                Dr Kenechukwu Ikebuaku is an award-winning development scholar,
                educator, and entrepreneur with over 12 years of experience in
                teaching, mentoring, business, and youth development. His
                expertise spans across talent development, youth
                entrepreneurship, business development and partnerships;
                recruitment; management; research; and teaching. Kenechukwu
                serves as an editorial board member of the Journal of
                Entrepreneurship in Emerging Economies. His passion is to see
                that every young African has ample opportunity to fulfill their
                dreams.
              </blockquote>
              <a
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-700 font-bold underline"
                href="https://www.linkedin.com/in/kenechukwu-ikebuaku-phd-781662154/"
                target="_">
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center my-8 md:justify-start h-screen md:h-full md:items-center">
            <div data-aos-duration="2000" data-aos="fade-up">
              <Image
                className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                src={lorna}
                alt="Image of Lorna, our chief talent officer"
                width={200}
                height={200}
              />
            </div>
            <div data-aos-duration="2000" data-aos="fade-up">
              <p
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-900 font-extrabold text-2xl">
                Prof. Lorna Holtman
              </p>
              <p
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-700 font-bold mt-4">
                Chief Talent Officer
              </p>
              <blockquote
                data-aos-duration="2000"
                data-aos="fade-up"
                className="italic text-sm my-4">
                Professor Lorna Holtman brings over 35 years of experience in
                higher education, specializing in talent development, research,
                internationalization, and project management. Her doctoral
                expertise lies in curriculum and instruction, with a primary
                research focus on mathematics and science education. Before
                joining Mozisha, Professor Holtman served as a director at the
                University of the Western Cape, recognized as one of Africa's
                top universities. She is also a Certified Reinvention
                Practitioner.
              </blockquote>
              <Link
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-700 font-bold underline"
                href="https://www.linkedin.com/in/lorna-holtman-323b09b/"
                target="_">
                LinkedIn Profile
              </Link>
            </div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="flex flex-col md:flex-row md:gap-16 md:my-12 py-4 justify-center my-8 md:justify-start h-screen md:h-full md:items-center">
            <div data-aos-duration="2000" data-aos="fade-up">
              <Image
                className="rounded-full object-cover mb-8 md:mb-0 max-w-[400px] h-[200px] w-[200px]"
                src={sola}
                alt="Image of Sola,our chief operating officer"
                width={200}
                height={200}
              />
            </div>
            <div data-aos-duration="2000" data-aos="fade-up">
              <p
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-900 font-extrabold text-2xl">
                Sola Osinoiki{" "}
              </p>
              <p
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-700 font-bold mt-4">
                Chief Operating Officer{" "}
              </p>
              <blockquote
                data-aos-duration="2000"
                data-aos="fade-up"
                className="italic text-sm my-4">
                 Sola Osinoiki is a business executive with over 25 years of
                working experience in the Tech industry. Sola has spent numerous
                years working on global HR systems implementation and consulting
                with major international organizations and fast-growing Small
                and Medium Size businesses. Sola has also been able to help
                businesses understand IT solutions including bespoke
                developments and off-the-shelf technology. Technology wise, he
                is conversant with a range of solutions in HR Technology, People
                Analytics and People Data space and has fulfilled a variety of
                roles in projects utilizing these tools as a client, implementer
                of services and technology and as a seasoned advisor and
                consultant. He is currently helping businesses solve issues
                across the HR lifecycle and enabling the use of AI in HR.
              </blockquote>
              <Link
                data-aos-duration="2000"
                data-aos="fade-up"
                className="text-purple-700 font-bold  underline   "
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
  );
};

export default Team;
