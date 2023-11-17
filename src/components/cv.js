import React from "react";

const CV = () => {
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
          <h2 className="mt-3">James Anderson</h2>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-envelope me-2"></i> your.email@example.com
            </li>
            <li>
              <i className="fas fa-phone me-2"></i> (123) 456-7890
            </li>
            <li>
              <i className="fas fa-map-marker-alt me-2"></i> Your address
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
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h5>Personal Interests</h5>
          <ul className="list-unstyled">
            <li>Interest 1</li>
            <li>Interest 2</li>
            <li>Interest 3</li>
          </ul>
        </div>
        <div className="col-lg-7 mt-5 text-start order-0 order-lg-1">
          <h3>Profile</h3>
          <hr />
          <p>
            Write a brief description of yourself, your background, and your
            goals. Highlight your key strengths and experiences.
          </p>
          <h3>Highlights of Qualifications</h3>
          <hr />
          <ul>
            <li>Qualification 1</li>
            <li>Qualification 2</li>
            <li>Qualification 3</li>
          </ul>
          <h3>Education</h3>
          <hr />
          <dl>
            <dt>Year - Year</dt>
            <dd>University/Institution</dd>
            <dd>Degree/Program</dd>
          </dl>
          <h3>Additional Courses & Training</h3>
          <hr />
          <dl>
            <dt>Year</dt>
            <dd>Course/Training</dd>
            <dd>Institution/Organization</dd>
          </dl>
          <h3>Work Experience</h3>
          <hr />
          <dl>
            <dt>Year - Year</dt>
            <dd>Job Position</dd>
            <dd>Company/Organization</dd>
          </dl>
          <h3>Extracurricular Activities</h3>
          <hr />
          <dl>
            <dt>Organization Name</dt>
            <dd>Role/Position</dd>
            <dd>Details of your involvement and contributions</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CV;
