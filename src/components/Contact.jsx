'use client';

import React, { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

export default function Contact({ isOpen, onClose }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from('rehabform')   // ✅ CHANGED TABLE NAME
      .insert([
        {
          full_name: fullName,
          phone: phone,
          enquiry: enquiry,
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert('Message sent successfully!');
    setFullName('');
    setPhone('');
    setEnquiry('');
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-black/40 backdrop-blur-sm transition-opacity duration-700 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-full bg-[#d8ece7] shadow-2xl overflow-y-auto transform transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col md:flex-row ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full md:w-1/2 p-6 sm:p-10 relative order-1 md:order-2">
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-[#115e59] text-2xl font-bold hover:text-[#0d4c47] transition"
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold text-[#115e59] mb-6 mt-10 md:mt-4">Contact Us</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We're here to help! Please reach out with any questions, feedback, or inquiries.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-800 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#115e59]"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#115e59]"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Enquiry</label>
              <textarea
                placeholder="Write your enquiry here..."
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                rows="4"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#115e59]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#115e59] text-white px-6 py-3 rounded-lg hover:bg-[#0d4c47] transition w-full"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
          <iframe
            src="https://www.google.com/maps?q=Saraswati%20bungalow%2091/95%20Dr%20Babasaheb%20Ambedkar%20Rd%20Borivali%20West%20Mumbai%20400091&output=embed"
            className="w-full h-[250px] sm:h-[300px] md:h-[70%] border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="bg-[#115e59] text-white p-6 md:h-[30%] flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
            <p className="text-base leading-relaxed">
              Dr. Pooja's Rehab and Therapy Clinic <br />
              123 Wellness Street, Shivajinagar <br />
              Pune, Maharashtra 411005
            </p>
            <p className="mt-2 font-semibold">Phone:</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  );
}
