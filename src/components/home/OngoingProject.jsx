import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const onGoingProjectLists = [
  {
    title: "Education and Care",
    des: `At Bharathaksha Foundation, we understand that the right guidance at the right time can transform lives. Our education initiatives support students and professionals in making informed career choices.`,
    url: `/home/ongoing-projects/education-and-care`,
    imgUrl: `/images/ongoing/img2.jpg`,
  },
  {
    title: "Health Cares",
    des: `Access to quality healthcare is a fundamental right, and at Bharathaksha Foundation, we are committed to making it a reality for everyone through our innovative programs.`,
    url: `/home/ongoing-projects/health-care`,
    imgUrl: `/images/ongoing/img5.jpg`,
  },
  {
    title: "Communities Funds",
    des: `At Bharathaksha Foundation, we believe in empowering communities by enabling them to raise funds for critical needs such as healthcare, education, and community development.`,
    url: `/home/ongoing-projects/communities-funds`,
    imgUrl: `/images/ongoing/img3.jpg`,
  },
];

const OngoingProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === onGoingProjectLists.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? onGoingProjectLists.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Project Highlights */}
      <section className="py-[40px] md:py-[70px] bg-gradient-to-b from-white via-[#f0f8f7] to-[#f2f6f1]">
        {/* Section Header */}
        <div className="text-center flex flex-col justify-center gap-3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
            {"Ongoing Projects".toUpperCase()}
          </h2>
          <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full animate-pulse" />
        </div>

        {/* Responsive Project Cards */}
        <div className="container mx-auto pt-[20px] sm:pt-[50px] px-4 sm:px-12">
          <div className="block lg:hidden relative">
            {/* Only show on small screens */}
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-0 bg-[#8ac24065] z-40 text-white px-3 py-3 rounded-full hover:bg-[#5c862686] transition-colors"
              >
               <FaAngleLeft />
              </button>

              {/* Single Card */}
              <div
                className="relative w-full max-w-lg transition-transform duration-500"
              >
                <div className="bg-white p-3 sm:p-6 rounded-xl shadow-lg text-center">
                  {/* Image */}
                  <img
                    src={onGoingProjectLists[currentIndex].imgUrl}
                    alt={onGoingProjectLists[currentIndex].title}
                    className="w-full h-[200px] sm:h-[240px] object-cover rounded-lg mb-4"
                  />
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-2 text-[#0e2f50]">
                    {onGoingProjectLists[currentIndex].title}
                  </h2>
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-4">
                    {onGoingProjectLists[currentIndex].des}
                  </p>
                  {/* Learn More Button */}
                  <a
                    href={onGoingProjectLists[currentIndex].url}
                    className="inline-block px-6 py-2 bg-[#8ac240] text-white rounded-lg hover:bg-[#5d8626] transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-0 bg-[#8ac24077] text-white px-3 py-3 rounded-full hover:bg-[#5c862685] transition-colors"
              >
                <FaAngleRight className='' />
              </button>
            </div>
          </div>

          {/* Grid for larger screens */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {onGoingProjectLists.map((val, ind) => (
              <div
                key={ind}
                className="relative bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={val.imgUrl}
                  alt={val.title}
                  className="w-full h-[240px] object-cover rounded-lg mb-4 transition-opacity duration-300 hover:opacity-90"
                />

                {/* Project Title */}
                <h2 className="text-2xl font-bold mb-2 text-[#0e2f50]">
                  {val.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {val.des}
                </p>

                {/* Learn More Button */}
                <a
                  href={val.url}
                  className="inline-block px-6 py-2 bg-[#8ac240] text-white rounded-lg hover:bg-[#5d8626] transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProject;
