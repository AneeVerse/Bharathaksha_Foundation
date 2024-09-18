"use client"
// components/FloatingActionButton.js
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
     
      {open && (
        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://wa.me/+919222285780"
            className="w-12 h-12 bg-white text-[#8ac240] rounded-full flex items-center justify-center shadow-lg border border-[#8ac240]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:bharathakshafoundation@gmail.com"
            className="w-12 h-12 bg-white text-[#8ac240] rounded-full flex items-center justify-center shadow-lg border border-[#8ac240]"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+919222285780"
            className="w-12 h-12 bg-white text-[#8ac240] rounded-full flex items-center justify-center shadow-lg border border-[#8ac240]"
          >
            <FaPhone size={24} />
          </a>
        </div>
      )} <button
        className="w-14 h-14 bg-[#8ac240] text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
      >
      <span className='text-2xl'>{open ? '-' : '+'}</span> 
      </button>
    </div>
  );
};

export default FloatingActionButton;
