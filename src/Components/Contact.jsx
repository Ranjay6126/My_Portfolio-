import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, event) => {
    const form = event.target;
    const formData = new FormData(form);
    // Check for empty fields
    const isEmpty = Array.from(formData.entries()).some(
      ([key, value]) => !value.trim()
    );
    if (isEmpty) {
      toast.error("All fields are required. Please fill out the form.");
      return; // Prevent submission
    }
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });
      if (response.ok) {
        toast.success("Your message has been sent!");
        form.reset(); // Reset the form after successful submission
      } else {
        toast.error("There was an error. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please check your connection.");
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-8"
      >
        <h1 className="text-3xl font-bold mb-4 underline text-center">
          Contact Me :-)
        </h1>
        <p className="text-center mb-6">
          Please fill out the form below to contact me. I will get back to you
          as soon as possible.
        </p>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/axoopolb"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-300 shadow-lg rounded-lg p-6 w-full max-w-md"
          >
            <h1 className="text-xl font-semibold mb-4 text-center">
              Send Your Message
            </h1>
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>
            {/* Email Address */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;