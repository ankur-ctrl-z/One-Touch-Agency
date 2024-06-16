import React from "react";
import TradeShow1 from "../../assets/All-Services-images/Trade-Show/Trade-Show-1.jpg";
import TradeShow2 from "../../assets/All-Services-images/Trade-Show/Trade-Show-2.jpg";
import TradeShow3 from "../../assets/All-Services-images/Trade-Show/Trade-Show-3.jpg";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const TradeShow = () => {
  return (
    <div className="p-5 py-28 sm:py-32 bg-gray-900 w-full min-h-screen text-white">
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 mt-5 md:mt-0"
          src={TradeShow1}
          alt="Trade Show 1"
        />
        <div className="text-content w-full md:w-3/5">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            One Touch Agency: Your All-in-One Partner for Crushing Trade Shows
            in India
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Struggling to Make a Splash at Trade Shows in India?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Ever feel like your booth gets lost in the sea of generic displays
            at Indian trade shows? You pour your heart and resources into
            showcasing your brand but struggle to generate the leads and sales
            you deserve.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            What if there was a better way to Shine at the Next Big Trade Show?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Here at One Touch Agency, we know the power of a well-executed trade
            show presence. It's your chance to connect with potential customers
            face-to-face, showcase your latest innovations, and solidify your
            brand as a leader in the industry.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            But are you feeling overwhelmed by the logistics and details? Don't
            let trade show anxiety hold you back! We can help transform your
            next exhibition into a resounding success.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            The Indian trade show scene is booming. From established giants like
            the India Expo Centre & Mart to regional powerhouses like the Bombay
            Exhibition Centre, there's a platform for every industry. But
            navigating this exciting landscape can be overwhelming. That's where
            One Touch Agency steps in. We're your one-stop shop for trade shows
            and exhibitions across India, helping you make a lasting impression
            and achieve your business goals.
          </p>
        </div>
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <div className="text-content w-full md:w-3/5 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Dominate Trade Shows in India
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Gone are the days of scrambling for last-minute booths and generic
            displays. One Touch Agency offers a comprehensive suite of services
            to transform your trade show presence. We start by understanding
            your unique needs and target audience. Whether you're showcasing
            groundbreaking innovations or established products, we craft a
            customized strategy to maximize impact.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Book Trade Shows with Confidence
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            With our extensive network of trade show organizers across India
            (from Mumbai (590) to Chennai and beyond), we help you identify the
            perfect platform to reach your ideal customers. From
            industry-specific exhibitions to mega trade fairs, we'll guide you
            through the selection process, ensuring you get the most out of your
            investment.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Show-Stopping Trade Show Displays & Awesome Trade Show Displays
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Forget cookie-cutter booths! Our in-house design team creates
            awesome trade show displays that will grab attention and leave a
            lasting impression. We don't just offer generic trade show banner
            stands or podiums. We create immersive experiences that showcase
            your brand and products dynamically and engagingly.
          </p>
        </div>
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0 order-1 md:order-2"
          src={TradeShow2}
          alt="Trade Show 2"
        />
      </div>
      <div className="fun-row flex flex-col md:flex-row mb-10 pb-5 border-b border-gray-500 border-dashed">
        <img
          className="w-full md:w-2/5 rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          src={TradeShow3}
          alt="Trade Show 3"
        />
        <div className="text-content w-full md:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Beyond the Booth: Trade Show Success Strategies
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Our expertise goes beyond stunning visuals. We help you develop a
            winning pre-show strategy to generate buzz and build anticipation.
            We'll also train your team on effective communication and
            lead-generation techniques, ensuring you convert every interaction
            into a valuable connection.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Trade Show Center Expertise
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            Whether you're exhibiting in a dedicated trade show centre or a
            convention hall, we ensure your booth adheres to all regulations and
            maximizes its allotted space. We handle logistics, permitting, and
            all the nitty-gritty details, allowing you to focus on what matters
            most – connecting with potential customers.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Measurable Results
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-5">
            We go beyond simply creating a dazzling display. We track key
            metrics to measure the success of your trade show participation.
            This allows us to refine your strategy for future events, ensuring
            you continually improve your return on investment.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-5 font-bold">
            Partner with One Touch Agency and leave your mark on the Indian
            trade show landscape. Contact us today and let's discuss how we can
            elevate your brand and propel your business forward!
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

export default TradeShow;
