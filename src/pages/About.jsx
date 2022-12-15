/* eslint-disable */

import React from "react";

const About = () => {
  return (
    <div
      className="container  "
      style={{
        fontFamily: "'Kalam', cursive",
        fontSize: "20px",
      }}
    >
      <div className="section section-padding pb-0 mt5 ">
        <div className="">
          <div
            className="row learts-mb-n30 flex justify-center mx-5"
            style={{ alignItems: "center" }}
          >
            <div
              className=" col-md-2 col-6  w-1/2 "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-6  w-2/3 ml-24">
              <div
                className="about-us3"
                style={{
                  marginTop: "20px",
                }}
              >
                <div className="desc text-white text-center">
                  <p style={{ lineHeight: "40px" }}>
                    Art and music are basic human functions. Humankind and art
                    cannot function without one another. We have the burning
                    desire to create, whatever it may be and however tiny or
                    grand. The interaction with sound is unavoidable, either to
                    make it or take pleasure in it. People have always found
                    music significant in their lives, whether for enjoyment in
                    listening, the emotional response, performing, or creating.
                    This is no different for classical music or contemporary
                    concert music. Both musics have immense worth for our
                    society; however, the problem we all know in this field is
                    that this music is little known and hence underappreciated.
                    As a musician and artist it is my responsibility that others
                    can learn to enjoy the art for which I have utter passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
