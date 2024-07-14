import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8 flex justify-center items-center flex-col w-screen">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-orange-100">
        Contact Us
      </h1>
      <div className="w-1/2 mx-auto  p-8 shadow-md rounded-lg text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2 dark:text-orange-100">
            Name
          </h2>
          <p className="text-gray-700 dark:text-white/70">Siddharth Rana</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2 dark:text-orange-100">
            Email
          </h2>
          <p className="text-gray-700 dark:text-white/70">
            <a
              href="mailto:siddharthcpn@gmail.com"
              className="hover:text-indigo-500 hover:underline"
            >
              siddharthcpn@gmail.com
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2 dark:text-orange-100">
            Phone Number
          </h2>
          <p className="text-gray-700 dark:text-white/70">+91 8340387574</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
