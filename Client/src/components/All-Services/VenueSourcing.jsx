import React from "react";
import VenueSourcing1 from "../../assets/All-Services-images/Venue-Sourcing/Venue-Sourcing-1.jpg";
import VenueSourcing2 from "../../assets/All-Services-images/Venue-Sourcing/Venue-Sourcing-2.jpg";
import VenueSourcing3 from "../../assets/All-Services-images/Venue-Sourcing/Venue-Sourcing-3.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const VenueSourcing = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={VenueSourcing1}
          alt="Venue Sourcing 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Streamlined Venue Sourcing with One Touch Agency
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Feeling overwhelmed by the endless rows of online venue listings?
            Drowning in a sea of generic conference halls, unsure which one will
            truly capture the essence of your event? Here at One Touch Agency,
            we take the stress out of venue sourcing with our personalized
            service. Imagine finding a space that perfectly aligns with your
            vision, budget, and logistical needs. Let us navigate the
            complexities of venue selection and help you discover the ideal
            setting for your next event. Ready to transform your event from
            ordinary to extraordinary? Contact One Touch Agency today!
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Finding the ideal venue is the foundation of a successful event. But
            navigating the complexities of venue selection can be overwhelming.
            One Touch Agency's Venue Sourcing service simplifies this process
            for you. We leverage our expertise and extensive network of
            partnerships to locate the perfect space that aligns with your event
            vision, budget, and logistical needs.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Understanding Your Needs:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We begin by collaborating with you to gain a comprehensive
            understanding of your event:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Event Type: The ideal venue varies depending on whether you're
              hosting a corporate conference, a product launch, or a wedding
              celebration.
            </li>
            <li className="mb-2">
              Guest Count: Anticipated attendance figures guide venue selection,
              ensuring adequate space for attendees without feeling cramped or
              excessive.
            </li>
            <li className="mb-2">
              Location Preferences: Do you require a central location for easy
              accessibility, or a venue nestled in a picturesque setting?
            </li>
            <li className="mb-2">
              Budget Parameters: We work within your budget parameters,
              exploring different options and negotiating competitive rates to
              maximize your value.
            </li>
          </ul>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Expert Venue Selection:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Our team goes beyond simple online listings. We leverage our vast
            industry knowledge and established partnerships to source a diverse
            range of potential venues:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Unique and Non-Traditional Venues: We explore a variety of options
              beyond traditional conference centers, including museums, art
              galleries, or even historic landmarks, to create a truly memorable
              experience.
            </li>
            <li className="mb-2">
              Nationwide and International Reach: Whether your event is local or
              requires an international setting, our network extends across
              various locations, ensuring a global reach for venue sourcing.
            </li>
            <li className="mb-2">
              Detailed Site Inspections: We conduct thorough on-site inspections
              of shortlisted venues, assessing accessibility, amenities, layout
              functionality, and catering options.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Negotiating & Securing the Best Deal:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Don't settle for generic rates. We negotiate on your behalf to
            secure the best possible terms:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Competitive Pricing: Our strong relationships with venues allow us
              to negotiate competitive rates and packages, optimizing your
              budget.
            </li>
            <li className="mb-2">
              Contract Review and Negotiation: We meticulously review contracts,
              ensuring all terms and conditions align with your requirements
              before you sign.
            </li>
            <li className="mb-2">
              Logistics Management: We coordinate logistics aspects like on-site
              equipment rental, audio-visual needs, and catering arrangements,
              ensuring a seamless experience.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={VenueSourcing2}
          alt="Venue Sourcing 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={VenueSourcing3}
          alt="Venue Sourcing 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Beyond the Venue:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Our Venue Sourcing service extends beyond simply finding a space:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Technology Integration: We help assess a venue's capabilities for
              integrating necessary technology such as high-speed Wi-Fi,
              audio-visual equipment, and presentation tools.
            </li>
            <li className="mb-2">
              Accessibility Considerations: We ensure the venue meets
              accessibility requirements for guests with disabilities, creating
              an inclusive environment for all attendees.
            </li>
            <li className="mb-2">
              Contingency Plans: We work with you to develop contingency plans
              in case of unforeseen circumstances, ensuring a smooth and
              adaptable event experience.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Why Choose One Touch Agency?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We believe in taking the stress out of venue sourcing. Here's how
            One Touch Agency sets itself apart:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Personalized Search: We focus on understanding your unique event
              needs and curate a personalized venue search tailored to your
              specific requirements.
            </li>
            <li className="mb-2">
              Extensive Network: Our established partnerships with venues across
              various locations give you access to a broader range of options
              for your event.
            </li>
            <li className="mb-2">
              Expert Negotiation: We leverage our expertise to negotiate the
              best possible rates and terms, ensuring optimal value for your
              event budget.
            </li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed font-bold mb-5">
            Let One Touch Agency be your trusted partner in finding the perfect
            venue for your event. Contact us today and we'll help you navigate
            the venue selection process, ensuring a successful and memorable
            event.
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

export default VenueSourcing;
