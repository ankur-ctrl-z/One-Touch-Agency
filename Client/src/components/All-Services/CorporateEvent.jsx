import React from "react";
import CorporateEvent1 from "../../assets/All-Services-images/Corporate-Event/Corporate-Event-1.jpg";
import carporate2 from "../../assets/All-Services-images/Corporate-Event/Corporate-Event-2.jpg";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const CorporateEvent = () => {
  return (
    <div className="text-white mx-auto bg-[#1b1918] px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex flex-col">
        <div className="flex justify-center mt-2 items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={carporate2}
            alt="carporate eventmanagement Image"
          />
        </div>

        <div className="text-content w-full">
          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Welcome to One Touch Agency, your trusted partner in exceptional
            corporate event management. In today&#39;s fast-paced business
            environment, organizing a successful corporate event can be a
            complex and time-consuming task. From small team-building activities
            to large-scale conferences, the demands of planning, coordinating,
            and executing an event can be overwhelming. That&#39;s where we come
            in. We are one of the leading corporate event management companies
            in India, specializing in delivering bespoke event solutions
            tailored to your unique needs.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-5">
            Best Corporate Event Management Services from Us
          </h2>

          <h3 className="text-lg sm:text-xl mt-5 mb-5">
            <span className="text-xl font-bold">
              {" "}
              Event Planning and Strategy :{" "}
            </span>{" "}
            Comprehensive planning and strategic consultation to align your
            event with your business objectives.
          </h3>

          <h3 className="text-lg sm:text-xl mt-5 mb-5">
            {" "}
            <span className="text-xl font-bold">
              Venue Selection and Management :{" "}
            </span>{" "}
            Finding the perfect venue for your event, whether it’s an intimate
            gathering or a large conference.
          </h3>
          <h3 className="text-lg sm:text-xl  mt-5 mb-5">
            <span className=" text-xl font-bold">Theme and Design: </span>
            Creating innovative and captivating themes to enhance the event
            experience.
          </h3>
          <h3 className="text-lg sm:text-xl mt-5 mb-5">
            <span className="text-xl font-bold">
              Logistics and Coordination:
            </span>{" "}
            Meticulous coordination of all logistics, ensuring a smooth event
            flow.
          </h3>
          <h3 className="text-lg sm:text-xl mt-5 mb-5">
            <span className="text-xl font-bold">
              {" "}
              Audio-Visual and Technical Support:
            </span>{" "}
            State-of-the-art audio-visual solutions to enhance presentations and
            entertainment.
          </h3>
          <h3 className="text-lg sm:text-xl  mt-5 mb-5">
            <span className="text-xl font-bold">
              Catering and Hospitality:{" "}
            </span>
            Premium catering services to suit all tastes and preferences.
          </h3>
          <h3 className="text-lg sm:text-xl mt-5 mb-5">
            <span className="font-bold">Entertainment and Activities:</span>{" "}
            Engaging entertainment options to keep your guests entertained.
          </h3>

          <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-5">
            Corporate Event Management Companies in Major Cities
          </h2>
          <h3 className="text-xl sm:text-3xl font-bold mt-5">Bangalore</h3>
          <p className="text-lg sm:text-lg lg:text-xl mb-5 mt-5">
            As one of the top corporate event management companies in Bangalore,
            we offer specialized services to cater to the vibrant business
            community. From tech conferences to product launches, we handle it
            all with precision and creativity.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mt-5 ">Delhi</h3>
          <p className="text-lg sm:text-lg lg:text-xl mb-5 mt-5">
            Our presence in Delhi makes us a go-to choice for corporate event
            management companies in Delhi. We understand the dynamic corporate
            environment of the capital and offer tailored solutions to meet your
            specific requirements.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mt-5">Hyderabad</h3>
          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Hyderabad&#39;s growing corporate sector is well-served by our
            expert team. We are one of the top corporate event management
            companies in Hyderabad, known for our attention to detail and
            commitment to quality.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mt-5">Chennai</h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            For businesses in Chennai, we offer unparalleled event management
            services. As one of the preferred corporate event management
            companies in Chennai, we ensure your events are flawlessly executed.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mt-5">Ahmedabad</h3>
          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            In Ahmedabad, we stand out as one of the premier corporate event
            management companies. We bring creativity and professionalism to
            every event, making us a trusted partner for businesses.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mt-5">Dubai</h3>

          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            Expanding beyond India, we also cater to businesses in Dubai. As one
            of the top corporate event management companies in Dubai, we offer
            international expertise with local insight.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-5">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5 mt-5">
            At One Touch Agency, we understand that every corporate event is a
            unique opportunity to create lasting impressions. Our team of
            experienced professionals is dedicated to ensuring your event is a
            seamless, memorable experience. We provide end-to-end solutions,
            from initial planning to flawless execution, ensuring every detail
            is perfect.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
            Our commitment to excellence and client satisfaction sets us apart
            from other corporate event management companies in India. We strive
            to exceed your expectations, delivering events that leave a lasting
            impression on your guests.
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

export default CorporateEvent;
