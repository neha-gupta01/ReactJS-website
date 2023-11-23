// Skills.js
import React from "react";

const skillsData = [
  {
    icon: "fa-cart-shopping",
    skill: "Front-end Development",
    description:
      "Proficient in HTML, CSS, and JavaScript. Experienced in responsive web design, building user-friendly interfaces, and using modern frameworks like ReactJS.",
  },
  {
    icon: "fa-laptop",
    skill: "Back-end Development",
    description: "Skilled in server-side programming using technologies like Node.js and Express. Experience working with databases such as MongoDB and MySQL.",
  },
  {
    icon: "fa-mobile-screen-button",
    skill: "Mobile App Development",
    description:
      "Proficient in developing mobile apps for iOS and Android using frameworks like React Native. Experienced in building engaging and intuitive mobile user interfaces.",
  },
];
const SingleSkill = ({ icon, skill, description }) => {
  return (
    <div
      className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4"
      style={{ width: "25rem" }}
    >
      <i className={`text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid ${icon}`}></i>
      <h4 className="mt-4">{skill}</h4>
      <p className="text-center">{description}</p>
    </div>
  );
};
const Skills = () => {
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
        {skillsData.map((skill) => (
          <SingleSkill
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
