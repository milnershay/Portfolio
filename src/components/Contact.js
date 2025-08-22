import React from "react";

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-light-bg rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.2)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Beer-Sheva,+Israel&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-dark-bg relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-semibold text-light-text tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Beer Sheva, Israel
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-semibold text-light-text tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:milnershay@gmail.com" className="text-primary leading-relaxed">
                milnershay@gmail.com
              </a>
              <h2 className="font-semibold text-light-text tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+972 54-458-5677</p>
            </div>
          </div>
        </div>
        <form
          data-netlify="true"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-light-text sm:text-4xl text-3xl mb-1 font-medium font-heading">
            Let's Work Together
          </h2>
          <p className="leading-relaxed mb-5 text-light-text">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-light-bg rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-light-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-light-bg rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-light-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-light-bg rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-light-text py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}