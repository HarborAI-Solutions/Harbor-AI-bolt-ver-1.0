import React from 'react';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h1>

      {/* AI Chat Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">AI Chat Services</h2>
        <p className="text-gray-700 mb-4">Offer intelligent, 24/7 customer engagement with our AI chat solutions. Perfect for businesses seeking to improve customer support and sales—starting at $300–$500 per month. Benefits: Increased engagement, reduced response times, scalable support.</p>
        <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
          Request a Quote
        </Link>
      </section>

      {/* AI Workflows */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">AI Workflows</h2>
        <p className="text-gray-700 mb-4">Design intelligent, scalable workflows to optimize your business processes with AI. Ideal for automating repetitive tasks and boosting efficiency—starting at $1,000–$1,500 per month. Benefits: Save time, reduce costs, improve accuracy.</p>
        <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
          Request a Quote
        </Link>
      </section>

      {/* Website Development/Enhancement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Website Development/Enhancement</h2>
        <p className="text-gray-700 mb-4">Create and enhance websites with AI tools for better performance, SEO, and user experience. Options include one-time projects starting at $1,200 or ongoing enhancement packages at $800/month. Benefits: Faster load times, higher conversions, and modern designs.</p>
        <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
          Request a Quote
        </Link>
      </section>

      {/* Optional: Include a case study or example (e.g., "How we boosted a client’s workflow efficiency by 30% with AI automation"). */}
    </div>
  );
};
