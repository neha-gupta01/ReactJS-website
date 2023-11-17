import React from "react";

const Homepage = () => {
  return (
    <section className="james d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="text-white fw-medium fst-italic">James Anderson</h1>
        <h2 className="display-3 text-white fw-bold">
          Information & Computer Systems <br />
          student
        </h2>
        <a
          href="#skills"
          class="btn btn-lg fs-6 fw-medium mt-5 btn-primary p-3"
        >
          TELL ME MORE
        </a>
      </div>
    </section>
  );
};

export default Homepage;
