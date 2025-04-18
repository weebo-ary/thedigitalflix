import React, { useState } from "react";
import VideoContact from "../../assets/Video/Contact.mp4";
import TrustUs from "./Home/trustus";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "general-query",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // New state for handling submission status

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set the submitting state to true when the form is submitted

    fetch(
      "https://script.google.com/macros/s/AKfycbwBOs2yVtOluvC5g6YS_D9T4q-vzyDtfTaNj5lY3b4uL9O93D_82zFIkdTSDtIppqKdMA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        alert("Form submitted successfully!");

        // Clear the form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          queryType: "general-query",
          message: "",
        });

        setIsSubmitting(false); // Set the submitting state back to false after submission
      })
      .catch((error) => {
        alert("There was an error submitting the form");
        console.error(error);
        setIsSubmitting(false); // Set the submitting state back to false in case of an error
      });
  };

  return (
    <>
      <div className="mx-0 lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 lg:mb-0 lg:mt-20 xs:-mt-12 lg:h-screen md:h-screen sm:min-h-screen xs:min-h-screen flex flex-row md:flex-row items-start justify-start sm:flex-col xs:flex-col overflow-hidden p-5 md:gap-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-150 z object-cover opacity-90 dark:opacity-40 z-0 md:mt-10 sm:-mt-10 xs:-mt-10"
        >
          <source src={VideoContact} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="z-0 mx-auto flex md:flex-row sm:flex-col xs:flex-col-reverse justify-between items-start gap-20 space-y-10 md:space-y-0 ">
          {/* Contact Information */}
          <div className="text-white max-w-md space-y-8 p-6">
            <h1 className="text-4xl font-bold">Connect with us</h1>
            <p className="text-lg">
              Feel free to contact us with your inquiries, feedback, or any
              assistance you may need. Get in Touch with TheDigitalFlix!
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-2xl"></i>
                <div>
                  <p>Email</p>
                  <p className="font-semibold">connect@thedigitalflix.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fab fa-linkedin text-2xl"></i>
                <div>
                  <p>Contact</p>
                  <a href="tel:+919201457156"><p className="font-semibold">+91-9201457156</p></a>
                  <a href="tel:+917987999491"><p className="font-semibold">+91-7987999491</p></a>
                  <a href="tel:+917553162670"><p className="font-semibold">07553162670</p></a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-2xl"></i>
                <div> 
                  <p>Office</p>
                  <p className="font-semibold">
                  📍 B1, Kamla Nagar, Near Harish Chowk, Next to Muthoot Finance, Kotra Sultanabad, Bhopal, M.P. (462003)
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-2xl"></i>
                <div>
                  <p>Office Hours</p>
                  <p className="font-semibold">🗓️ Monday – Saturday: 10:00 AM – 7:00 PM</p>
                  <p className="font-semibold">📌 Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full space-y-6">
            <h2 className="text-2xl font-bold text-gray-700">📩 Get in Touch – Drop Us a Message</h2>
            <p className="text-xs font-light text-gray-500">Have a question? Fill out the form below, and our team will get back to you ASAP!
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">First name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Last name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700">Type of query</label>
                <select
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.queryType}
                  onChange={(e) =>
                    setFormData({ ...formData, queryType: e.target.value })
                  }
                >
                  <option value="digital-marketing-services">Digital Marketing Services</option>
                  <option value="training-and-courses">Digital Marketing Training & Courses</option>
                  <option value="business-growth-consultation">Business Growth Consultation</option>
                  <option value="partnership-and-collaboration ">Partnership & Collaboration </option>
                  <option value="other">Other query</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows="5"
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
                  <p className="text-xs font-light text-gray-800">👉 Our team will respond to your inquiry within 24 hours!
                  </p>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md disabled:bg-gray-500 hover:bg-blue-600 transition duration-200"
                disabled={formData.email === "" || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <TrustUs />
    </>
  );
}

export default Contact;