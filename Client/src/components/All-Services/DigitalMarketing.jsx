import React from "react";
import DigitalMarketing1 from "../../assets/All-Services-images/Digital-Marketing/Digital-Marketing-1.jpg";
import { Link } from "react-router-dom";
import { PiArrowCircleRightBold } from "react-icons/pi";

const DigitalMarketing = () => {
  return (
    <div className="text-white mx-auto bg-[#1b1918] px-4 sm:px-6 lg:px-8 mt-24">
      <div className="flex flex-col">
        <div className="flex justify-center mt-2 items-center">
          <img
            className="w-full sm:h-[25rem] sm:w-[40rem] rounded-lg mr-0 md:mr-5 md:mb-0 mt-5 md:mt-10"
            src={DigitalMarketing1}
            alt="Decor and styling Image"
          />
        </div>

        <div className="text-content w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mt-5">
            Feeling Invisible Online? Is Your Website Buried on Page 17 of
            Google?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Do you dream of reaching a wider audience and building a thriving
            online presence? In today's digital world, that dream can become
            reality. One Touch Agency isn't just about creating unforgettable
            events, we're also your partner in digital domination. We offer a
            comprehensive suite of services including SEO, SEM, SMM, SMO, PPC,
            and Google Ads, designed to propel your brand to the top of search
            results, ignite social media engagement, and drive qualified traffic
            to your website. Ready to unlock the power of digital marketing? Let
            One Touch Agency be your guide.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            One Touch Agency: Igniting Your Brand with a Multi-Touch Digital
            Marketing Approach
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            In today’s fast-paced digital landscape, having a robust online
            presence is crucial for business success. One Touch Agency is
            dedicated to providing top-tier digital marketing services that help
            businesses thrive in the competitive online world. Specializing in
            SEO, SEM, SMM, SMO, PPC, and Google Ads, we offer comprehensive
            solutions tailored to meet the unique needs of our clients. Our
            expertise and commitment to excellence ensure that your brand not
            only stands out but also achieves measurable results.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Benefits of Partnering with One Touch Agency
          </h3>
          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            We offer a comprehensive suite of digital marketing services,
            including:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 mt-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">
                Search Engine Optimization (SEO):{" "}
              </span>{" "}
              Increase your website's organic visibility on search engines like
              Google.
            </li>
            <li>
              <span className="text-xl font-bold">
                Search Engine Marketing (SEM):
              </span>
              Utilize targeted ads to reach your ideal audience on search engine
              result pages.
            </li>
            <li>
              <span className="text-xl font-bold">
                Social Media Marketing (SMM):
              </span>{" "}
              Engage your target audience on popular social media platforms like
              Facebook, Instagram, and LinkedIn.
            </li>

            <li>
              <span className="text-xl font-bold">
                Social Media Optimization (SMO):
              </span>{" "}
              Optimize your social media profiles for maximum reach and
              engagement.
            </li>

            <li>
              <span className="text-xl font-bold">
                Pay-Per-Click (PPC) Advertising:
              </span>{" "}
              Drive qualified traffic to your website with targeted ads on
              search engines and other platforms like Google Ads.
            </li>

            <li>
              <span className="text-xl font-bold">Content Marketing:</span>{" "}
              Create high-quality content that informs, educates, and engages
              your target audience, establishing your brand as a thought leader.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            One Touch Agency: Your Digital Marketing Expertise
          </h3>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Don't settle for a single note when you can create a digital
            marketing masterpiece. One Touch Agency is your partner in crafting
            a multi-faceted online strategy that ignites brand awareness, drives
            traffic, and fuels business growth. Contact us today and let's
            discuss how we can elevate your brand to the digital stratosphere.
          </p>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Why Choose a Digital Marketing Agency Like One Touch?
          </h3>

          <p className="text-base sm:text-lg leading-relaxed  mb-5 mt-5">
            Unlike larger agencies with a one-size-fits-all approach, One Touch
            Agency gets to know your business intimately. We understand that
            every brand has unique goals, target audiences, and industry
            nuances. We can assure one touch is the best digital marketing
            agency and Here's what sets us apart:
          </p>

          <ul className="text-base sm:text-lg leading-relaxed  mb-5 mt-5 list-disc list-inside">
            <li>
              <span className="text-xl font-bold">
                Personalized Strategies:
              </span>
              We don't believe in cookie-cutter solutions. We take the time to
              understand your specific needs and craft a customized digital
              marketing strategy that aligns perfectly with your goals
            </li>
            <li>
              <span className="text-xl font-bold">Data-Driven Decisions: </span>{" "}
              We don't just throw things at the wall and hope they stick. We use
              data analytics to track campaign performance, measure ROI, and
              continuously optimize your strategy for maximum impact.
            </li>
            <li>
              <span className="text-xl font-bold">Agile Approach: </span>Expert
              lighting techniques create the desired ambiance and highlight key
              elements of the decor, creating a truly captivating atmosphere.
            </li>

            <li>
              <span className="text-xl font-bold">
                Direct Access to Experts:{" "}
              </span>{" "}
              You won't get lost in the shuffle at One Touch Agency. You'll have
              direct access to our team of experienced digital marketing
              professionals who are passionate about your success.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-4xl font-bold mt-5">
            Ready to Take Your Brand Online?
          </h3>
          <h3 className="text-xl sm:text-2xl font-bold mt-5 mb-5">
            Contact One Touch Agency today and let's discuss your digital
            marketing goals. We'll create a customized strategy that leverages
            the power of SEO, SEM, SMM, SMO, PPC, and content marketing to
            propel your brand to the forefront of the digital landscape.
            Together, we'll turn your online presence into a powerful engine for
            growth.
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

export default DigitalMarketing;
