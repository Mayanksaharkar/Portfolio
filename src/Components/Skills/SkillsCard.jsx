import React from "react";

function SkillsCard({ name, logo, idx }) {
  return (
    <div
      key={idx}
      className="bg-transparent backdrop-blur-sm rounded-xl shadow-sm shadow-primary lg:px-4 py-2 sm:px-1 px-1 flex flex-col items-center border-b-1 border-primary"
    >
      <div className="flex items-center justify-center mt-1">{logo}</div>
      <div className="flex items-center justify-center  lg:text-md text-sm">{name}</div>
      {/* <span className="text-xl font-bold text-neutral">{skill.name}</span> */}
    </div>
  );
}

export default SkillsCard;
