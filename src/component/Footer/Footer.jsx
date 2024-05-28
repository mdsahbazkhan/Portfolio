import React from "react";
// import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="border-y border-white border-opacity-10 rounded-lg  bg-opacity-5 shadow-xl backdrop-blur-lg  ">
    <div className="max-w-screen-xl mx-auto p-2 lg:p-2 flex flex-col sm:flex-row items-center justify-between">
        {/* <div className="mx-auto sm:my-">
          <img
            className="mx-auto    mr-4 "
            src={Logo}
            alt="Logo"
            style={{ width: "115px" }}
          />
        </div> */}
        <span className="text-xl  sm:text-center m-auto">
          © 2024 . All Rights Reserved.
        </span>

        <div className="flex  space-x-5 sm:justify-center sm:mt-0 m-auto">
          <a
            href="https://github.com/mdsahbazkhan"
            className="text-white-200 hover:text-blue-500 transform transition duration-500 ease-in-out hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sahbaz-khan-a95680262"
            className="text-white-200 hover:text-blue-500 transform transition duration-500 ease-in-out hover:scale-105 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="w-6 h-10"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only gap">LinkedIn account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
