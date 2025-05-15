import PageContainer from "../PageContainer";
import SkillsCard from "./SkillsCard";
import  skills  from "./data.jsx"; // Import the skills data
function Skills() {
  

  return (
   <PageContainer>
      <div className="px-4 py-6 w-full">
        <h3 className="lg:text-3xl text-lg font-extrabold text-primary mb-6 text-left">Skills</h3>
        {Object.keys(skills[0]).map((category) => (
          <div key={category} className="mb-8">
            <h4 className="lg:text-2xl text-md font-bold text-secondary mb-4 capitalize">
              {category}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills[0][category].map((skill, idx) => (
                <SkillsCard
                  key={idx}
                  name={skill.name}
                  logo={skill.logo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default Skills;
