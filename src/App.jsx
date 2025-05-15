import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { AnimatePresence } from "framer-motion";
import Layout from "./Components/Layout";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
AnimatePresence;
function App() {
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

  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
