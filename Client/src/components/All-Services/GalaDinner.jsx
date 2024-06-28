import React from "react";
import GalaDinner1 from "../../assets/All-Services-images/Gala-Dinner/Gala-Dinner-1.jpg";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const GalaDinner = () => {
  return (
    <div className="text-white mx-auto bg-[#1b1918] px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex flex-col">
        <div className="flex justify-center mt-2 items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={GalaDinner1}
            alt="fashion show Image"
          />
        </div>

        <div className="text-content w-full">
          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Dreaming of a Gala Dinner So Grand It Becomes a Night to Remember?
            But Dreading the Mountains of Details?
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Planning a gala dinner can feel overwhelming. Finding the perfect
            gala dinner venue, crafting a captivating theme, managing guest
            RSVPs, and ensuring flawless execution - it's a lot to juggle!
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            What if you could create a dazzling and unforgettable gala dinner
            experience - without the stress?
          </h3>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            One Touch Agency takes the reins, transforming your vision into a
            spectacular gala dinner that leaves your guests speechless. We
            handle everything from venue selection and thematic design to
            exquisite cuisine and impeccable service. Let's turn your next
            celebration into a night of elegance and unforgettable memories!
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            One Touch Agency: Orchestrating Unforgettable Gala Dinners Across
            India
          </h3>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            One Touch Agency elevates the art of celebration. We transform
            ordinary dinners into gala dinners – dazzling spectacles that leave
            a lasting impression. Whether you're planning a corporate gala
            dinner to celebrate a milestone achievement or a royal gala dinner
            steeped in elegance, we bring your vision to life with meticulous
            planning and unparalleled execution. From the bustling heart of
            Delhi to any location across India, we orchestrate every detail to
            create an unforgettable experience for your guests.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5 mb-5">
            Beyond the Table: Crafting a Memorable Atmosphere
          </h3>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            A successful gala dinner is more than just exquisite food and
            impeccable service. It's about creating an atmosphere that resonates
            with your guests and reflects the essence of your event. One Touch
            Agency collaborates with you to curate a truly immersive experience.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5 mb-5">
            Setting the Stage:
          </h3>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">Venue Selection:</span>
              We find the perfect gala dinner restaurant or venue that
              complements your theme and accommodates your guest list. Whether
              it's a luxurious hotel ballroom like the iconic Sheraton or a
              unique historical landmark, we secure the ideal space for your
              event.
            </li>
            <li>
              <span className="text-xl font-bold">Thematic Flair:</span> We work
              with you to develop a captivating theme that sets the tone for the
              evening. From a dazzling Christmas Eve gala dinner with festive
              décor to a glamorous celebration reminiscent of Hollywood's golden
              age, we create a cohesive experience that transports your guests.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5 mb-5">
            A Symphony of Details:
          </h3>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">Exquisite Cuisine:</span> We
              work with renowned caterers to create a delectable menu that
              tantalizes taste buds and caters to all dietary preferences.
            </li>
            <li>
              <span className="text-xl font-bold">Seamless Service: </span>
              Our experienced team provides exceptional service throughout the
              evening, ensuring your guests feel comfortable, valued, and
              well-attended to.
            </li>
            <li>
              <span className="text-xl font-bold">
                Invitation Design & Management:
              </span>{" "}
              We design elegant and informative gala dinner invitations (90)
              that set the right tone for your event and manage the RSVP process
              efficiently.
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
            Partner with One Touch Agency and transform your next gathering into
            a gala dinner that inspires, celebrates, and creates lasting
            memories. Contact us today to discuss your vision and let us create
            an unforgettable event for you.
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

export default GalaDinner;
