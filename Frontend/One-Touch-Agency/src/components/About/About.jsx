const About = () => {
  return (
    <div className="text-gray-600 body-font overflow-hidden bg-gray-900">
        {/* Break Line */}
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        </div>
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white flex justify-center pt-12">
            About Us
          </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          
          <div className="lg:w-1/4 w-full lg:h-auto h-32 object-cover object-center rounded-lg mb-6 lg:mb-0">
            <h1 className="text-white text-center text-2xl">Founder</h1>
            <img alt="founder" className="w-full h-full" src="https://dummyimage.com/200x200" />
          </div>

          <div className="lg:w-1/4 w-full lg:h-auto h-32 object-cover object-center rounded-lg mb-6 lg:mb-0 lg:pl-6 pt-12">
            <h1 className="text-white text-center text-2xl">Manager</h1>
            <img alt="manager" className="w-full h-full" src="https://dummyimage.com/200x200" />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 pl-5">
            <div className="flex mb-4">
              <h1 className="text-white ml-3 text-4xl">Make Your Event Idea <br /> Come True</h1>
            </div>
            <p className="leading-relaxed text-white pl-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus magni exercitationem ea, amet voluptatibus cumque natus rem nam! Odit natus corrupti corporis voluptatum, eum provident dolorum? Ab autem eveniet delectus perferendis quidem deserunt, saepe consectetur aliquam dolorem sint reiciendis minus natus velit rem nam maiores fugiat soluta explicabo? Fuga, earum?</p>

            {/* Break Line */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            </div>
            <div className="flex">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


