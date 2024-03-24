"use client";
import React, { useState } from "react";
import EarthCanvas from "./canvas/Earth";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });

  const isDiabled =
    isLoading || !values.name || !values.phone || !values.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        `https://kyawswarlynn14.onrender.com/api/mails/create`,
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsLoading(false);
      if(res?.data?.name == values?.name) {
        setValues({
          name: "",
          email: "",
          phone: "",
          company_name: "",
          message: "",
        });
        toast.success("Sended Successfully!")
      } else {
        toast.error("Something Went Wrong. Try Again!");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred while sending the mail: " + error.message);
    }
  };

  return (
    <div
      id="contact"
      className={`pt-16 flex lg:flex-row flex-col-reverse gap-4 justify-between`}
    >
      <div className="flex-[0.75] shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700  p-8 h-fit w-full md:w-[600px] lg:w-full md:mx-auto lg:mx-0 rounded-2xl">
        <h3 className="subTitle pt-0">Contact Me</h3>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col items-center gap-4"
        >
          <div className="w-full flex flex-col gap-4">
            <input
              required
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="contact1Input"
            />
            <input
              required
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="contact1Input"
            />
            <input
              required
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="What's your phone number?"
              className="contact1Input"
            />
            <input
              required
              type="text"
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="What's your company's name?"
              className="contact1Input"
            />
            <textarea
              required
              rows={5}
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="contact1Input"
            />
          </div>

          <button
            type="submit"
            className={`normalButton px-12 disabled:cursor-not-allowed`}
            disabled={isDiabled}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="lg:flex-1 lg:h-auto md:h-[500px] h-[350px]">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
