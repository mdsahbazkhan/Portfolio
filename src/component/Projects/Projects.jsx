



import React, { useState } from 'react';
import project_data from "../../assets/Project_data";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Determine the number of images to display based on the showMore state
  const numImagesToShow = showMore ? project_data.length : 6;
  const visibleProjects = project_data.slice(0, numImagesToShow);

  // Check if all photos are displayed
  const allPhotosDisplayed = visibleProjects.length === project_data.length;

  return (
    <div id="Projects" className="myproject flex flex-col items-center justify-center gap-20 mt-32 gap-y-8">
      <div className="myproject-title">
        <h1 className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-4 bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
          My Projects
        </h1>
      </div>
      <div className="myproject-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-2">
        {visibleProjects.map((work, index) => (
          <a
            key={index}
            href={work.p_href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative transform transition duration-500 hover:scale-105 border border-white border-opacity-10 rounded-lg shadow-4xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-lg bg-opacity-5"
          >
            <div className="absolute inset-4  opacity-30 pointer-events-none rounded-lg"></div>
            <img
              className="rounded-lg w-72 h-80 object-cover"
              src={work.p_img}
              alt=""
            />
          </a>
        ))}
      </div>
      {!allPhotosDisplayed ? (
        <button
          onClick={toggleShowMore}
          className="relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:border-rose-300 hover:text-rose-300 before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:w-20 after:h-20 after:content-[''] after:right-8 after:top-2 after:bg-rose-300 after:rounded-full after:blur-lg"
        >
          Show more
        </button>
      ) : (
        <button
          onClick={toggleShowMore}
          className="relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:border-rose-300 hover:text-rose-300 before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:w-20 after:h-20 after:content-[''] after:right-8 after:top-2 after:bg-rose-300 after:rounded-full after:blur-lg"
        >
          Show less
        </button>
      )}
    </div>
  );
}

export default Projects;
