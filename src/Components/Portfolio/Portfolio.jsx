import Card from "./Card";
import React from "react";
import Link_Shortner from './Images/link_Shortner.jpg'
const Projects = [
  {
    title: "Link Shortner",
    desc: " Your user-friendly companion featuring 15+ themes for effortless computation tailored to your needs",
    img: Link_Shortner,
  },
];
function Portfolio() {
  return (
    <div className='px-8 '>
      <h3 className='lg:text-3xl md:text-md sm:text-xl font-extrabold text-neutral py-4'>
        my portfolio
      </h3>
      <div className="grid grid-rows-3 gap-4"></div>
      {Projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          desc={project.desc}
          img={project.img}

        />
      ))}
      
    </div>
  );
}

export default Portfolio;
