'use client';

import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; 

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      console.log('Email successfully sent!');
      setIsSent(true); 
      formRef.current.reset(); 
    })
    .catch((error) => {
      console.log('Failed to send email:', error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div id="contact" className="max-w-lg mx-auto bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-2xl p-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Me</h2>

      {/* Show success message and icon if email is sent */}
      {isSent && (
        <div className="flex items-center justify-center mb-6">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
          <p className="ml-3 text-xl font-semibold text-green-500">Message sent successfully!</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Your Message"
            rows="5"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;








