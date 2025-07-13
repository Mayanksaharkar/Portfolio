import React, { memo } from "react";
import OptimizedImage from "../ui/OptimizedImage";

/* eslint-disable react/prop-types */
const Card = memo(function Card({ img, title, description, gh, loading = "lazy" }) {
  const fallbackComponent = (
    <div className="w-full lg:min-h-64 h-44 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <svg 
          className="w-12 h-12 mx-auto mb-2 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    </div>
  );

  return (
    <div className="card bg-transparent backdrop-blur-sm border-b border-primary shadow-sm shadow-primary w-full sm:w-fit rounded-lg">
      <div className="group relative w-full sm:w-96 rounded-t-lg overflow-hidden">
        <OptimizedImage
          src={img}
          alt={title || "Project Image"}
          className="w-full lg:min-h-64 h-44 object-cover rounded-t-lg group-hover:scale-110 transition-all duration-500 ease-in-out will-change-transform"
          loading={loading}
          fallbackComponent={fallbackComponent}
          skeletonClassName="rounded-t-lg"
          style={{
            minHeight: '176px', // Prevents layout shift
          }}
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
