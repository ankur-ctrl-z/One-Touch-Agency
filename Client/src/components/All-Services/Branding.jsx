import React from "react";
import Branding1 from "../../assets/All-Services-images/Branding/Branding-1.jpg";
import Branding2 from "../../assets/All-Services-images/Branding/Branding-2.jpg";
import Branding3 from "../../assets/All-Services-images/Branding/Branding-3.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Branding = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={Branding1}
          alt="Branding 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Captivate and Connect: Exhibition Branding with One Touch Agency
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Standing out in a crowded exhibition hall is no easy feat. But with
            One Touch Agency's Exhibition Branding service, we transform your
            booth from a simple space into a captivating brand experience. We go
            beyond traditional signage to tell your story, generate buzz, and
            leave a lasting impression on potential leads.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Developing a unified brand story:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Your exhibition presence is an extension of your brand identity. Our
            team works closely with you to understand your brand essence, target
            audience, and exhibition goals. We then translate this understanding
            into a cohesive visual language that incorporates:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Compelling Messaging: We craft clear and concise messaging that
              speaks directly to your target audience, highlighting your unique
              value proposition and capturing their attention.
            </li>
            <li className="mb-2">
              Eye-Catching Design: Our designers create visually stunning
              graphics, leveraging color schemes, typography, and powerful
              imagery that resonate with your brand.
            </li>
            <li className="mb-2">
              Interactive Elements: We integrate interactive features to engage
              visitors and encourage participation. This can include
              touchscreens, product demos, or gamified experiences that leave a
              memorable impact.
            </li>
          </ul>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Optimizing Your Booth Design:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Space is precious in an exhibition hall. We create a functional and
            aesthetically pleasing booth design that maximizes your impact:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Strategic Layout: Our team optimizes your space with a clear flow,
              dedicated areas for product demonstrations, and comfortable
              interaction zones.
            </li>
            <li className="mb-2">
              High-Quality Materials: We use durable and visually appealing
              materials to create a professional and sophisticated impression.
            </li>
            <li className="mb-2">
              Sustainable Practices: One Touch Agency prioritizes
              environmentally friendly solutions whenever possible, aligning
              with your brand values and attracting eco-conscious attendees.
            </li>
            <li className="mb-2">
              Innovative Technology: We incorporate cutting-edge technology to
              enhance the visitor experience. This could include digital
              signage, interactive displays, or virtual reality experiences.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Elevating the Exhibition Experience:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Technology plays a crucial role in driving engagement. We integrate
            innovative solutions to enhance your brand story and visitor
            experience:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Digital Displays: Showcase impactful videos, product
              presentations, or interactive content loops on strategically
              placed screens
            </li>
            <li className="mb-2">
              Interactive Touchscreens: Allow visitors to explore your
              offerings, gather information, or participate in interactive polls
              and surveys.
            </li>
            <li className="mb-2">
              Social Media Integration: Encourage visitor interaction by
              incorporating real-time social media feeds, photo booths, or
              hashtag campaigns.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={Branding2}
          alt="Branding 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={Branding3}
          alt="Branding 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Driving Brand Awareness and Lead Generation:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Your exhibition presence is a prime opportunity to strengthen brand
            awareness and generate qualified leads. We integrate seamless lead
            capture strategies:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              QR Codes and NFC Tags: Streamline lead capture by incorporating QR
              codes or NFC tags on marketing materials or badges. Visitors can
              scan these with their smartphones to instantly connect with your
              brand and provide their contact information.
            </li>
            <li className="mb-2">
              Interactive Lead Capture Forms: Utilize digital kiosks or tablets
              to collect information through engaging and informative lead
              capture forms.
            </li>
            <li className="mb-2">
              Social Media Contests and Giveaways: Generate excitement and
              collect leads through interactive social media contests or
              giveaways that encourage user engagement
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Why Choose One Touch Agency for Your Exhibition Branding ?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We understand that every brand is unique. Our Exhibition Branding
            service is tailored to your specific needs and budget. We offer:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Dedicated Project Management: A dedicated account manager will
              oversee your project, ensuring seamless execution and clear
              communication.
            </li>
            <li className="mb-2">
              Creative Expertise: Our team of experienced designers and branding
              specialists will help you develop a brand story that resonates
              with your audience.
            </li>
            <li className="mb-2">
              Technology Integration: We provide seamless integration of the
              latest technology solutions to enhance your visitor experience.
            </li>
            <li className="mb-2">
              Data-Driven Approach: We track key metrics and analyze results to
              optimize your branding efforts for future exhibitions.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Let One Touch Agency elevate your exhibition presence and transform
            your participation into a successful brand-building opportunity.
            Contact us today to learn more about our Exhibition Branding service
            and how we can help you make a lasting impact at your next event.
          </h2>
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

export default Branding;
