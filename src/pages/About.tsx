import React from 'react';

export const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-4">About Harbor AI</h1>
      <p className="text-gray-700 mb-4">
        Harbor AI is a forward-thinking tech company dedicated to revolutionizing business operations through AI-driven workflows, automation, and website solutions. Our mission is to empower companies with innovative, efficient tools to enhance productivity and online presence. Meet our expert team dedicated to your success.
      </p>
      <p className="text-gray-700 mb-4">
        Our core values:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Innovation</li>
        <li>Efficiency</li>
        <li>Reliability</li>
      </ul>
      {/* Visuals: Suggest a simple image or illustration (e.g., AI graphics or a team photo placeholder). */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        {/* Placeholder for image */}
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="AI Illustration" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};
