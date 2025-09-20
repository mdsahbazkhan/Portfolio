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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let's Talk
          </h2>
          <p className="text-gray-300 text-lg">
            I'm open to work on exciting projects! Feel free to reach out
            anytime, I will respond as soon as possible.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer">
              <img src={mail_icon} alt="Email" className="w-5 h-5" />
              <p>amdsahbaz19@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer">
              <img src={call_icon} alt="Phone" className="w-5 h-5" />
              <p>+91-6207785264</p>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl hover:scale-105 transition-transform cursor-pointer">
              <img src={location_icon} alt="Location" className="w-5 h-5" />
              <p>Hyderabad-18, India</p>
            </div>
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
            placeholder="Your Email"
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="mt-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 py-2 rounded-xl text-white font-bold shadow-lg hover:scale-105 transform transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
