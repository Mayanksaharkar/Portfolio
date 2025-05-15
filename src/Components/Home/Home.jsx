import { use } from "react";
import PageContainer from "../PageContainer";
import Skills from "../Skills/Skills";
import { CardContainer } from "../ui/3d-card";
import Svg from "./Svg";
import { useNavigate } from "react-router-dom";
import Education from "../Education/Education";
function Home() {
  const nav = useNavigate();
  return (
    <PageContainer>
      <section className="z-40 min-h-[90dvh] flex flex-col justify-center items-center bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div className="px-4 lg:px-8 mt-4 lg:mt-0">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              <span className="text-neutral">🙋‍♂️ Hi, I&apos;m</span>
              <span className="text-primary"> Mayank</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
              Code that works. Solutions that matter
            </p>
            <button
              className="btn bg-primary text-base-100 shadow-base-300 hover:text-primary shadow-lg border-none rounded-lg lg:text-2xl md:text-md sm:text-sm"
              onClick={() => nav("/projects")}
            >
              Browse Projects
            </button>
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
    </ PageContainer>
  );
}

export default Home;
