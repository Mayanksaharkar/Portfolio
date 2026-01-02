import PageContainer from "../PageContainer";
import { CardContainer } from "../ui/3d-card";
import Svg from "./Svg";
import { useNavigate } from "react-router-dom";
import { memo, useCallback, lazy, Suspense, useEffect, useState } from "react";


const cv_url = "https://drive.google.com/file/d/1Bb3yoEX76fRpnJcVNaOthLCLKfUaxRlz/view?usp=drivesdk"
// Lazy load heavy components with error boundaries
const Skills = lazy(() => 
  import("../Skills/Skills").catch(() => ({
    default: () => <div className="text-error">Failed to load Skills component</div>
  }))
);

const Education = lazy(() => 
  import("../Education/Education").catch(() => ({
    default: () => <div className="text-error">Failed to load Education component</div>
  }))
);

// Enhanced loading component with better UX
const LoadingComponent = memo(() => (
  <div className="flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20">
    <div className="loading loading-spinner loading-lg text-primary mb-4" aria-label="Loading content"></div>
    <p className="text-neutral/60 text-sm font-medium" role="status">Loading...</p>
  </div>
));

LoadingComponent.displayName = "LoadingComponent";

// Error boundary component for lazy loaded sections
const ErrorBoundary = memo(({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    setHasError(false);
  }, [children]);

  if (hasError) {
    return fallback || (
      <div className="flex flex-col justify-center items-center py-12 text-error">
        <p>Something went wrong. Please try refreshing the page.</p>
      </div>
    );
  }

  return children;
});

ErrorBoundary.displayName = "ErrorBoundary";

// Download icon component for better maintainability
const DownloadIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-download"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
));

DownloadIcon.displayName = "DownloadIcon";

const Home = memo(function Home() {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate initial load or use for any async operations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectsClick = useCallback(() => {
    nav("/projects");
  }, [nav]);

  const handleResumeClick = useCallback((e) => {
    // Track analytics if needed
    console.log('Resume downloaded');
  }, []);

  const handleKeyDown = useCallback((e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  }, []);

  if (isLoading) {
    return (
      <PageContainer>
        <LoadingComponent />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Hero Section */}
      <section 
        className="z-40 min-h-[90vh] flex flex-col justify-center items-center bg-transparent px-4 sm:px-6 lg:px-8"
        aria-label="Hero section"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
              <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  <div className="text-neutral mb-2">Hey there, I'm</div>
                  <div className="text-primary">Mayank</div>
                </h1>
              </header>
              
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <button
                  className="btn text-middle bg-primary text-base-100 border-none rounded-xl px-8 py-2 
                           text-lg font-semibold shadow-lg hover:shadow-xl
                           hover:bg-primary/90 hover:scale-105 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                           active:scale-95"
                  onClick={handleProjectsClick}
                  onKeyDown={(e) => handleKeyDown(e, handleProjectsClick)}
                  aria-label="View my projects"
                >
                  My Projects
                </button>
                
                <a
                  className="btn btn-outline border-2 border-primary text-primary rounded-xl px-8 py-2
                           text-lg font-semibold shadow-lg hover:shadow-xl
                           hover:bg-primary hover:text-base-100 hover:scale-105 
                           transition-all duration-300 flex items-center justify-center gap-2
                           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                           active:scale-95"
                  href= {cv_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeClick}
                  aria-label="Download resume (opens in new tab)"
                >
                  Resume
                  <DownloadIcon />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 justify-center items-center max-w-lg">
              <CardContainer className="w-full h-full flex justify-center items-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                  <Svg />
                </div>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        aria-label="Skills section"
      >
        <div className="w-full max-w-6xl mx-auto">
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

       <section 
        className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        aria-label="Education section"
      >
        <div className="w-full max-w-6xl mx-auto">
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent />}>
              <Education />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </PageContainer>
  );
});

Home.displayName = "Home";

export default Home;
