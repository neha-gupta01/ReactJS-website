import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [aboutData, setAboutData] = useState([]);

  const fetchAboutData = () => {
    axios
      .get("http://localhost:3001/about")
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchAboutData();
  }, []);

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
