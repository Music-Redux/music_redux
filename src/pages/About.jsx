import React from "react";

const Blog = () => {
  return (
    <div className="container ml-24 ">
      <div
        className="section section-padding pb-0 mt5 "
        style={{ margin: "0 auto" }}
      >
        <div className="">
          <div className="row learts-mb-n30">
            <div className=" col-md-2 col-6  w-1/2 ml-24">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-6  w-2/3 ">
              <div
                className="about-us3"
                style={{
                  color: "black",
                  textAlign: "center",
                  marginTop: "80px",
                }}
              >
                <div className="desc text-white">
                  <p>
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

export default Blog;
