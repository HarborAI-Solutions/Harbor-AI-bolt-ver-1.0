import React from 'react';

export const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Blog & Resources</h1>
      <p className="text-gray-700 mb-4">Explore our insights on AI workflows, automation strategies, and website optimization.</p>
      {/* Placeholder for 3 blog post titles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">5 Ways AI Can Automate Your Workflow</h3>
          <p className="text-gray-700">Learn how AI can streamline your business processes.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Top Website Enhancement Tips for 2025</h3>
          <p className="text-gray-700">Discover the latest trends in website optimization.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Case Study: Automating Success with Harbor AI</h3>
          <p className="text-gray-700">See how we helped a client achieve significant results.</p>
        </div>
      </div>
    </div>
  );
};
