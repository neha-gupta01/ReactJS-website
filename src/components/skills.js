import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleSkill = ({ icon, skill, description }) => {
  return (
    <div
      className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4"
      style={{ width: "25rem" }}
    >
      <i
        className={`text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid ${icon}`}
      ></i>
      <h4 className="mt-4">{skill}</h4>
      <p className="text-center">{description}</p>
    </div>
  );
};
const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  const fetchSkillsData = () => {
    axios
      .get("http://localhost:3001/skills")
      .then((response) => {
        setSkillsData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchSkillsData();
  }, []);

  const title = (
    <div className="row mt-4 py-3">
      <div className="col-12 d-flex flex-column text-center justify-content-center">
        <h2>SKILLS</h2>
        <h5 className="text-secondary fw-normal py-2 fst-italic">
          Continuously improving my skills and knowledge in the field.
        </h5>
      </div>
    </div>
  );
  return (
    <section className="container py-5" id="skills">
      {title}
      <div className="row d-flex justify-content-between mx-0">
        {skillsData.map((skill, index) => (
          <SingleSkill
            key={index}
            icon={skill.icon}
            skill={skill.skill}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
