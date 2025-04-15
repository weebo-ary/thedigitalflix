import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <div className="flex items-center justify-center p-8 transition">
      <div className="flex flex-col items-center justify-center gap-10 text-center p-8 bg-gray-100 dark:bg-gray-900 w-200 rounded-lg transition">
        <h2 className="text-3xl">
          Le të hedhim themelet e fabrikës tuaj dixhitale
        </h2>
        <p className="text-xl text-gray-500">
          Për një prodhim më të madh, më të mirë dhe efikas
        </p>
        <Link to="/contact-us">
          <button className="bg-gray-800 dark:bg-white text-white dark:text-black py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700">
            Connect with Us <ArrowRightOutlined />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Connect;
