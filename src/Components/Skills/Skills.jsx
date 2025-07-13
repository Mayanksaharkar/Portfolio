import PageContainer from "../PageContainer";
import SkillsCard from "./SkillsCard";
import skills from "./data.jsx";
import { useMemo } from "react";

function Skills() {
  const memoizedSkills = useMemo(() => skills[0], []);
  const categories = useMemo(() => Object.keys(memoizedSkills), [memoizedSkills]);

  return (
    <PageContainer>
      <div className="px-4 py-6 w-full">
        <h3 className="lg:text-3xl text-lg font-extrabold text-primary mb-6 text-left">Skills</h3>
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h4 className="lg:text-2xl text-md font-bold text-secondary mb-4 capitalize">
              {category}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {memoizedSkills[category].map((skill, idx) => (
                <SkillsCard
                  key={`${category}-${skill.name}-${idx}`}
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
