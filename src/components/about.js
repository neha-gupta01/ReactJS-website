import React from "react";

const About = () => {
  return (
    <section className="container py-5" id="about">
      <div className="row mt-4 py-3">
        <div className="col-12 d-flex flex-column text-center">
          <h2>ABOUT</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            Learn more about me, my background, and what motivates me.
          </h5>
        </div>
      </div>
      <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
        <div className="col-9 col-md-5 text-md-end">
          <h5>1995-2008</h5>
          <h5>Early Passion for Technology</h5>
          <p>
            From an early age, I became fascinated with computers and
            programming. Starting with basic HTML and CSS, I gradually expanded
            my skills to include JavaScript and various frameworks.
          </p>
        </div>
        <div className="col-3 col-md-2 text-center img">
          <img
            className="rounded-circle border border-5 border-dark-subtle img-fluid"
            src="images/about1.jpg"
            alt="about1"
          />
        </div>
      </div>

      <div className="row justify-content-md-end mt-5 pt-5">
        <div className="col-3 col-md-2 text-center img">
          <img
            className="rounded-circle border border-5 border-dark-subtle img-fluid "
            src="images/about2.jpg"
            alt="about2"
          />
        </div>
        <div className="col-9 col-md-5">
          <h5>2008-2014</h5>
          <h5>Higher Education and Career Growth</h5>
          <p>
            During my university years, I studied computer science and gained
            hands-on experience through internships and freelance projects. This
            period fueled my passion for creating innovative solutions and
            solving complex problems.
          </p>
        </div>
      </div>

      <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
        <div className="col-9 col-md-5 text-md-end">
          <h5>2014-Present</h5>
          <h5>Professional Excellence and Continuous Learning</h5>
          <p>
            Throughout my career, I have consistently sought opportunities to
            refine my skills and stay updated with the latest technologies. I
            strive for excellence in every project I undertake and aim to
            deliver valuable and impactful results.
          </p>
        </div>
        <div className="col-3 col-md-2 text-center img">
          <img
            className="rounded-circle border border-5 border-dark-subtle img-fluid "
            src="images/about3.jpg"
            alt="about3"
          />
        </div>
      </div>

      <div className="row justify-content-md-end mt-5 pt-5">
        <div className="col-3 col-md-2 text-center img">
          <img
            className="rounded-circle border border-5 border-dark-subtle img-fluid"
            src="images/about4.jpg"
            alt="about4"
          />
        </div>
        <div className="col-9 col-md-5">
          <h5>Future</h5>
          <h5>Continuing to Make a Difference</h5>
          <p>
            I am committed to leveraging my skills and expertise to contribute
            to meaningful projects that have a positive impact on society. I am
            eager to take on new challenges and collaborate with talented
            individuals to create innovative solutions.
          </p>
        </div>
      </div>
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
