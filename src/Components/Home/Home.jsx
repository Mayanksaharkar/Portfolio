import PageContainer from "../PageContainer";
import Portfolio from "../Portfolio/Portfolio";
import { CardContainer } from "../ui/3d-card";
import Svg from "./Svg";
function Home() {
  return (
    <PageContainer>
      <section className='z-0 '>
        {/* <div className='flex  max-w-screen-xl px-4 py-8 mx-auto lg:justify-between lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12'> */}
        <div className="flex justify-between ">
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  '>
              <span className='text-neutral'>🙋‍♂️ Hi, I&apos;m</span>
              <span className='text-primary'> Mayank</span>
            </h1>
            <p className='max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl '>
              Data detective 🕵️ & web builder 🏗️, turning numbers into magic on
              the screen.
            </p>
            <button className='btn  bg-primary text-base-100 shadow-base-300 hover:text-primary shadow-lg border-none rounded-lg lg:text-2xl md:text-md sm:text-sm'>
              Browse PortFolio
            </button>
          </div>
          <CardContainer className='hidden  lg:mt-0 lg:col-span-5 lg:flex'>
            <div>
              <Svg />
            </div>
          </CardContainer>
        </div>
      </section>
      <Portfolio />
    </PageContainer>
  );
}

export default Home;
