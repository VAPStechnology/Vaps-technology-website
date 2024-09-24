"use client";

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form_data, set_form_data] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handle_input_change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    set_form_data({ ...form_data, [name]: value });
    setErrorMessage(""); // Clear error message on input change
  };

  const handle_form_submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear success message on new submission
    setErrorMessage(""); // Reset error message

    // Validation: Check if all fields are filled
    if (!form_data.name || !form_data.email || !form_data.message) {
      setErrorMessage("All fields are mandatory!");
      return;
    }

    console.log("Form data before submission:", form_data);
    setLoading(true); // Start loading
    try {
      const response = await axios.post("https://vapstechnology.shop/api/v1/contactUs/submit", form_data);
      console.log("Response:", response);
      if (response.data.statusCode === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        set_form_data({ name: "", email: "", message: "" }); // Reset form
      } else {
        setErrorMessage("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to send your message. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-slate-300 py-16 dark:bg-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>

              {/* Display error or success message */}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}

              <form onSubmit={handle_form_submit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form_data.name}
                        onChange={handle_input_change}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form_data.email}
                        onChange={handle_input_change}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        value={form_data.message}
                        onChange={handle_input_change}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className={`rounded-sm px-9 py-4 text-base font-medium text-white shadow-submit duration-300 ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary/90 dark:shadow-submit-dark"
                      }`}
                      disabled={loading} // Disable the button while loading
                    >
                      {loading ? "Submitting..." : "Submit"} {/* Show loading text */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
