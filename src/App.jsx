import React, { useState, useEffect, lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import SplashScreen from "./Components/SplashScreen";
import AnimatedCursor from "react-animated-cursor";

// Lazy load route components for code splitting
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Education = lazy(() => import("./Components/Education/Education"));
const Projects = lazy(() => import("./Components/Projects/Projects"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="loading loading-spinner loading-lg text-primary"></div>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/projects",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
          ),
        },
        {
          path: "/skills",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Skills />
            </Suspense>
          ),
        },
        {
          path: "/education",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Education />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  if (showSplash) {

    return( 
    <div className="flex items-center justify-center min-h-[100dvh] bg-primary ">
    <SplashScreen onFinish={() => setShowSplash(false)} />
    </div>
    );
  }

  return (
    <>
      {isDesktop && (
        <AnimatedCursor
          innerSize={12}
          outerSize={32}
          color="101, 135, 255"
          outerColor="101, 135, 255"
          outerAlpha={0.3}
          innerScale={1}
          outerScale={2}
          clickables={[
            "a",
            "button",
            ".link",
            ".link-2",
            ".link-3",
            ".link-4",
            ".link-5",
            ".link-6",
          ]}
        />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
