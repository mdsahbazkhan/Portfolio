import React from "react";
import Profile_img from "../../assets/Profile_img.png";

function About() {
  return (


<div id="About" className=" flex flex-col items-center justify-center gap-20 md:gap-10 lg:gap-20 mt-28 md:mt-28 mx-4 lg:mx-20 ">
  <div className="about-title relative   " >
    <h1 className=" text-4xl md:text-5xl font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text ">About Me</h1>
  </div>
  <div className="about-section flex flex-col md:flex-row gap-10 md:gap-20 " >
{/*     <div className="about-left">
      <img src={Profile_img} alt="Your Image" className="rounded-md h-full w-96" />
    </div> */}
    <div className="about-right mt-10 md:mt-0 flex flex-col gap-10 ">
      <div className="about-para">
        <p className="text-base md:text-lg max-w-5xl">
         Hey! I'm [Sahbaz Khan], and I'm all about making responsive websites awesome. I know my way around HTML, CSS, JavaScript, React JS, and I love bringing designs to life on the web. I'm passionate about creating user-friendly experiences that make people say 'wow'. Take a look at my projects below to see what I've been up to!
        </p>
      </div>
       <div className="about-skills ">
        <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105 max-w ">
          <p className="text-base md:text-lg font-semibold min-w-28">HTML , CSS & Tailwind CSS</p>
          <hr className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500" style={{ width: "80%" }} />
          
        </div>
        <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
          <p className="text-base md:text-lg font-semibold min-w-28">JavaScript</p>
          <hr className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500" style={{ width: "70%" }} />
          
        </div>
        <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
          <p className="text-base md:text-lg font-semibold min-w-28">React JS</p>
          <hr className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500" style={{ width: "60%" }} />
        </div>
        
      </div>
      <div className="about-achievements flex flex-col items-center justify-center w-full my-6 md:my-10 gap-6 md:gap-10 lg:gap-20">
        <div className="about-achievement flex flex-col items-center gap-2 md:gap-4 transition duration-300 transform hover:scale-105 my-auto m-auto">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
            10+
          </h1>
          <p className="text-sm md:text-base font-semibold">PROJECTS COMPLETED</p>
          
        </div>
       
      </div>
    </div>
  </div>
</div>

  );
}

export default About;
