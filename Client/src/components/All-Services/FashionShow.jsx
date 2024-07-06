import React from "react";
import FashionShow2 from "../../assets/All-Services-images/Fashion-Show/Fashion-Show-2.png";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const FashionShow = () => {
  return (
    <div className="text-white mx-auto bg-gray-900 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col">
        <div className="flex justify-center mt-[5rem] items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={FashionShow2}
            alt="fashion show Image"
          />
        </div>

        <div className="text-content w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mt-5">
            Dreaming Up a Dazzling Fashion Show (22200) but Drowning in
            Logistics?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Let's face it, organizing a fashion show can be overwhelming. From
            finding the perfect theme to securing a stunning venue and managing
            the intricate details, the process can quickly become a tangled
            mess.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            What if you could create a seamless and unforgettable fashion
            experience - without the stress?
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            One Touch Agency is your one-stop shop for crafting fashion shows
            that turn heads and leave a lasting impression. We take care of
            everything, from conceptualizing a captivating theme to flawless
            execution on the runway. Let's bring your fashion vision to life!
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            One Touch Agency: Orchestrating Captivating Fashion Shows Across
            India
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            One Touch Agency ignites the runway! We're your one-stop shop for
            crafting fashion shows that are as unique and captivating as the
            styles they showcase. From the bustling streets of Delhi and Mumbai
            to the vibrant culture of all of India , we bring your vision to
            life with meticulous planning and flawless execution.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Beyond the Glitz: Tailored Themes and Ideas
          </h3>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            We understand that a successful fashion show is more than just
            beautiful clothes. It's about storytelling, creating a sensory
            experience, and leaving a lasting impression. That's why we work
            closely with you to develop a fashion show theme that perfectly
            aligns with your brand identity and target audience.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Spark Your Imagination with Our Expertise
          </h3>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 mt-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">Curated Concepts:</span>
              Whether you're aiming for a traditional fashion show celebrating
              India's rich cultural heritage (260) or a cutting-edge display
              pushing the boundaries of contemporary style, we have the creative
              spark to bring your vision to life.
            </li>
            <li>
              <span className="text-xl font-bold">
                Kids' Fashion Extravaganza:
              </span>{" "}
              Looking to showcase the latest trends in kids' fashion ? We
              understand how to create a fun and engaging atmosphere for a
              younger audience, ensuring your girls' fashion show or men's
              fashion show is a delightful experience for everyone involved.
            </li>

            <li>
              <span className="text-xl font-bold">Thematic Flair: </span>From
              futuristic fashion show ideas with dazzling lights and innovative
              technology to a whimsical exploration of nature's beauty, we help
              you choose the perfect theme to set the stage for a truly
              unforgettable event.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Memorable Moments: Beyond the Runway
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            We go beyond the runway to create a complete fashion show
            experience. This includes:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 mt-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">Venue Selection: </span> We
              secure the perfect location that reflects your brand and
              accommodates your guest list, whether it's a grand ballroom or an
              intimate rooftop setting.
            </li>
            <li>
              <span className="text-xl font-bold">Model Management:</span>
              Our experienced team works with models of all backgrounds and
              experience levels to deliver a polished and engaging presentation.
            </li>
            <li>
              <span className="text-xl font-bold">
                Media & Public Relations:
              </span>{" "}
              We can help you generate buzz for your event with strategic media
              outreach and public relations efforts.
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
            Partner with One Touch Agency and let us orchestrate your next
            fashion show into a show stopping spectacle. Contact us today to
            discuss your vision and bring your most ambitious fashion dreams to
            life!
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

export default FashionShow;
