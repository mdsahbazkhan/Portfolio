"use client";
import { motion } from "framer-motion";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
export default function Contact() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    formData.append("access_key", "16fb5382-5466-49c5-82e6-95b7789ef82b");
    const object = Object.fromEntries(formData);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message || "Message sent successfully!");
      e.target.reset();
    }
  };

  return (
    <section id="Contact" className="py-20 px-4 md:px-16 lg:px-24 text-white">
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-purple-500 text-center md:text-left"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        {/* Left Info */}
        <motion.div
          className="md:w-4/12 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-800 dark:from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let's Talk
          </h2>
          <p className="text-gray-100 text-lg">
            I'm open to work on exciting projects! Feel free to reach out
            anytime, I will respond as soon as possible.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            <a
              className="flex items-center gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              href="mailto:amdsahbaz19@gmail.com?subject=Hello%20Sahbaz&body=Hi%20Sahbaz,%20I%20would%20like%20to%20get%20in%20touch%20regarding..."
            >
              <img src={mail_icon} alt="Email" className="w-5 h-5" />
              <p>amdsahbaz19@gmail.com</p>
            </a>
            <a
              href="tel:+916207785264"
              className="flex items-center gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <img src={call_icon} alt="Phone" className="w-5 h-5" />
              <p>+91-6207785264</p>
            </a>
            <a
              href="https://www.google.com/maps?q=17.451769350940094,78.40719182064657"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <img src={location_icon} alt="Location" className="w-5 h-5" />
              <p>Hyderabad-18, Telangana, India</p>
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={onSubmit}
          className="md:w-4/12 flex flex-col gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message Here...."
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="inline-flex  justify-center items-center px-6 py-3 mt-3 rounded-xl font-bold shadow-lg
             bg-purple-600 text-white hover:bg-purple-500  transform
             focus:outline-none focus:ring-2 focus:ring-purple-400
             dark:bg-purple-800 dark:hover:bg-purple-700
             transition duration-300"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
