import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrGroup } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

const KnowYourself = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-bl from-white via-[#f0f8f7] to-[#f2f6f1] py-[20px] sm:py-[70px]">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-10 right-10 w-32 h-32 bg-[#8ac240] opacity-20 rounded-full blur-xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#0e2f50] opacity-10 rounded-full blur-2xl animate-pulse"></div> */}
      
      {/* Main Content */}
      <div className="flex  container mx-auto flex-col-reverse lg:flex-row-reverse gap-10 h-full items-stretch justify-between lg:space-x-8 space-y-8 lg:space-y-0 px-4 lg:px-16 relative z-10">
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
            Empowering Through Education, Healthcare, and Opportunity
          </h1>
          <p className="text-gray-700">
          Bharathaksha Foundation is committed to transforming lives through education, career guidance, skill development, and accessible healthcare. By addressing the needs of the underprivileged, we aim to create a more inclusive, healthier, and prosperous India.
          </p>

          {/* Button */}
          <div className="flex gap-8 mt-3">
            
          <SiTestcafe className="text-[#8ac240] h-[70px] w-[70px] self-center animate-bounce" />
            
            <div className=""> <Link
            href="/know-yourself"
            className="bg-[#8ac240] flex gap-3 w-full text-white font-semibold justify-center items-center px-8 py-2 rounded-full hover:bg-[#5d8626] transition duration-300 ease-in-out transform hover:scale-105"
          >

            {/* <FaRegUser className="text-[#ffffff] w-5 h-5 self-center" /> */}
            <span className="text-lg">Know Yourself</span>
          </Link>
        </div>
        </div>        
        </div>
          
      </div>
    </div>
  );
};

export default KnowYourself;
