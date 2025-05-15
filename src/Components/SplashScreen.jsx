import React, { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        onFinish(); // Trigger onFinish after fade-out
      }, 1000); // Match this duration with the CSS animation
    }, 2000); // Display splash screen for 2 seconds before fading out

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`flex items-center justify-center h-screen bg-primary text-white font-sans transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="lg:text-4xl text-xl font-bold">Welcome to My Portfolio</h1>
    </div>
  );
}

export default SplashScreen;