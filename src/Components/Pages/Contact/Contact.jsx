import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section className="bg-base-200 text-white py-12 mt-5 mb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-400 mt-2">
            We’d love to assist you in finding your dream property. Reach out to
            our expert team for personalized real estate services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button className="w-full btn btn-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-400 text-lg mr-3" />
              <p>123 Street, City, Country</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-blue-400 text-lg mr-3" />
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-400 text-lg mr-3" />
              <p>contact@luxestate.com</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
