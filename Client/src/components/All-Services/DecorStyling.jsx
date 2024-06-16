import React from "react";
import DecorStyling1 from "../../assets/All-Services-images/Decor-Styling/Decor-Styling-1.jpg";
import DecorStyling2 from "../../assets/All-Services-images/Decor-Styling/Decor-Styling-2.jpg";
import DecorStyling3 from "../../assets/All-Services-images/Decor-Styling/Decor-Styling-3.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const DecorStyling = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={DecorStyling1}
          alt="Decor Styling 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            Exquisite Decor and Styling with One Touch Agency
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Do you want to make your event space seem like something out of the
            ordinary? The Decor and Styling service offered by One Touch Agency
            crafts compelling spaces that transcend simple beauty. Together, we
            create a visual story that seamlessly combines beautiful décor,
            theme components, and brand alignment. Envision breathtaking floral
            arrangements, well chosen furnishings, and thoughtful lighting that
            realizes your vision. Together, let's design an event venue that
            will wow your visitors and make a lasting impression.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Transform Your Vision into Reality
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Imagine an event space that transcends the ordinary, a space that
            tells your story through captivating visuals and meticulously
            crafted details. With One Touch Agency's Decor and Styling service,
            we transform your vision into a breathtaking reality. We go beyond
            simple aesthetics, crafting immersive experiences that align with
            your brand identity and captivate your audience.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Storytelling Through Design:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Your event is a unique narrative, and our team translates it into a
            visual masterpiece. We offer a collaborative approach to understand
            your event's theme, desired ambiance, and target audience:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Conceptualization: We work closely with you to brainstorm creative
              concepts that bring your vision to life. Mood boards, sketches,
              and 3D renderings help visualize the final design and ensure
              everyone is on the same page.
            </li>
            <li className="mb-2">
              Thematic Cohesion: From elegant sophistication to whimsical
              wonder, we create a cohesive theme that permeates all aspects of
              the decor, from furniture selection to floral arrangements and
              lighting.
            </li>
            <li className="mb-2">
              Brand Alignment: We seamlessly integrate your brand identity into
              the design, ensuring the decor reflects your brand values and
              messaging. This creates a consistent and impactful brand
              experience for your guests.
            </li>
          </ul>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Curated Design Elements:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Our experienced team takes meticulous care in selecting and
            arranging design elements to create a truly immersive experience:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Furniture and Seating: We curate a selection of furniture and
              seating that aligns with the theme, functionality, and overall
              aesthetic of the event space.
            </li>
            <li className="mb-2">
              Exquisite Floral Arrangements: Our skilled florists craft stunning
              floral displays that add a touch of elegance and set the tone for
              the event.
            </li>
            <li className="mb-2">
              Lighting Design: Expert lighting techniques create the desired
              ambiance and highlight key elements of the decor, creating a truly
              captivating atmosphere.
            </li>
            <li className="mb-2">
              Custom Signage and Backdrops: Eye-catching signage and custom
              backdrops enhance the visual impact and communicate your message
              effectively.
            </li>
            <li className="mb-2">
              Themed Props and Accents: We strategically incorporate themed
              props and accents that tie the entire design together and provide
              unique photo opportunities for your guests.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Stress-Free Execution:
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Creating stunning event decor goes beyond aesthetics; it requires
            flawless execution. Here's what sets One Touch Agency apart:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Project Management: Our dedicated project managers ensure every
              detail is meticulously planned and executed, relieving you of the
              stress and logistics.
            </li>
            <li className="mb-2">
              Inventory Management: We maintain a vast inventory of high-quality
              decor elements, allowing us to cater to various styles and themes
              efficiently.
            </li>
            <li className="mb-2">
              Vendor Coordination: We seamlessly coordinate with on-site vendors
              such as florists, lighting technicians, and rental companies,
              ensuring a smooth and successful event experience.
            </li>
            <li className="mb-2">
              Meticulous Installation: Our experienced team meticulously
              installs the entire decor, ensuring a flawless and polished final
              product.
            </li>
          </ul>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={DecorStyling2}
          alt="DecorStyling 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={DecorStyling3}
          alt="Decor Styling 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Why Choose One Touch Agency?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We are passionate about turning your vision into reality. When you
            choose One Touch Agency for your event decor and styling needs, you
            get:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
            <li className="mb-2">
              Uniquely Tailored Designs: We create customized designs that
              reflect your specific event goals and brand identity. No two
              events are alike.
            </li>
            <li className="mb-2">
              Experienced Professionals: Our team comprises talented designers,
              decorators, and project managers with extensive experience in
              creating stunning event spaces.
            </li>
            <li className="mb-2">
              Turnkey Solutions: We handle everything from initial concept
              development and vendor coordination to flawless installation and
              breakdown, offering you a complete and stress-free experience.
            </li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Let One Touch Agency transform your event from ordinary to
            extraordinary. Contact us today and discuss how our Decor and
            Styling service can bring your vision to life.
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

export default DecorStyling;
