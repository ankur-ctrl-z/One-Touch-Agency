import React from "react";
import LiveEventFullSetup1 from "../../assets/All-Services-images/Live-Event-Full-Setup/Live-Event-Full-Setup-1.jpg";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const LiveEventFullSetup = () => {
  return (
    <div className="text-white mx-auto bg-gray-900 px-4 sm:px-6 lg:px-8 mt-[5rem]">
      <div className="flex flex-col">
        <div className="flex justify-center  mt-[5rem] items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={LiveEventFullSetup1}
            alt="fashion show Image"
          />
        </div>

        <div className="text-content w-full">
          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            One Touch Agency: Your All-Encompassing Solution for Flawless
            Corporate Live Events
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Dreading the endless to-do list for your next corporate live event?
            Feeling overwhelmed by venue selection, vendor coordination, and
            transforming a blank space into an impactful experience? One Touch
            Agency can take the stress out of event setup, allowing you to focus
            on what truly matters – delivering a successful and memorable event
            for your audience. Imagine a seamless corporate event where
            everything flows effortlessly, leaving a lasting impression on your
            attendees and achieving your desired outcomes. At One Touch Agency,
            we turn that vision into reality. We specialize in crafting and
            executing exceptional live events, taking care of every detail from
            initial concept to post-event analysis.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Our Comprehensive Live Event Services:
          </h3>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 mt-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">
                Concept Development and Event Planning:{" "}
              </span>
              We don't just execute events; we help you define them. We'll
              brainstorm creative ideas, develop a detailed event plan, and
              manage all logistics, ensuring a smooth and successful event.
            </li>
            <li>
              <span className="text-xl font-bold">
                Venue Sourcing and Management:
              </span>{" "}
              We work Finding the perfect location is crucial. We leverage our
              extensive network of venues to find the ideal space that aligns
              with your event size, budget, and desired atmosphere. We'll handle
              all venue negotiations and ensure seamless communication with the
              venue staff.
            </li>

            <li>
              <span className="text-xl font-bold">Technical Production:</span>{" "}
              From state-of-the-art sound systems and captivating lighting to
              high-definition video walls and interactive displays, we'll ensure
              your message is delivered with crystal clarity and maximum impact.
            </li>

            <li>
              <span className="text-xl font-bold">Event Design and Décor:</span>{" "}
              We believe the visual environment plays a vital role in setting
              the tone for your event. Our design team will create a visually
              stunning space that aligns with your brand and event theme.
            </li>

            <li>
              <span className="text-xl font-bold">
                Catering and Beverage Management:
              </span>{" "}
              From light refreshments to gourmet meals, we'll provide catering
              options that are both delicious and enhance the overall
              experience.
            </li>

            <li>
              <span className="text-xl font-bold">
                Entertainment and Speakers:
              </span>{" "}
              Looking to add a spark of excitement? We can connect you with
              engaging speakers, performers, or interactive experiences to keep
              your audience captivated.
            </li>

            <li>
              <span className="text-xl font-bold">
                Registration and Guest Management:
              </span>{" "}
              We handle all aspects of guest registration, ensuring a smooth and
              efficient check-in process. We can also manage ticketing systems
              and create personalized event apps to enhance the attendee
              experience.
            </li>

            <li>
              <span className="text-xl font-bold">
                Logistics and On-site Management:
              </span>{" "}
              Our dedicated team will be present on-site throughout the event,
              ensuring everything runs smoothly and addressing any unforeseen
              issues efficiently.
            </li>

            <li>
              <span className="text-xl font-bold">
                Post-Event Analysis and Reporting:
              </span>
              We believe in continuous improvement. After your event, we'll
              provide a comprehensive report with key metrics and attendee
              feedback to help you measure success and refine your future event
              strategies.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            The One Touch Advantage:
          </h3>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 mt-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">
                Single Point of Contact:{" "}
              </span>{" "}
              We Say goodbye to event planning headaches! We serve as your sole
              point of contact, managing all vendors and ensuring seamless
              communication.
            </li>
            <li>
              <span className="text-xl font-bold">Unwavering Expertise: </span>
              Our team possesses extensive experience in all facets of event
              planning and execution. We draw on our knowledge and industry
              connections to guarantee outstanding results.
            </li>
            <li>
              <span className="text-xl font-bold">Customized Solutions:</span>{" "}
              We understand that one size does not fit all. We personalize our
              services to meet your unique event goals and budget.
            </li>

            <li>
              <span className="text-xl font-bold">Unwavering Dedication:</span>{" "}
              We are passionate about exceeding your expectations and creating
              memorable live events that leave a lasting impression.
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Let One Touch Agency transform your next corporate event into a
            resounding success. Contact us today and experience the power of a
            full-service approach!
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
            With One Touch Agency, your vision for a flawless corporate live
            event becomes a reality. We take the stress out of event planning
            and ensure a successful, impactful experience for you and your
            guests.
          </h3>

          <div className="flex justify-center m-5 sm:mb-10 sm:m-10">
            <Link to="/contactus">
              <button className="w-48 sm:w-64 h-16 sm:h-20 border-4 rounded-3xl text-lg sm:text-xl font-semibold flex items-center justify-center shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625]">
                Book Now{" "}
                <PiArrowCircleRightBold size={20} className="ml-2 mt-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEventFullSetup;
