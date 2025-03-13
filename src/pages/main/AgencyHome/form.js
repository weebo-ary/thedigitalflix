import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Form() {
  return (
    <div className="flex">
      <form class="w-full p-6">
        <div className="bg-white text-black p-6 rounded-lg flex items-center justify-center md:flex-row sm:flex-col xs:flex-col gap-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Unlock Your Business Growth with{" "}
              <span className="text-red-600">TheDigitalFlix!</span>
            </h2>
            <DotLottieReact
              src="https://lottie.host/71e2dbfe-cab3-444a-bcff-bb5dd2da606d/0pRV27oiTH.lottie"
              loop
              autoplay
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-8">
              Innovative Digital Strategies for Maximum Impact 
              <br/>
              Start Your Journey with Us: Fill out the form and take your brand to the next
              level with data-driven digital marketing solutions.
            </h2>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_text"
                class="peer-focus:font-medium absolute text-sm md:text-sm sm:text-xs xs:text-xs xs:-mt-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <b>Enter your Name</b> to begin your digital success story
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_text"
                class="peer-focus:font-medium absolute text-sm md:text-sm sm:text-xs xs:text-xs xs:-mt-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <b>Share your Contact Number</b> to stay updated on industry insights and exclusive strategies.
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_text"
                class="peer-focus:font-medium absolute md:text-sm sm:text-xs xs:text-xs xs:-mt-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <b>Provide your Email</b> to receive expert marketing tips, case studies, and success stories
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_address"
                  id="floating_address"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_address"
                  class="peer-focus:font-medium absolute text-sm md:text-sm sm:text-xs xs:text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <b>Enter your Business Name and Address</b>
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-2">
                <select
                  name="floating_occupation"
                  id="floating_occupation"
                  className="block py-1.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="e-commerce" className="p-2">
                  E-commerce
                  </option>
                  <option value="real-estate" className="p-2">
                  Real Estate
                  </option>
                  <option value="healthcare" className="p-2">
                  HealthCare
                  </option>
                  <option value="retail" className="p-2">
                  Retail
                  </option>
                  <option value="finance" className="p-2">
                  Finance
                  </option>
                  <option value="education" className="p-2">
                  Education
                  </option>
                  <option value="hospitablity" className="p-2">
                  Hospitablity
                  </option>
                  <option value="automotive" className="p-2">
                  Automative
                  </option>
                  <option value="non-profit" className="p-2">
                  Non-Profit
                  </option>
                  <option value="other" className="p-2">
                  Other
                  </option>
                </select>
                <label
                  htmlFor="floating_occupation"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Select you Niche
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Get Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
