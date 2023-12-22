import React, { useState, useEffect } from "react";
import axios from "axios";

const Cv = () => {
  const [cvData, setCvData] = useState([]);

  const fetchCvData = () => {
    axios
      .get("http://localhost:3001/cv")
      .then((response) => {
        setCvData(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchCvData();
  }, []);

  return (
    <section className="container py-5" id="cv">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center">
          <h2>CURRICULUM VITAE</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            A small sampling of some of the projects I've worked on as a student
            of the ICS program.
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-5 text-center order-1 order-lg-0">
          <img
            className="img-fluid rounded-circle border border-5 border-dark-subtle"
            src="images/profile.jpg"
            alt="profile"
          />
          <h2 className="mt-3">{cvData.personalInfo?.name}</h2>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-envelope me-2"></i>{" "}
              {cvData.personalInfo?.email}
            </li>
            <li>
              <i className="fas fa-phone me-2"></i> {cvData.personalInfo?.phone}
            </li>
            <li>
              <i className="fas fa-map-marker-alt me-2"></i>{" "}
              {cvData.personalInfo?.address}
            </li>
          </ul>
          <ul className="social-icons my-5 d-flex justify-content-center list-unstyled">
            <li>
              <a
                href="#"
                className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <h5>Technical Skills</h5>
          <ul className="list-unstyled">
            {cvData.technicalSkills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h5>Personal Interests</h5>
          <ul className="list-unstyled">
            {cvData.personalInterests?.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-7 mt-5 text-start order-0 order-lg-1">
          <h3>Profile</h3>
          <hr />
          <p>{cvData.profile}</p>
          <h3>Highlights of Qualifications</h3>
          <hr />
          <ul>
            {cvData.qualifications?.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
          <h3>Education</h3>
          <hr />
          <dl>
            <dt>{cvData.education?.year}</dt>
            <dd>{cvData.education?.institute}</dd>
            <dd>{cvData.education?.degree}</dd>
          </dl>
          <h3>Additional Courses & Training</h3>
          <hr />
          <dl>
            <dt>{cvData.coursesTraining?.year}</dt>
            <dd>{cvData.coursesTraining?.course}</dd>
            <dd>{cvData.coursesTraining?.institute}</dd>
          </dl>
          <h3>Work Experience</h3>
          <hr />
          <dl>
            <dt>{cvData.workExperience?.year}</dt>
            <dd>{cvData.workExperience?.position}</dd>
            <dd>{cvData.workExperience?.company}</dd>
          </dl>
          <h3>Extracurricular Activities</h3>
          <hr />
          <dl>
            <dt>{cvData.extracurricularActivities?.organization}</dt>
            <dd>{cvData.extracurricularActivities?.role}</dd>
            <dd>{cvData.extracurricularActivities?.details}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Cv;
