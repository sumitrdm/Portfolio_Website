import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { skillList } from "./../../assets/skillsData";
import "./Skills.css";
import skillsVector from "./../../assets/skills_vector.png";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Skills."
        details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
      />

      <div className="skill-card-container">
        {skillList.map((skill) => {
          const { skillName, skillUrl } = skill;
          return <SkillCard skillName={skillName} skillUrl={skillUrl} />;
        })}
      </div>

      <Footer phrase="Get in " link="touch." toAdress="/contact" />

      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills" className="skills-vector" />
      </div>
    </div>
  );
};

export default Skills;
