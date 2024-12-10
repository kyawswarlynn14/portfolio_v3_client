"use client";
import React, { useEffect, useState } from "react";
import EarthCanvas from "../canvas/Earth";
import toast from "react-hot-toast";
import { useCreateMessageMutation } from "@/store/message/messageApi";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  message: "",
}

const Contact = () => {
  const [createMessage, {isLoading, isSuccess, error}] = useCreateMessageMutation();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
		if (isSuccess) {
			toast.success("Sent successfully!");
			setValues(initialState)
		}
		if (error) {
			toast.success(error.data?.message || "Sent failed!");
			console.log("sent email err-->", error);
		}
	}, [isSuccess, error]);

  const isDiabled =
    isLoading || !values.name || !values.phone || !values.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage(values);
  };

  return (
    <div
      id="contact"
      className={`pt-16 flex lg:flex-row flex-col-reverse gap-4 justify-between`}
    >
      <div className="flex-[0.75] shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700 p-2 md:p-8 h-fit w-full md:w-[600px] lg:w-full md:mx-auto lg:mx-0 rounded-2xl">
        <h3 className="subTitle pt-0">Contact Me</h3>

        <form
          id="contact"
          onSubmit={handleSubmit}
          className=" mt-2 md:mt-6 flex flex-col items-center gap-4"
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

      <div className="lg:flex-1 lg:h-auto md:h-[500px] h-[350px] cursor-grab">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
