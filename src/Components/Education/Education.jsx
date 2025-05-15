import PageContainer from "../PageContainer";

const educationList = [
  {
    degree: "B.Tech in Data Science",
    institution: "G.H Raisoni College of Engineering and Management",
    year: "2023 - 2026",
    details: "CGPA: 7.6/10",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Proyadarshini Polytechnic , Nagpur",
    year: "2020 - 2023",
    details: "Percentage: 82% ",
  },
  {
    degree: "High School",
    institution: "ST. M. B. High School, Nagpur",
    year: "2020",
    details: "Percentage: 81% ",
  },
];

function Education() {
  return (
    <PageContainer>
      <div className="px-4 py-12">
        <h3 className="lg:text-4xl text-xl font-extrabold text-primary mb-4 text-left px-3">
          Education
        </h3>
        <div className="relative  mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded"></div>

          <ul className="space-y-20">
            {educationList.map((edu, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <li
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 items-center relative"
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary border-4 border-base-300 rounded-full z-10 shadow-md"></div>

                  <div
                    className={`w-full px-6 py-5 rounded-xl shadow-md shadow-primary bg-base-200 border-l-4 border-primary transition-all duration-300 
                ${
                  isLeft
                    ? "md:col-start-1 md:text-left md:mr-auto"
                    : "md:col-start-2 md:text-right md:ml-auto"
                }`}
                    style={{ minWidth: "260px" }}
                  >
                    <h4 className="text-xl font-bold text-neutral">
                      {edu.degree}
                    </h4>
                    <div className="text-base-content opacity-80">
                      {edu.institution}
                    </div>
                    <div className="text-primary font-semibold">{edu.year}</div>
                    <div className="text-base-content mt-2">{edu.details}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}

export default Education;
