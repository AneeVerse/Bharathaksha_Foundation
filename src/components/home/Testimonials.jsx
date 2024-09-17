"use client";
import React, { useState } from "react";
import Image from "next/image";

// List of testimonials
const testimonials = [
  {
    name: "Josefin Fashkin",
    title: "Senior Activist",
    quote:
      "Gracious is a nonprofit organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    image: "/images/home/team_1.jpg", // Add your image path
  },
  {
    name: "John Doe",
    title: "Community Leader",
    quote:
      "Amazing support and a fantastic cause to support. I have seen firsthand the impact that Gracious has on people's lives.",
    image: "/images/home/team_2.jpg", // Add your image path
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-[20px] sm:py-[70px]">
     {/* <div className="bg-gradient-to-r from-green-900  to-[#0e2f50] h-[300px] sm:h-[400px]"> */}
     <div className="relative overflow-hidden bg-gradient-to-br from-white  h-[300px] sm:h-[400px] via-[#f0f8f7] to-[#f2f6f1]">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-3 left-10 w-40 h-40 bg-[#8ac240] opacity-20 rounded-full blur-xl animate-pulse"></div> */}
      {/* <div className="absolute hidden sm:block  bottom-0 right-20 w-60 h-60 bg-[#0e2f50] opacity-10 rounded-full blur-2xl animate-pulse delay-500"></div> */}
      
  <div className="flex flex-row justify-between py-10 sm:py-20 px-5 sm:px-20 items-center">
    <div>
      <h2 className="font-semibold text-[#0e2f50] text-md md:text-xl">Our Testimonials</h2>
      <h3 className="text-center text-2xl md:text-5xl font-semibold text-[#0e2f50] mb-8 mt-4">
        What People Say
      </h3>
    </div>
    {/* Next and Previous Buttons */}
    <div className="px-4 flex flex-row gap-4">
      <button
        onClick={prevTestimonial}
        className="bg-[#8ac240] text-[#0e2f50] w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#6f9e1d]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={nextTestimonial}
        className="bg-[#8ac240] text-[#0e2f50] w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#6f9e1d]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
<div className="relative w-[90%] sm:[80%] lg:w-full bg-white rounded-lg -mt-[150px] sm:-mt-[180px] shadow-lg py-10 px-6 text-center max-w-3xl mx-auto">
  <p className="text-lg text-gray-600 mb-8">{testimonials[currentIndex].quote}</p>
  <div className="flex justify-center items-center">
    <Image
      src={testimonials[currentIndex].image}
      alt={testimonials[currentIndex].name}
      width={60}
      height={60}
      className="rounded-full"
    />
  </div>
  <h4 className="text-lg font-semibold mt-4 text-[#8ac240]">
    {testimonials[currentIndex].name}
  </h4>
  <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
</div>
    </div>
  );
};

export default Testimonials;
