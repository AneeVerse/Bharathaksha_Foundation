import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrGroup } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const KnowYourself = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-bl from-white via-[#f0f8f7] to-[#f2f6f1] py-[70px]">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-10 right-10 w-32 h-32 bg-[#8ac240] opacity-20 rounded-full blur-xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#0e2f50] opacity-10 rounded-full blur-2xl animate-pulse"></div> */}
      
      {/* Main Content */}
      <div className="flex  container mx-auto flex-col-reverse md:flex-row-reverse gap-10 h-full items-stretch justify-between md:space-x-8 space-y-8 md:space-y-0 px-4 md:px-16 relative z-10">
        {/* Main Image */}
        <div className="relative flex justify-center h-[400px] flex-1 md:w-full rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/ongoing/img1.jpg"
            alt="about us image"
            className="rounded-lg h-full object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full flex-1 text-left flex flex-col justify-between py-5 gap-6 animate-fadeIn">
          <h2 className="text-lg font-semibold text-[#0e2f50]">Know Yourself</h2>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#8ac240] leading-snug">
            Step Forward Serve The Humanity Reach Out & Help
          </h1>
          <p className="text-gray-700">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused,
            and the helpless. Spread sunshine in their lives no matter what the
            weather may be.
          </p>

          {/* Button */}
          <Link
            href="/know-yourself"
            className="bg-[#8ac240] flex gap-3 w-full text-white font-semibold justify-center items-center px-6 py-3 rounded-full hover:bg-[#5d8626] transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaRegUser className="text-[#ffffff] w-5 h-5 self-center" />
            <span className="text-lg">Know Yourself</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowYourself;
