import React from "react";

const aboutData = [
  {
    year: "1995-2008",
    title: "Early Passion for Technology",
    description:
      "From an early age, I became fascinated with computers and programming. Starting with basic HTML and CSS, I gradually expanded my skills to include JavaScript and various frameworks.",
    image: "images/about1.jpg",
  },
  {
    year: "2008-2014",
    title: "Higher Education and Career Growth",
    description:
      "During my university years, I studied computer science and gained hands-on experience through internships and freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.",
    image: "images/about2.jpg",
  },
  {
    year: "2014-Present",
    title: "Professional Excellence and Continuous Learning",
    description:
      "Throughout my career, I have consistently sought opportunities to refine my skills and stay updated with the latest technologies. I strive for excellence in every project I undertake and aim to deliver valuable and impactful results.",
    image: "images/about3.jpg",
  },
  {
    year: "Future",
    title: "Continuing to Make a Difference",
    description:
      "I am committed to leveraging my skills and expertise to contribute to meaningful projects that have a positive impact on society. I am eager to take on new challenges and collaborate with talented individuals to create innovative solutions.",
    image: "images/about4.jpg",
  },
];

const SingleAbout = ({ year, title, description, image, alignRight }) => {
  const profileImage = (
    <div className="col-3 col-md-2 text-center img">
      <img
        className="rounded-circle border border-5 border-dark-subtle img-fluid"
        src={image}
        alt={`about ${year}`}
      />
    </div>
  );

  const desc = (
    <div className={`col-9 col-md-5 ${alignRight ? "" : "text-md-end"} `}>
      <h5>{year}</h5>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );

  return (
    <div
      className={`row ${
        alignRight ? "justify-content-md-end" : "flex-row-reverse flex-md-row"
      }  mt-5 pt-5`}
    >
      {alignRight ? null : desc}
      {profileImage}
      {alignRight ? desc : null}
    </div>
  );
};
const About = () => {
  const title = (
    <div className="row mt-4 py-3">
      <div className="col-12 d-flex flex-column text-center">
        <h2>ABOUT</h2>
        <h5 className="text-secondary fw-normal py-2 fst-italic">
          Learn more about me, my background, and what motivates me.
        </h5>
      </div>
    </div>
  );
  return (
    <section className="container py-5" id="about">
      {title}

      {aboutData.map((about, index) => (
        <SingleAbout
        key={index}
          year={about.year}
          title={about.title}
          description={about.description}
          image={about.image}
          alignRight={(index + 1) % 2 === 0}
        />
      ))}

      <div className="row justify-content-md-center mt-5 pt-5">
        <div className="col-3 col-md-2 d-flex justify-content-center next-hire">
          <h2 className="d-flex justify-content-center align-items-center bg-primary text-white rounded-circle border border-5 border-dark-subtle">
            Your
            <br /> Next
            <br /> Hire
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
