import React, { useState } from 'react';
import project_data from "../../assets/Project_data"

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
    
    <div id="Projects"className='myproject flex flex-col items-center justify-center gap-20 mt-32 gap-y-8'>
        <div className="myproject-title  ">
            <h1 className='text-4xl  md:text-5xl font-bold relative flex flex-col items-center gap-4 transition duration-300     bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text  '>My Projects</h1>
        </div>
       <div className="myproject-container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-2">
            {visibleProjects.map((work,index)=>(
                   
                    <a key={index} href={work.p_href} target="_blank" rel="noopener noreferrer" className='bg-gray-900 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 transform hover:scale-105 '>
            <img  className="  hover: duration-300 group overflow-hidden relative after:duration-500 before:duration-500 hover:scale-105   hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-100 after:absolute  after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-2 after:right-16 after:w-12 after:h-12  before:absolute before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-72 w-80  bg-neutral-900 rounded-2xl outline  "  src={work.p_img} alt="" />
            <div className="relative bottom-0 left-0 right-0 bg-gray-900 text-white p-2 text-center rounded-b-2xl">{work.p_name}</div>
          </a>
            ))}
        </div>
        {!allPhotosDisplayed && (
        <button onClick={toggleShowMore} className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-2 after:rounded-full after:blur-lg hover:scale-105">
  Show more
</button>
 )}

      
    </div>
  )
}

export default Projects
