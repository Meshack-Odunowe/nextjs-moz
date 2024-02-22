import Link from "next/link";

function FrequentlyAskedQuestions() {
  return (
    <div className=" max-w-3xl mx-auto p-4 leading-8">
      <h1 className="font-bold">Frequently Asked Questions </h1>

      <ol>
        <li className="my-4 font-bold">
          {" "}
          <span>1.</span> What do we do at Mozisha? .
        </li>
        <li className="">
          Mozisha nurtures top-tier African technology talent through its
          innovative, practice-based model. We also empower fast-growing
          companies to build remote data, sales, marketing, and operations teams
          in Africa, granting them access to stellar talent at competitive
          rates.{" "}
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>2.</span> How does Mozisha differ from other competitors?
        </li>
        <li className="">
          Our commitment to excellence shines through our innovative model,
          where we meticulously identify and cultivate premium talent to
          perfectly match the specific needs of our partner businesses.
          Leveraging our extensive network and deep expertise, we empower
          companies to access a pool of highly skilled African professionals
          capable of driving innovation, efficiency, and growth – all at highly
          competitive rates. Whether you require one or several talented
          individuals, Mozisha streamlines the recruitment process, enabling you
          to seamlessly scale your team within a matter of days.{" "}
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>3.</span> How does Mozisha training work?
        </li>
        <li className="">
          Driven by our innovative, practice-based training model, young
          Africans gain the competitive edge to thrive on the global stage. This
          comprehensive program includes immersive skills training, real-world
          capstone projects, expert mentorship, and practical apprenticeship
          opportunities.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>4.</span> How does the mentorship programme at Mozisha work?
        </li>
        <li>
          Designed for your success, the Mozisha Mentorship Program is a
          customized, 3- month journey. Whether you&#39;re an emerging
          professional ready to take the next step or an aspiring talent eager
          to learn from the best, we connect you with seasoned experts who share
          your path and achievements.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>5.</span> How does Mozisha apprenticeship work?
        </li>
        <li>
          Mozisha Apprenticeship pairs talented Africans with businesses for an
          immersive 3-month training program. This hands-on experience equips
          young individuals with the practical skills they need to excel in the
          ever-evolving world of technology.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>6.</span> What industries does Mozisha serve?
        </li>
        <li className="">
          Mozisha connects fast-growing businesses across diverse sectors with
          top-tier, pre-trained talent. Regardless of your location or industry,
          we meticulously match your specific needs with premium talent,
          ensuring a seamless integration into your team.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>7.</span> What category of talents can I hire at Mozisha?
        </li>
        <li className="">
          Mozisha specializes in providing data, sales, marketing, and
          operations talents.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>8.</span> How can I hire talents from Mozisha?
        </li>
        <li className="">
          Fill out the needs assessment form on{" "}
          <Link
            className=" text-blue-500 underline"
            href="www.mozisha.com/business">
            {" "}
            www.mozisha.com/business
          </Link>{" "}
          or contact us at{" "}
          <Link
            className=" text-blue-500 underline"
            href="mailto:info@mozisha.com">
            info@mozisha.com
          </Link>{" "}
          to get started.
        </li>
        
        <li className="my-4 font-bold">
          {" "}
          <span>9.</span> How do I request a quote or pricing information?
        </li>
        <li className="">
          Kindly contact us at{" "}
          <Link
            className=" text-blue-500 underline"
            href="mailto:info@mozisha.com">
            info@mozisha.com
          </Link>{" "}
          to get started
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>10.</span> How many countries does Mozisha serve?
        </li>
        <li className="">
          Mozisha bridges the global talent gap by providing a gateway to a
          network of exceptionally trained professionals across 50+ African
          countries. We connect companies worldwide with premium African talent,
          facilitating meaningful partnerships that drive mutual success.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>11.</span> Does Mozisha handle compliance and Labour laws in the
          recruitment process?
        </li>
        <li className="">
          From substandard employment agreements to wrong contractor setups,
          global hiring can be a compliance minefield. Diverse benefits, fees,
          and pensions across countries add more complexity. Mozisha cuts
          through it all, ensuring you&#39;re compliant and free to focus on
          your business. Get top talent to boost your productivity, while we
          handle the payroll hassle.
        </li>
        <li className="my-4 font-bold">
          {" "}
          <span>12.</span> Is Mozisha hiring? How can I apply for a job?
        </li>
        <li className="">
          Register as a skilled talent seeking job opportunities on our website,
          and we will contact you with the next steps.
        </li>
      </ol>
    </div>
  );
}

export default FrequentlyAskedQuestions;
