import React from "react";
import PageContainer from "../PageContainer";
import { memo } from "react";
// import profilePlaceholder from "../../assets/";
import profile from "../../assets/profile.png"
const About = memo(function About() {
  return (
    <PageContainer>
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Photo Section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg  ">
                <img
                  src={profile}
                  alt="Mayank Saharkar - Profile Photo"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 "></div>
            </div>
            
            {/* Quick Info Cards */}
            <div className="mt-6 space-y-3 w-full max-w-xs">
             
              <div className="bg-base-200 rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">Projects</div>
                <div className="font-semibold text-primary">10+</div>
              </div>
              <div className="bg-base-200 rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-semibold text-primary">India</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-secondary mb-2">
              Hi, I'm Mayank
            </h1>
            <p className="text-xl font-medium text-primary mb-8">
              Software Developer | Tech Enthusiast
            </p>

            <div className="space-y-4 mb-8">
              <p>
                As a software developer, I focus on building full-stack
                applications that are efficient, maintainable, and
                user-friendly.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mayank-saharkar-508038275"
                className="bg-base-300 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/Mayanksaharkar"
                className="bg-base-300 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
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
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://x.com/MayankSaharkar"
                className="bg-base-300 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </PageContainer>
  );
});

export default About;
