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
            <h1 className="text-4xl font-bold">Lidhuni me TheDigitalFlix.al!</h1>
            <p className="text-lg">
              Mos hezitoni të na kontaktoni për çdo pyetje, sugjerim apo ndihmë që mund tju nevojitet. Lidhuni me TheDigitalFlix!
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-2xl"></i>
                <div>
                  <p>Email</p>
                  <p className="font-semibold">connect@thedigitalflix.al</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fab fa-linkedin text-2xl"></i>
                <div>
                  <p>WhatsApp</p>
                  <a href="tel:+355674824786"><p className="font-semibold">+355674824786</p></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-bold mb-2 text-gray-700">📩 Na Kontaktoni – Dërgoni Një Mesazh</h2>
            <p className="text-xs font-light text-gray-500 mb-2">Keni pyetje? Plotësoni formularin më poshtë dhe ekipi ynë do ju përgjigjet sa më shpejt të jetë e mundur!
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Emri</label>
                  <input
                    type="text"
                    placeholder="Enter Emri"
                    className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Shkruaj emrin</label>
                  <input
                    type="text"
                    placeholder="Enter Shkruaj emrin"
                    className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Mbiemri</label>
                <input
                  type="email"
                  placeholder="Enter Mbiemri"
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700">Lloji i kërkesës</label>
                <select
                  className="mt-1 w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400"
                  value={formData.queryType}
                  onChange={(e) =>
                    setFormData({ ...formData, queryType: e.target.value })
                  }
                >
                  <option value="digital-marketing-services">Shërbime të Marketingut Dixhital</option>
                  <option value="training-and-courses">Kurse dhe trajnime</option>
                  <option value="business-growth-consultation">Konsultim për rritje biznesi</option>
                  <option value="partnership-and-collaboration ">Kërkesë tjetër </option>
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
                  <p className="text-xs font-light text-gray-800">👉 Ekipi ynë do t’i përgjigjet kërkesës suaj brenda 24 orëve!

                  </p>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md disabled:bg-gray-500 hover:bg-blue-600 transition duration-200"
                disabled={formData.email === "" || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Dërgo"}
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