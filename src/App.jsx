import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import SplashScreen from "./Components/SplashScreen";
import AnimatedCursor from "react-animated-cursor";

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
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
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
