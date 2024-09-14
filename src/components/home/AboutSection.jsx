import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrGroup } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

const AboutSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f8f7] to-[#f2f6f1] py-[70px]">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-10 w-40 h-40 bg-[#8ac240] opacity-20 rounded-full blur-xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-0 right-20 w-60 h-60 bg-[#0e2f50] opacity-10 rounded-full blur-2xl animate-pulse delay-500"></div> */}
      
      {/* Main Content */}
      <div className="flex container mx-auto flex-col-reverse md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0 px-4 md:px-16 relative z-10">
        {/* Main Image */}
        <div className="relative flex justify-center flex-1 md:w-full h-[500px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="/images/home/about_img.png"
            alt="about us image"
            className="rounded-lg object-cover h-full"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full flex-1 md:text-left flex flex-col h-full gap-6 justify-between animate-fadeIn">
          <h2 className="text-lg font-semibold text-[#0e2f50]">Introduction</h2>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#8ac240] leading-snug">
            Step Forward Serve The Humanity Reach Out & Help
          </h1>
          <p className="text-gray-700">
            Bharathaksha Foundation is a nonprofit organization driven by the
            vision of India that is Bharat. With a strong focus on education,
            career guidance, skill development, and healthcare, the foundation
            strives to empower individuals and create a more inclusive society.
          </p>

          {/* Work as an Intern Section */}
          <div className="space-y-2 flex flex-col gap-2">
            <div className="flex flex-row gap-5 items-center ">
              <GrGroup className="text-[#8ac240] h-[90px] w-[90px] self-center animate-bounce" />
              <div>
                <h3 className="text-xl font-semibold">Work As An Intern</h3>
                <p className="text-gray-600">
                  Sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
              <Link
                href="/home/about"
                className="bg-[#8ac240] text-white font-semibold px-12 py-3 rounded-full hover:bg-[#5d8626] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Learn More
              </Link>
              <Link
                href="https://wa.me/1234567899"
                target="_blank"
                className="flex self-center border border-[#8ac240] group duration-200 rounded-full px-5 py-2 text-[#8ac240] items-center space-x-2 bg-white hover:text-white hover:bg-[#8ac240] transform hover:scale-105 transition"
              >
                <IoLogoWhatsapp className="w-5 h-5 self-center" />
                <p className="">+1234567899</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
