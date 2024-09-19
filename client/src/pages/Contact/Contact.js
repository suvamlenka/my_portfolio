import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import styled from "styled-components";
import LightSpeed from "react-reveal/LightSpeed";
import { MdEmail } from "react-icons/md";

const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hnh4dpx",
        "template_o10m9b9",
        form.current,
        "fpbEAi0pflhirtwhi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <h1>
                      Contact With
                      <MdEmail color="blue" size={30} className="ms-2" />
                    </h1>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="mb-3"
                          required
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter Your Email Address"
                          className="mb-3"
                          required
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          name="message"
                          placeholder="Write your message"
                          className="mb-3"
                          required
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="submit"
                          value="Send message"
                          className="button"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </StyledContactForm>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  width: 100%;
  padding: 50px 0;
`;



