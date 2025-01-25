import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    _subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      access_key: "cced64ce-1930-4d06-a440-f255a430a9e4",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        _subject: "",
        message: "",
      });
    } else {
      // Handle submission error if needed
    }
  };

  const handleNewSubmission = () => {
    setIsSubmitted(false);
  };

  return (
    <div id="contact" className="bg-[#0b0c13] text-white pt-[5rem] pb-[5rem]">
      <div className="text-center mb-[3rem]">
        <p className="heading__mini">Get in Touch</p>
        <h1 className="heading__primary">
          <span className="text-yellow-300">Get in Touch</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto max-w-[700px]">
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-500 mb-4">
              Your message has been sent successfully!
            </p>
            <button
              onClick={handleNewSubmission}
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-[1.5rem]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="_subject"
              placeholder="Subject"
              value={formData._subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
