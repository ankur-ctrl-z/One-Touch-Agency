import React from "react";
import EventSecurity1 from "../../assets/All-Services-images/Event-Security/Event-Security-1.jpg";
import EventSecurity2 from "../../assets/All-Services-images/Event-Security/Event-Security-2.jpg";
import EventSecurity3 from "../../assets/All-Services-images/Event-Security/Event-Security-3.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const EventSecurity = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={EventSecurity1}
          alt="Event Security 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Secure the Success: Event Security Solutions from One Touch Agency
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Event security shouldn't be an afterthought. At One Touch Agency, we
            understand the importance of creating a safe and secure environment
            for your guests and staff. Our Event Security service provides a
            comprehensive solution, tailored to your specific event, so you can
            focus on what matters most - delivering a fantastic experience. Let
            us take the worry out of event security and ensure a smooth and
            successful event for all.
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Comprehensive Event Security Solutions from One Touch Agency
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            A successful event hinges on a safe and secure environment for both
            attendees and staff. One Touch Agency's Event Security service
            provides comprehensive solutions to ensure your event runs smoothly,
            allowing you to focus on what matters most - creating a memorable
            experience for your guests.
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Tailored Security Plans:
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We understand that every event is unique. We take the time to
            understand your specific needs and develop a customized security
            plan that addresses potential risks. Here are some key areas we
            consider:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Event Type and Size: The security needs for a small business
              meeting differ vastly from those of a large-scale concert. We
              tailor our approach to the specific nature and scale of your
              event.
            </li>
            <li className="mb-2">
              Venue Security Assessment: We conduct a thorough security
              assessment of the event venue, identifying potential
              vulnerabilities and recommending mitigation strategies.
            </li>
            <li className="mb-2">
              Risk Identification: We work with you to identify potential risks
              associated with your event, such as unruly guests, unauthorized
              access, or emergency situations.
            </li>
          </ul>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Comprehensive Security Measures:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Our team implements a range of security measures to ensure a safe
            and secure environment:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Crowd Management: Our experienced staff expertly manages crowd
              flow, ensuring orderly movement and preventing congestion. This
              includes managing queues, directing attendees, and de-escalating
              potential situations.
            </li>
            <li className="mb-2">
              Access Control: We implement efficient access control measures,
              including physical security measures like bag checks and
              credential verification, to ensure only authorized individuals
              enter the event space.
            </li>
            <li className="mb-2">
              On-Site Security Personnel: We provide highly trained and
              professional security personnel who are adept at maintaining a
              safe and secure environment. This includes both uniformed and
              plainclothes security officers, ensuring a discreet and
              professional presence.
            </li>
            <li className="mb-2">
              Emergency Preparedness: We develop comprehensive emergency
              response plans and conduct evacuation drills to ensure everyone
              knows how to react in the event of an emergency.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Proactive Planning and Preparation:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Prevention is key. We go beyond reactionary measures with proactive
            planning and preparation:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Emergency Preparedness: We work with you to develop a
              comprehensive emergency response plan that outlines procedures for
              fire, medical emergencies, or other unforeseen situations.
            </li>
            <li className="mb-2">
              Communication Protocols: Clear communication is crucial in times
              of crisis. We establish clear communication protocols between
              security personnel, event staff, and emergency services.
            </li>
            <li className="mb-2">
              Security Training: Our security personnel undergo rigorous
              training in crowd management, emergency response procedures, and
              first aid, ensuring they are well-equipped to handle any
              situation.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={EventSecurity2}
          alt="Event Security 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={EventSecurity3}
          alt="Event Security 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Why Choose One Touch Agency?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Our commitment to security goes beyond providing personnel. Here's
            what sets us apart:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Experienced Team: Our team comprises security professionals, event
              specialists, and risk management experts, ensuring a comprehensive
              and effective security strategy.
            </li>
            <li className="mb-2">
              Technology Integration: We leverage state-of-the-art security
              technology, seamlessly integrated with your event infrastructure,
              to enhance security measures.
            </li>
            <li className="mb-2">
              Focus on Customer Service: We understand that security shouldn't
              be disruptive. Our team maintains a professional and courteous
              demeanor, ensuring a positive guest experience.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            With One Touch Agency's Event Security service, you can focus on the
            success of your event, knowing that the safety and security of your
            guests and staff are in good hands. Contact us today to discuss a
            customized security plan for your next event.
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

export default EventSecurity;
