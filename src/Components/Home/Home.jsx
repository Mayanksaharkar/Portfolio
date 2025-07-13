import PageContainer from "../PageContainer";
import Skills from "../Skills/Skills";
import { CardContainer } from "../ui/3d-card";
import Svg from "./Svg";
import { useNavigate } from "react-router-dom";
import Education from "../Education/Education";
import { memo, useCallback } from "react";

const Home = memo(function Home() {
  const nav = useNavigate();
  
  const handleProjectsClick = useCallback(() => {
    nav("/projects");
  }, [nav]);

  return (
    <PageContainer>
      <section className="z-40 min-h-[80dvh] mb-16 flex flex-col justify-center items-center bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="lg:px-0 px-4  mt-4 lg:mt-0">
            <h1 className="max-w-2xl mb-4  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              <span className="text-neutral my-1">Hey there, I'm</span>
              <span className="text-primary my-4  "> Mayank</span>
            </h1>
            <div className="max-w-2xl  mb-6 font-light text-neutral flex-row  lg:flex-col space-y-2 lg:space-y-4">
              <button
                className="btn mr-2 bg-primary my-2 text-base-100 shadow-base-300 hover:text-primary shadow-lg border-none rounded-lg lg:text-2xl md:text-md sm:text-sm"
                onClick={handleProjectsClick}
              >
                My Projects
              </button>
              <a
                className="btn btn-outline my-2 border-primary text-primary hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary shadow-base-300  shadow-lg rounded-lg lg:text-2xl md:text-md sm:text-sm lg:ml-2"
                href="https://drive.google.com/file/d/11BJs2lO8AhMXMnKjl3QEdvZB-gARvvJ8/view?usp=sharing"
                target="_blank"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download-icon lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <CardContainer className="hidden lg:flex justify-center">
            <div className="w-96 h-96">
              <Svg />
            </div>
          </CardContainer>
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="">
          <Skills />
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="">
          <Education />
        </div>
      </section>
    </PageContainer>
  );
});

export default Home;
