import Card from "./Card";
import PageContainer from "../PageContainer";
import projects from "./data";
function Projects() {
  return (
    <PageContainer>
      <div className="px-4  ">
        <h3 className="lg:text-3xl md:text-md sm:text-xl font-extrabold text-neutral py-4">
          my projects
        </h3>
        <div className="lg:gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project) => (
            <div className="w-full h-full my-2 col-span-1" key={project.gh}>
              <Card
                key={project.title}
                title={project.title}
                img={project.img}
                gh={project.gh}
                live={project.live}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Projects;
