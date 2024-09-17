"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const bgImages = [
  {
    name: "First Image",
    url: "/images/ongoing/img3.jpg",
  },
  {
    name: "Second Image",
    url: "/images/ongoing/img4.jpg",
  },
  {
    name: "Third Image",
    url: "/images/ongoing/img2.jpg",
  },
];

const HeroSection = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Changes image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to go to the next image with sliding animation
  const handleNext = () => {
    setSlideDirection("right"); // Set direction to right for next slide
    setImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };

  // Function to go to the previous image with sliding animation
  const handlePrevious = () => {
    setSlideDirection("left"); // Set direction to left for previous slide
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? bgImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative  mt-[90px] h-[400px]   md:h-[500px] lg:h-screen overflow-hidden">
      {/* Image container with slide animation */}
      <div
        className="absolute top-[0px] h-[400px] md:h-[500px] lg:h-full left-0 w-full flex transition-transform duration-700"
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          minHeight: "200px"
        }}
      >
        {bgImages.map((val, ind) => (
          <div key={ind} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={val.url}
              alt={val.name}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority // Optimize for faster loading
            />
          </div>
        ))}
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-40 flex items-center justify-center h-full text-center text-white px-4">
        <div>
         <h1 className="text-4xl md:text-6xl font-bold leading-tight">          
          Bharataksha Foundation
          </h1>  
          <p className="text-xl md:text-3xl mt-3">Soul as Bharat</p>
         

          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href={"/home/about"}
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600"
            >
              About Us
            </Link>
            <Link
              href={"/know-yourself"}
              className="bg-transparent border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black flex items-center"
            >
              Know Yourself
            </Link>
          </div>
        </div>
      </div>

      {/* Left and Right Arrows */}
      <div className="flex justify-between items-center px-4 md:px-10">
        <button
          onClick={handlePrevious}
          className="bg-white translate-y-[-50%]  top-1/2 z-40  absolute text-black p-2 rounded-full opacity-80 hover:opacity-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white translate-y-[-50%]  absolute top-1/2 right-5 md:right-10 z-40 text-black p-2 rounded-full opacity-80 hover:opacity-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
