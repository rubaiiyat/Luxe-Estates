import React from "react";
import { FaBuilding, FaHandshake, FaCrown } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-base-200 text-white min-h-screen py-16 px-8 md:px-20 mt-5 mb-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Luxe Estate
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Luxe Estate is the pinnacle of luxury real estate, offering premium
          properties in the most exclusive locations. Our mission is to redefine
          elegance and sophistication, providing bespoke solutions for elite
          clientele.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <FaBuilding className="text-5xl text-gold-500 mb-4" />
          <h3 className="text-xl font-semibold">Exclusive Properties</h3>
          <p className="text-gray-400 mt-2">
            Handpicked luxury residences tailored to your lifestyle.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaHandshake className="text-5xl text-gold-500 mb-4" />
          <h3 className="text-xl font-semibold">Trusted Partnerships</h3>
          <p className="text-gray-400 mt-2">
            Collaborating with the finest developers and architects.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaCrown className="text-5xl text-gold-500 mb-4" />
          <h3 className="text-xl font-semibold">Unparalleled Service</h3>
          <p className="text-gray-400 mt-2">
            A seamless experience from inquiry to ownership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
