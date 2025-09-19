import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Check if any of the required fields are empty
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill out all the fields before submitting.");
      return; // Prevent form submission
    }

    formData.append("access_key", "16fb5382-5466-49c5-82e6-95b7789ef82b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="Contact"
      className="contact flex flex-col items-center justify-center gap-10 sm:gap-10 md:gap-20 mx-2 sm:mx-4 md:mx-4 lg:mx-20 my-20"
    >
      <div className="contact-title">
        <h1 className="text-4xl md:text-5xl font-bold relative flex flex-col items-center transition duration-300 px-4 bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
          Get in touch
        </h1>
      </div>
      <div className="contact-section flex flex-col md:flex-row  sm:gap-20 md:gap-20 w-full px-4 items:center justify-center gap-8  md:w-auto">
        <div className="contact-left flex flex-col gap-4 w-full ">
          <h1 className="font-bold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text text-4xl">
            Let's talk
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            I'm currently available to take on projects, so feel free to send me
            a message about anything that you want me to work on. You can
            contact me anytime.
          </p>
          <div className="contact-details flex flex-col gap-4 text-gray-300 text-lg">
            <div className="contact-detail flex items-center gap-4">
              <img src={mail_icon} alt="Mail Icon" />
              <p>amdsahbaz19@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center gap-4">
              <img src={call_icon} alt="Call Icon" />
              <p>+91-6207785264</p>
            </div>
            <div className="contact-detail flex items-center gap-4">
              <img src={location_icon} alt="Location Icon" />
              <p>Hyderabad-18, India</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-right flex flex-col items-start gap-2 w-full "
        >
          <label
            className="text-gray-300 text-xl md:text-2xl font-semibold"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="border-none h-12 md:h-16 w-full md:w-96 pl-4 bg-gray-800 text-xl md:text-2xl font-Outfit border border-white border-opacity-10 rounded-xl shadow-4xl  shadow-md backdrop-blur-lg"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label
            className="text-gray-300 text-xl md:text-2xl font-semibold"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="border-none h-12 md:h-16 w-full md:w-96 pl-4 bg-gray-800 text-xl md:text-2xl font-Outfit border border-white border-opacity-10 rounded-xl shadow-4xl  shadow-md backdrop-blur-lg"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label
            className="text-gray-300 text-xl md:text-2xl font-semibold"
            htmlFor="message"
          >
            Write your message here
          </label>
          <textarea
            className="w-full md:w-96 p-4  bg-gray-800 text-xl md:text-2xl font-Outfit border border-white border-opacity-10 rounded-xl shadow-4xl  shadow-md backdrop-blur-lg "
            name="message"
            placeholder="Enter your message"
            rows="6"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-orange-500 hover:to-blue-500 py-3 px-6 rounded-2xl shadow-xl cursor-pointer font-bold transition transform hover:scale-105"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
