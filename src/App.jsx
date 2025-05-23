import React, { useState } from "react";
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
   <AnimatedCursor
        innerSize={12}
        outerSize={32}
        color="101,135,255"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
