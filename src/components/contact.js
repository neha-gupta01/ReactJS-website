import React from "react";

const Contact = () => {
  return (
    <section className="py-5" id="contact">
      <div className="container py-5">
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2 className="text-white">CONTACT ME</h2>
          <h5 className="text-white fw-normal py-2 fst-italic">
            Interested if I'd be the right fit for your team? Fill in this form
            and I will respond within 24-48 hours.
          </h5>
        </div>
        <div className="row pt-4 mt-5">
          <div className="col-12">
            <form action="#" method="post">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name*"
                      id="flotingInput"
                      required
                    />
                    <label htmlFor="floatingInput">Enter Name*</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email*"
                      id="flotingEmail"
                      required
                    />
                    <label htmlFor="floatingEmail">Enter Email*</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Phone*"
                      id="flotingPhone"
                      required
                    />
                    <label htmlFor="floatingPhone">Enter Phone*</label>
                  </div>
                </div>
                <div className="form-floating col-lg-6">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="flotingMessage"
                    style={{ height: "205px" }}
                    required
                  ></textarea>
                  <label htmlFor="floatingMessage" className="px-4 ms-2">
                    Enter Message*
                  </label>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-center">
                  <button className="btn btn-lg btn-outline-light">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
