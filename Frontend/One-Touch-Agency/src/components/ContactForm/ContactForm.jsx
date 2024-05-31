import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState('');


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleEmailChange = function(event) {
    setEmail(event.target.value);
    setError('')
  }

  const handleServicesChange = function(event) {
    setServices(event.target.value)
  }

  const handleMessagesChange = function(event) {
    setMessage(event.target.value)
  }

  const handleButtonClick = async function() {
    if (!validateEmail(email)) {
      setError('Incorrect email formate.')
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/save-email', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, message, services})
      });

      if (response.ok) {
        console.log('Data saved successfully!')
        setEmail('');
        setMessage('');
        setServices('');
        setError('')
      } else {
        const responseData = await response.json();
        console.log('Response data:', responseData);

        if (responseData.error == "Email already exists") {
          setError('Email already exists');
        } else {
          console.log('Failed to save email data', responseData.error);
        }
      }
    } catch (error) {
      console.log('An error occurred while saving the data:', error);
    }
  }

  return (
    <div className="text-gray-600 body-font relative bg-gray-900">
        <hr style={{ border: '0.5px solid yellow', width: '100%' }} />
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
         width="100%"
         height="100%"
         className="absolute inset-0"
         frameBorder="0"
         title="map"
         marginHeight="0"
         marginWidth="0"
         scrolling="no"
         src="https://maps.google.com/maps?q=18.95541174712792,72.81646177585895&hl=en&z=14&output=embed"
         style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 font-bold">MUMBAI</p>
              <br />
              <span className='-mt-2'>147-E,1st Floor,Panchratna <br></br>
              Building, Opera
              House, Mumbai-
              400004</span>
              </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">contact@onetouchagency.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+91 7021377482</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg">
          <h1 className="text-gray-900 text-2xl mb-2 font-bold title-font pl-5">GET IN TOUCH</h1>
          <div className="relative mb-4 pl-5 pr-5">
            <label htmlFor="email" className="leading-7 text-lg text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full bg-white rounded border border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 pl-5 pr-5">
            <label htmlFor="services" className="leading-7 text-lg text-gray-600">Services</label>
            <input
              type="text"
              id="services"
              name="services"
              onChange={handleServicesChange}
              className="w-full bg-white rounded border border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 pl-5 pr-5 w-full">
            <label htmlFor="message" className="leading-7 text-lg text-gray-600 w-full">Messages</label>
            <input
              id="message"
              name="message"
              onChange={handleMessagesChange}
              className="w-full bg-white rounded border border-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <button onClick={handleButtonClick} className="text-white bg-yellow-500 border-0 pl-5 pr-5 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg mr-5 ml-5 overflow-hidden">Send</button>
           {/* Highlighted Line */}
          <div style={{ minHeight: '1.5rem' }}>
          {error && <p className="text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;





