import React, { memo } from "react";

/* eslint-disable react/prop-types */
const Card = memo(function Card({ img, title, description, gh, loading = "lazy" }) {
  return (
    <div className="card bg-transparent backdrop-blur-sm border-b border-primary shadow-sm shadow-primary w-full sm:w-fit rounded-lg">
      <div className="group relative w-full sm:w-96 rounded-t-lg overflow-hidden">
        <img
          className="w-full bg-blue-400 lg:min-h-64 h-44 object-cover rounded-t-lg hover:scale-110 duration-300"
          src={img}
          alt={title || "Project Image"}
          loading={loading}
          decoding="async"
        />
      </div>

      <div className="lg:py-3 py-2 px-4 flex justify-between flex-row w-full">
        <div>
          <a
            href={gh}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:card-title text-sm font-semibold"
          >
            {title || "Untitled Project"}
          </a>
          <p className="text-xs text-base-content opacity-70">
            {description || "No description available."}
          </p>
        </div>

        <div>
          <a
            className="rounded-full duration-300"
            href={gh}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-full h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-6 h-6 hover:scale-125 duration-300"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2... (same path)" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Card;
