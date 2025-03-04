import React from 'react';

export const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Contact Harbor AI</h1>
      <p className="text-gray-700 mb-4">Ready to transform your business? Reach out to us for a free consultation on AI chats, workflows, automation, or website solutions.</p>

      {/* Contact Form */}
      <form className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div className="mt-8">
        <p className="text-gray-700">Email: <a href="mailto:contact@harborai.com" className="text-blue-600">contact@harborai.com</a></p>
        <p className="text-gray-700">Phone: +1-555-123-4567</p>
        {/* Map embed placeholder */}
        <div className="mt-4">
          {/* Add Google Maps embed here */}
        </div>
      </div>
    </div>
  );
};
