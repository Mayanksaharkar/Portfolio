import Card from "./Card";
import Link_Shortner from "./Images/link_Shortner.jpg";
import PageContainer from "../PageContainer";
const Projects = [
  {
    title: "Link Shortner",
    desc: " Your user-friendly companion featuring 15+ themes for effortless computation tailored to your needs",
    img: Link_Shortner,
    gh: "https://github.com/Mayanksaharkar/Link_Shortner",
    live: "https://mayanksaharkar.github.io/Link_Shortner/",
  },
];
function Portfolio() {
  return (
    <PageContainer>
      <div className="px-8 ">
        <h3 className="lg:text-3xl md:text-md sm:text-xl font-extrabold text-neutral py-4">
          my portfolio
        </h3>
        {Projects.map((project) => (
          <div className="w-full h-full my-2" key={project.gh}>
            <Card
              key={project.title}
              title={project.title}
              desc={project.desc}
              img={project.img}
              gh={project.gh}
              live={project.live}
            />
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default Portfolio;
