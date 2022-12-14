/* eslint-disable */
import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_b46b8zr";
const TEMPLATE_ID = "template_uryecnr";
const USER_ID = "etcJ_jPr6-CxnQeWU";

const ContactUs = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact relative flex flex-col overflow-hidden ">
      <div className="w-full p-6 m-auto backdrop-blur-sm bg-[#BB264959] rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl mt-16">
        <h1 className="text-3xl font-semibold text-center uppercase text-white">
          Contact Us
        </h1>
        <form onSubmit={handleOnSubmit} className="ContactForm mt-6">
          <div className="mb-2">
            <label>
              <span className="text-white">Email</span>
              <input
                id="form-input-control-email"
                label="Email"
                name="user_email"
                placeholder="Email.."
                required
                className="
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-white">Name</span>
              <input
                id="form-input-control-last-name"
                name="user_name"
                placeholder="Name.."
                required
                className="
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-white">Message</span>
              <input
                id="form-textarea-control-opinion"
                name="user_message"
                placeholder="Write your message.."
                required
                className="
                block
                w-full
                mt-2 px-16 py-8
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              />
            </label>
          </div>
          <button
            type="submit"
            className="
            w-full
            rounded-lg
            transition-colors
            duration-150
            hover:bg-[#fff]
            mt-5
            bg-[#1e1e1e]
            text-[#BB2649]
            font-bold
          "
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
