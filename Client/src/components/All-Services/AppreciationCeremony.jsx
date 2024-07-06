import React from "react";
import AppreciationCeremony1 from "../../assets/All-Services-images/Appreciation-Ceremony/Appreciation-Ceremony-1.jpg";
import AppreciationCeremony2 from "../../assets/All-Services-images/Appreciation-Ceremony/Appreciation-Ceremony-2.jpg";
import AppreciationCeremony3 from "../../assets/All-Services-images/Appreciation-Ceremony/Appreciation-Ceremony-3.jpg";
import { PiArrowCircleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const AppreciationCeremony = () => {
  return (
    <div className="text-white mx-auto bg-gray-900 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col">
        <div className="flex justify-center mt-[5rem] items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={AppreciationCeremony1}
            alt="Appreciation Ceremony"
          />
        </div>

        <div className="text-content w-full">
          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Want to Show Your Team They're Truly Appreciated? But Dread Planning a Bland Ceremony?
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Let's face it, traditional appreciation events can feel stale and forgettable. Your team deserves more than lukewarm speeches and dry catering. They deserve an appreciation ceremony that truly celebrates their achievements and fosters a sense of connection within your company.
          </p>

          <h4 className="text-xl sm:text-2xl font-bold mt-5">
            What if you could create an unforgettable experience that boosts morale, strengthens bonds, and celebrates achievements in a truly impactful way?
          </h4>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            One Touch Agency can turn that vision into reality. We specialize in crafting unique and impactful appreciation ceremonies that celebrate your team and showcase your company's commitment to its success. Let's discuss how we can design an event that truly expresses your gratitude.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            One Touch Agency: Crafting Unforgettable Appreciation Ceremony Events
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            At One Touch Agency, we understand the power of appreciation. Whether it's recognizing top performers, celebrating milestones, or simply saying "thank you" to your valued team, a well-crafted appreciation ceremony event can create lasting positive impacts. We specialize in transforming these occasions into unforgettable experiences that strengthen morale, boost engagement, and foster a thriving company culture.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Elevating Your Appreciation Ceremony
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Gone are the days of dry speeches and stale catering. One Touch Agency takes a holistic approach to appreciation ceremony planning. We begin by collaborating with you to understand your event's unique goals and target audience. Is it a celebratory gala for the entire company, or a more intimate gathering for a specific team? We consider every detail, from the venue selection to the thematic elements, ensuring the event reflects your brand and resonates with your guests.
          </p>

          <ul className="text-base sm:text-lg leading-relaxed mb-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">Theme & Ambiance:</span> We create a captivating theme that aligns with the purpose of your appreciation ceremony. Whether it's a glamorous awards night or a casual luau, our team of designers will curate an immersive ambiance that sets the tone for the evening.
            </li>
            <li>
              <span className="text-xl font-bold">Engaging Entertainment:</span> We source captivating entertainment options to keep your guests engaged and energized. This could include live music, interactive games, or even a keynote speaker who inspires and motivates.
            </li>
            <li>
              <span className="text-xl font-bold">Memorable Recognition:</span> At the heart of any appreciation ceremony is the act of recognizing achievements. We help you craft a meaningful program that honors your team's contributions. From personalized awards to heartfelt speeches, we ensure each honoree feels valued and appreciated.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Beyond the Celebration
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Our expertise extends beyond the event itself. We handle all the logistical and administrative tasks, allowing you to focus on the joy of celebrating your team. This includes:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed mb-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">Venue Selection & Management:</span> We secure the perfect venue to accommodate your guest list and create the desired atmosphere. We then manage all aspects of the venue rental, ensuring a seamless experience.
            </li>
            <li>
              <span className="text-xl font-bold">Audiovisual Production:</span> We elevate the event with top-notch audiovisual equipment and professional technicians. This ensures your presentations, speeches, and entertainment run flawlessly.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Building Lasting Memories
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            A well-organized appreciation ceremony creates a lasting positive impact on your team. One Touch Agency captures these special moments with professional photography and videography, allowing you to document the event and share the memories with your entire team.
          </p>

        
        {/* last div */}

          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
          Partner with One Touch Agency to turn your next appreciation ceremony into a truly inspiring and motivating celebration. Let's work together to create an event that strengthens your company culture and shows your team just how much they are valued.
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

export default AppreciationCeremony;
