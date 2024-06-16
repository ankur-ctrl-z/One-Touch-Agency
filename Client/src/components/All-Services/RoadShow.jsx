import React from "react";
import RoadShow1 from "../../assets/All-Services-images/Road-Show/Road-Show-1.jpg";
import RoadShow2 from "../../assets/All-Services-images/Road-Show/Road-Show-2.jpg";
import RoadShow3 from "../../assets/All-Services-images/Road-Show/Road-Show-3.jpg";
import { Link } from "react-router-dom";
import { TiArrowRightThick } from "react-icons/ti";

const RoadShow = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={RoadShow1}
          alt="Road Show 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Hit the Road with Success: Seamless Road Show Events by One Touch
            Agency
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Take your brand on the road and directly engage your target audience
            with One Touch Agency's Road Show Event service. We transform static
            promotional campaigns into dynamic, interactive experiences,
            allowing you to connect with a wider audience across various
            locations.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Tailored to Your Needs:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Road shows are inherently flexible, and our service reflects that.
            We work closely with you to understand your goals and target
            audience, crafting a road show experience that aligns perfectly with
            your needs. Here are some key considerations:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Product Launches: Generate excitement for a new product or service
              with a captivating road show that showcases its features and
              benefits to regional audiences.
            </li>
            <li className="mb-2">
              Brand Awareness Campaigns: Increase brand visibility and connect
              with potential customers in new markets by bringing your brand
              directly to them.
            </li>
            <li className="mb-2">
              Customer Education: Educate existing and potential customers on
              your offerings through interactive presentations, workshops, or
              product demonstrations during the road show.
            </li>
          </ul>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Creating Dynamic Experiences:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Road shows are more than just presentations. We design engaging
            experiences that leave a lasting impression:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Interactive Activities: Incorporate interactive activities like
              product demos, contests, or gamified experiences to boost audience
              engagement.
            </li>
            <li className="mb-2">
              Immersive Environments: Create immersive environments that
              showcase your brand story and immerse visitors in your offerings.
              This could involve virtual reality experiences, interactive
              displays, or themed environments.
            </li>
            <li className="mb-2">
              Live Demonstrations: Conduct live product demonstrations that
              allow attendees to experience your offerings firsthand and ask
              questions.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Logistics Management Made Easy:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            One Touch Agency streamlines the behind-the-scenes aspects of your
            road show, allowing you to focus on what matters most - connecting
            with your audience. Our services include:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Venue Selection: We source and secure suitable venues in each
              targeted location, ensuring optimal reach and convenience for your
              audience.
            </li>
            <li className="mb-2">
              Logistics Coordination: From equipment rental and transportation
              to on-site staffing and technical support, we handle all
              logistical aspects with precision.
            </li>
            <li className="mb-2">
              Travel Arrangements: We can assist with travel arrangements for
              your team, ensuring a smooth and stress-free experience.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={RoadShow2}
          alt="Road Show 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={RoadShow3}
          alt="Road Show 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Measuring Success and Maximizing ROI:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We believe in results-driven marketing. Our road show service
            incorporates strategies to measure success and maximize your return
            on investment (ROI):
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Data Capture: Capture valuable leads through interactive forms, QR
              code registrations, or social media engagement metrics.
            </li>
            <li className="mb-2">
              Real-Time Analytics: Track key metrics like attendance numbers,
              engagement levels, and lead generation in real-time, allowing you
              to optimize the road show as it progresses.
            </li>
            <li className="mb-2">
              Post-Event Reporting: We provide comprehensive post-event reports
              that analyze the success of the road show and offer insights for
              future campaigns.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Why Choose One Touch Agency?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Planning and executing a successful road show can be complex. But
            with One Touch Agency, you have a trusted partner by your side.
            Here's what makes us different:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Experienced Team: Our team comprises event specialists, marketing
              experts, and logistical professionals, ensuring a well-coordinated
              and impactful road show experience.
            </li>
            <li className="mb-2">
              Scalable Solutions: Our services are scalable to fit your budget
              and specific needs. We can handle small, regional road shows or
              large-scale, multi-city tours.
            </li>
            <li className="mb-2">
              Data-Driven Approach: We leverage data insights to optimize your
              road show for maximum impact and lead generation.
            </li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed font-bold mb-5">
            Take your brand on an adventure with One Touch Agency's Road Show
            Event service. Contact us today to discuss how we can help you
            connect with audiences across the region and achieve your marketing
            goals.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-5 -mb-14 sm:-mb-20 sm:m-10">
        <Link to="/contactus">
          <button className="w-48 sm:w-64 h-16 sm:h-20 border-4 rounded-3xl text-lg sm:text-xl font-semibold flex items-center justify-center shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
            Book Now <TiArrowRightThick size={20} className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoadShow;
