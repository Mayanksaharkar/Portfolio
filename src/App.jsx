import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import ScrollToTop from "./Components/ScrollToTop";
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
          path: "/portfolio",
          element: <Portfolio />,
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
