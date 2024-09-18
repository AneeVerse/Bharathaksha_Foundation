"use client";
// components/FloatingActionButton.js
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoIosClose, IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdContentCopy } from 'react-icons/md';

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setOpen(false))
      .catch((err) => alert('Failed to copy: ' + err));
  };

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-40">
      {open && (
        <>
          <div className="flex md:hidden flex-col items-center gap-2">
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

          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 hidden md:flex items-center justify-center z-50">
            <div className="bg-white relative rounded-lg shadow-lg p-6 max-w-xs md:max-w-md w-full text-center">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <button
                className="text-[#8ac240] absolute top-3 right-2 px-1 py-1 rounded-full focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <IoIosClose className='self-center h-8 w-8' />
              </button>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-3 border border-[#8ac240] rounded-full">
                  <a
                    href="https://wa.me/+919222285780"
                    className="flex items-center text-[#8ac240] cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp size={24} />
                    <span className="ml-2">WhatsApp: +91 9222285780</span>
                  </a>
                  <button
                    onClick={() => handleCopy('+91 9222285780')}
                    className="text-gray-500 hover:text-[#8ac240] focus:outline-none"
                  >
                    <MdContentCopy size={20} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 border border-[#8ac240] rounded-full">
                  <a
                    href="mailto:bharathakshafoundation@gmail.com"
                    className="flex items-center text-[#8ac240] cursor-pointer"
                  >
                    <FaEnvelope size={24} />
                    <span className="ml-2">Email: bharathakshafoundation@gmail.com</span>
                  </a>
                  <button
                    onClick={() => handleCopy('bharathakshafoundation@gmail.com')}
                    className="text-gray-500 hover:text-[#8ac240] focus:outline-none"
                  >
                    <MdContentCopy size={20} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 border border-[#8ac240] rounded-full">
                  <a
                    href="tel:+919222285780"
                    className="flex items-center text-[#8ac240] cursor-pointer"
                  >
                    <FaPhone size={24} />
                    <span className="ml-2">Call: +91 9222285780</span>
                  </a>
                  <button
                    onClick={() => handleCopy('+91 9222285780')}
                    className="text-gray-500 hover:text-[#8ac240] focus:outline-none"
                  >
                    <MdContentCopy size={20} />
                  </button>
                </div>
        
              </div>
            </div>
          </div>
        </>
      )}

      <button
        className="w-14 h-14 bg-[#8ac240] text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span>{open ? <IoIosRemove className='self-center h-8 w-8'/> : <IoIosAdd className='self-center h-8 w-8'/>}</span> 
      </button>
    </div>
  );
};

export default FloatingActionButton;
