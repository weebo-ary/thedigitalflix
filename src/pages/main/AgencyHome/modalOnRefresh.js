import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal opens
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal closes
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup to ensure scroll is enabled when unmounting
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white md:mt-20 rounded-lg shadow-lg md:w-1/2 sm:w-full xs:w-full sm:mt-28 xs:mt-28 p-6 flex md:flex md:flex-row sm:flex-col xs:flex-col relative">
        {/* Left Side: Image */}
        <div className="w-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Modal"
            className="md:w-full sm:w-1/2 xs:w-1/2 h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full p-6 flex flex-col">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logoSrc} alt="Logo" className="w-full" />
          </div>

          {/* Headings */}
          <h2 className="text-lg font-semibold text-center mt-2 text-gray-800">
            {head1}
          </h2>
          <h3 className="text-md text-gray-600 text-center mb-4">{head2}</h3>

          {/* Input Fields */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 mb-3 w-full text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 mb-3 w-full text-black"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded p-2 mb-3 w-full text-black"
          />

          {/* Submit Button (Disabled if form is incomplete) */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className={`w-full py-2 text-red-600 rounded`}
            >
              Close
            </button>
            <button
              onClick={() => alert("Form Submitted!")}
              disabled={!isFormValid}
              className={`w-full py-2 text-white rounded ${
                isFormValid
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
