// pages/Teams.js

import ExpandableText from "../components/ExpandableText";
import Image from "next/image";
import Link from "next/link";
function Teams() {
  return (
    <>
      <div className="bg-slate-50 min-h-screen py-10">
        <h1 className="md:text-center font-bold text-gray-950 uppercase text-3xl mb-8 md:text-5xl md:py-16 text-center pt-8">
          Executive Team
        </h1>
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Dr. Kenechukwu Ikebuaku
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  Founder/Chief Executive Officer
                </h2>
                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText text="Dr Kenechukwu Ikebuaku is an award-winning development scholar, educator, and entrepreneur with over 12 years of experience in teaching, mentoring, business, and youth development. His expertise spans across talent development, youth entrepreneurship, business development and partnerships; recruitment; management; research; and teaching. Kenechukwu serves as an editorial board member of the Journal of Entrepreneurship in Emerging Economies. His passion is to see that every young African has ample opportunity to fulfill their dreams." />
                <div className="flex items-center">
                  <a
                    className="text-gray-700 font-bold underline"
                    href="https://www.linkedin.com/in/kenechukwu-ikebuaku-phd-781662154/"
                    target="_">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/kene.jpg"
                  width={400}
                  height={400}
                  alt="CEO Image"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>
            {/* Sola Osinoiki */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Sola Osinoiki
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  Chief Operating Officer
                </h2>
                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText text="Sola Osinoiki is a business executive with over 25 years of working experience in the Tech industry. Sola has spent numerous years working on global HR systems implementation and consulting with major international organizations and fast-growing Small and Medium Size businesses. Sola has also been able to help businesses understand IT solutions including bespoke developments and off-the-shelf technology. Technology wise, he is conversant with a range of solutions in HR Technology, People Analytics and People Data space and has fulfilled a variety of roles in projects utilizing these tools as a client, implementer of services and technology and as a seasoned advisor and consultant. He is currently helping businesses solve issues across the HR lifecycle and enabling the use of AI in HR." />
                <div className="flex items-center">
                  <Link
                    className="text-gray-700 font-bold underline"
                    href="https://www.linkedin.com/in/solaosinoiki/"
                    target="_">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/sola.png"
                  width={400}
                  height={400}
                  alt="Image of Sola,our chief operating officer"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>
            {/* Prof. Lorna Holtman */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Prof. Lorna Holtman
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  Chief Talent Officer
                </h2>
                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText text="Professor Lorna Holtman brings over 35 years of experience in higher education, specializing in talent development, research, internationalization, and project management. Her doctoral expertise lies in curriculum and instruction, with a primary research focus on mathematics and science education. Before joining Mozisha, Professor Holtman served as a director at the University of the Western Cape, recognized as one of Africa's top universities. She is also a Certified Reinvention Practitioner." />
                <div className="flex items-center">
                  <Link
                    className="text-gray-700 font-bold underline"
                    href="https://www.linkedin.com/in/lorna-holtman-323b09b/"
                    target="_">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/lorna.jpeg"
                  width={400}
                  height={400}
                  alt="Chief Talent officer"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100  min-h-screen py-10">
        <h1 className="md:text-center text-center font-bold text-gray-950 uppercase text-3xl mb-8 md:text-5xl md:py-16 pt-8">
          Advisory Board{" "}
        </h1>
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
            
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Achumboro Ataande{" "}
                </p>

                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText
                  text="Achumboro Ataande is a 4x entrepreneur and investor. He is an
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
                  financial literacy, leadership, and job readiness."
                />
                <div className="flex items-center">
                  <a
                    className="text-gray-700 font-bold underline"
                    href="https://www.linkedin.com/in/achumboroataande/"
                    target="_">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/achumboroataande.jpeg"
                  width={400}
                  height={400}
                  alt="image of Achumboro"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Faustine Wabwire{" "}
                </p>

                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText
                  text="Ms. Faustine Wabwire is a Senior Program Officer for Global
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
                  formative years in Kenya, where she was born and raised."
                />
                <div className="flex items-center">
                  <Link
                    className="text-gray-700 font-bold underline"
                    href="https://www.linkedin.com/in/faustine-wabwire-355b96b/"
                    target="_">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/Faustine.jpg"
                  width={400}
                  height={400}
                  alt="Image of Faustine, a member of the advisory board"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>
            {/* Prof. Lorna Holtman */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Alicia Kimiagarov{" "}
                </p>

                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText
                  text="Alicia Kimiagarov turns data analytics into visualizations,
                  detailed reports, and viable action plans to solve real
                  business problems and enhance operational performance. Her
                  focus is on working efficiently and with exceptional attention
                  to detail as she conducts data analyses, create informative
                  models, build reports, and present insights to key
                  stakeholders. she considers herself a collaborative strategist
                  who enjoys working on cross-functional teams and is passionate
                  about helping others develop professionally."
                />
                <div className="flex items-center">
                  <Link
                    className="text-gray-700 font-bold  underline   "
                    href="https://www.linkedin.com/in/aliciakimiagarov/
          "
                    target="_">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/alicia.jpeg"
                  width={400}
                  height={400}
                  alt="Image of Alicia"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>

            <div className="bg-white  rounded-lg shadow-md">
              <div className="p-6">
                <p className="text-gray-900 font-extrabold text-2xl">
                  Gibert Anyetei{" "}
                </p>

                <div className="border-b-2 border-gray-200 mb-4"></div>
                <ExpandableText
                  text="Gilbert Anyetei currently serves as an Investment Associate at
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
                  building and growing their ventures."
                />
                <div className="flex items-center">
                  <Link
                    
                    className="text-gray-700 font-bold  underline   "
                    href="https://www.linkedin.com/in/gilbert-anyetei-ca-sa-3b983b51/
          "
                    target="_">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Image
                  src="/gilbert.jpg"
                  width={400}
                  height={400}
                  alt="Image of Gilbert Anyetei"
                  className="object-cover w-full rounded-b-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
