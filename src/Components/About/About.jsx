import React from "react";
import PageContainer from "../PageContainer";

function About() {
  return (
    <PageContainer>
      <main class="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div class="grid md:grid-cols-3 gap-12">
          <div class="md:col-span-1 flex flex-col items-center">
            <div class="w-full max-w-xs shadow-base-300 border-4 border-base-300 aspect-square rounded-full overflow-hidden shadow-lg mb-6">
              <img
                src="https://res.cloudinary.com/defcox81s/image/upload/v1747334932/ChatGPT_Image_May_16_2025_12_06_31_AM_y6dme7.png"
                alt="Your Photo"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <div class="md:col-span-2">
            <h1 class="text-4xl font-bold text-secondary mb-2">
              Hi, I'm Mayank
            </h1>
            <p class="text-xl font-medium text-primary mb-8">
              Software Developer | Problem Solver | Tech Enthusiast
            </p>

            <div class="space-y-4 mb-8">
              <p>
                As a software developer, I focus on building full-stack
                applications that are efficient, maintainable, and
                user-friendly.
              </p>
            </div>

            <div class="flex space-x-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mayank-saharkar-508038275"
                class="bg-base-300 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/Mayanksaharkar"
                class="bg-base-300 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://x.com/MayankSaharkar"
                class="bg-base-300 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
}

export default About;
