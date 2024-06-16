import React from "react";
import FashionShow1 from "../../assets/All-Services-images/Fashion-Show/Fashion-Show-1.png";
import FashionShow2 from "../../assets/All-Services-images/Fashion-Show/Fashion-Show-2.png";
import FashionShow3 from "../../assets/All-Services-images/Fashion-Show/Fashion-Show-3.png";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const FashionShow = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={FashionShow1}
          alt="Fashion Show 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Dreaming Up a Dazzling Fashion Show (22200) but Drowning in
            Logistics?
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Let's face it, organizing a fashion show can be overwhelming. From
            finding the perfect theme to securing a stunning venue and managing
            the intricate details, the process can quickly become a tangled
            mess.
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            What if you could create a seamless and unforgettable fashion
            experience - without the stress?
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            One Touch Agency is your one-stop shop for crafting fashion shows
            that turn heads and leave a lasting impression. We take care of
            everything, from conceptualizing a captivating theme to flawless
            execution on the runway. Let's bring your fashion vision to life!
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            One Touch Agency: Orchestrating Captivating Fashion Shows Across
            India
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            One Touch Agency ignites the runway! We're your one-stop shop for
            crafting fashion shows that are as unique and captivating as the
            styles they showcase. From the bustling streets of Delhi and Mumbai
            to the vibrant culture of all of India , we bring your vision to
            life with meticulous planning and flawless execution.
          </p>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Beyond the Glitz: Tailored Themes and Ideas
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We understand that a successful fashion show is more than just
            beautiful clothes. It's about storytelling, creating a sensory
            experience, and leaving a lasting impression. That's why we work
            closely with you to develop a fashion show theme that perfectly
            aligns with your brand identity and target audience.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Spark Your Imagination with Our Expertise
          </h2>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Curated Concepts: Whether you're aiming for a traditional fashion
              show celebrating India's rich cultural heritage (260) or a
              cutting-edge display pushing the boundaries of contemporary style,
              we have the creative spark to bring your vision to life.
            </li>
            <li className="mb-2">
              Kids' Fashion Extravaganza: Looking to showcase the latest trends
              in kids' fashion ? We understand how to create a fun and engaging
              atmosphere for a younger audience, ensuring your girls' fashion
              show or men's fashion show is a delightful experience for everyone
              involved.
            </li>
            <li className="mb-2">
              Thematic Flair: From futuristic fashion show ideas with dazzling
              lights and innovative technology to a whimsical exploration of
              nature's beauty, we help you choose the perfect theme to set the
              stage for a truly unforgettable event.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={FashionShow2}
          alt="Fashion Show 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={FashionShow3}
          alt="Fashion Show 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            A Symphony of Style: Music, Production & More
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            A captivating fashion show is a multi-sensory experience. Our team
            expertly curates the perfect fashion show music to complement your
            theme and elevate the emotions on the runway. We handle all aspects
            of production, from state-of-the-art lighting and sound to stunning
            backdrops, ensuring your event runs seamlessly and looks flawless.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Memorable Moments: Beyond the Runway
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We go beyond the runway to create a complete fashion show
            experience. This includes:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Venue Selection: We secure the perfect location that reflects your
              brand and accommodates your guest list, whether it's a grand
              ballroom or an intimate rooftop setting.
            </li>
            <li className="mb-2">
              Model Management: Our experienced team works with models of all
              backgrounds and experience levels to deliver a polished and
              engaging presentation.
            </li>
            <li className="mb-2">
              Media & Public Relations: We can help you generate buzz for your
              event with strategic media outreach and public relations efforts.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Partner with One Touch Agency and let us orchestrate your next
            fashion show into a show stopping spectacle. Contact us today to
            discuss your vision and bring your most ambitious fashion dreams to
            life!
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

export default FashionShow;
