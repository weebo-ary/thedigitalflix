import React, { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  imageSrc,
  logoSrc,
  head1,
  head2,
  buttonText,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const isFormValid = formData.name && formData.email && formData.phone;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-10 z-10">
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 flex relative">
        {/* Left Side: Image */}
        <div className="w-full">
          <img
            src={imageSrc}
            alt="Modal"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full p-6 flex flex-col">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoSrc} alt="Logo" className="w-full" />
          </div>

          {/* Headings */}
          <h2 className="text-lg font-semibold text-center mt-2 text-gray-800">{head1}</h2>
          <h3 className="text-md text-gray-600 text-center mb-4">{head2}</h3>

          {/* Input Fields */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 mb-3 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 mb-3 w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded p-2 mb-3 w-full"
          />

          {/* Submit Button (Disabled if form is incomplete) */}
          <button
            onClick={() => alert("Form Submitted!")}
            disabled={!isFormValid}
            className={`w-full py-2 text-white rounded ${
              isFormValid
                ? "bg-red-500 hover:bg-red  -600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {buttonText}
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full hover:bg-gray-300 "
          >
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
