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
    <section
      id="Contact"
      className="py-20 px-4 md:px-16 lg:px-24 text-white relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-purple-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 relative z-10">
        {/* Left Info */}
        <motion.div
          className="md:w-4/12 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
            Let's Talk
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm open to work on exciting projects! Feel free to reach out
            anytime, I will respond as soon as possible.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            <a
              className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700"
              href="mailto:amdsahbaz19@gmail.com?subject=Hello%20Sahbaz&body=Hi%20Sahbaz,%20I%20would%20like%20to%20get%20in%20touch%20regarding..."
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <img
                  src={mail_icon}
                  alt="Email"
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                  amdsahbaz19@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+916207785264"
              className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <img
                  src={call_icon}
                  alt="Phone"
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                  +91-6207785264
                </p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps?q=17.451769350940094,78.40719182064657"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <img
                  src={location_icon}
                  alt="Location"
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                  Hyderabad-18, Telangana, India
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={onSubmit}
          className="md:w-5/12 flex flex-col gap-5 bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            className="p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message Here...."
            className="p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center items-center px-8 py-4 mt-3 rounded-xl font-bold shadow-lg
             bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500
             transform hover:scale-105 hover:-translate-y-1
             focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800
             transition-all duration-300"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
