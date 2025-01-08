import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#0b0c13] text-white pt-[5rem] pb-[5rem]">
      <div className="text-center mb-[3rem]">
        <p className="heading__mini">Get in Touch</p>
        <h1 className="heading__primary">
          Contact <span className="text-yellow-300">Me</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto max-w-[700px]">
        <form
          action="dincer.velioglu@gmail.com" // Replace with your email
          method="POST"
          className="grid gap-[1.5rem]"
        >
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
          />
          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
          />
          {/* Subject Field */}
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            required
            className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
          />
          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
          ></textarea>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
