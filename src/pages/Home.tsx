import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-4">
            Harbor AI: Empowering Businesses with AI Workflows and Automation
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Transform your operations and websites with cutting-edge AI solutions for workflows, automation, and development.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 animate-pulse">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Chat Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">AI Chat Services</h3>
              <p className="text-gray-700">Engage customers with intelligent AI chats—starting at $300–$500 per month.</p>
            </div>

            {/* AI Workflows */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">AI Workflows</h3>
              <p className="text-gray-700">Streamline operations with intelligent, scalable workflows—starting at $1,000–$1,500 per month.</p>
            </div>

            {/* Website Development/Enhancement */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Website Development/Enhancement</h3>
              <p className="text-gray-700">Build and optimize high-performing websites with AI—starting at $1,200 per project or $800/month for ongoing enhancement.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">Trusted by innovative companies</p>
            {/* Add client logos here */}
            <div className="mt-4">
              {/* Example: <img src="/client-logo-1.svg" alt="Client Logo" className="h-8 inline-block mx-4" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
