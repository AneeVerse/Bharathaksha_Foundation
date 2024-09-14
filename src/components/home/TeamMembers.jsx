"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleRight , FaAngleLeft} from "react-icons/fa6";
import Link from "next/link";
// Team member data
const teamMembers = [
  {
    name: "Venod Nayak",
    title: "Managing Director",
    image: "/images/home/team/Venod-Nayak.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/venod-nayak-68196155/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
    },
  },
  {
    name: "Venkat Pulla ",
    title: "Advisor",
    image: "/images/home/team/Venkat-Pulla.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/venkat-pulla-a196998/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
    },
  },
  {
    name: "Keshav Walke",
    title: "Professor & Officiating Principa",
    image: "/images/home/team/Keshav-Walke.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/keshav-walke-93178a1b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
    },
  },
  {
    name: "Nimesh Sheth",
    title: "Deputy Manager",
    image: "/images/home/team/Nimesh-Sheth.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nimesh-sheth-06a20316/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
    },
  },
  {
    name: "Abhinav Burman",
    title: "CMD Brighton Facility",
    image: "/images/home/team/Abhinav-Burman.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhinav-burman-0871a1140/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
    },
  },
  {
    name: "Rohit Udyavar",
    title: "Marketer",
    image: "/images/home/team/Rohit-Udyavar.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rohitudyavar/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
    },
  },
];

const TeamMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track which card is at the start of the screen
  const visibleCards = 3; // Number of cards to show at once
  const cardWidth = 300; // Card width in pixels (adjust to fit your design)

  // Handle Next button click
  const handleNext = () => {
    if (currentIndex < teamMembers.length - visibleCards) {
      setCurrentIndex(currentIndex + 1); // Move to the next card
    }
  };

  // Handle Previous button click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous card
    }
  };

  return (
    <div className=" py-[70px] px-6 md:px-12 lg:px-24">
       <div className="text-center flex flex-col justify-center gap-3">
            <h2 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            Meet The Team
            </h2>
            <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full"/>

          </div>
      <div className="relative mt-[70px]">
        {/* Team member cards */}
        <div className="overflow-hidden">
          <div
            className="flex  transition-transform duration-500 gap-5 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`, // Adjust for card width + margin
            }}
          >
            {teamMembers.map((member, index) => (
              <Link 
                key={index}
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg border  p-6 text-center transition-transform duration-300 group mx-2 min-w-[270px]" // Adjust width as needed
              >
                <div className="flex justify-center mb-4">
                  <div className="inline-block border-[7px] border-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[#8ac240]">
                  {member.name}
                </h4>
                {/* <p className="text-sm text-gray-500 mb-4">{member.title}</p> */}
                <div className="flex justify-center mt-2 gap-4">
                  {member.socialLinks.linkedin && (
                    <span
                      className="text-[#0077b5] hover:text-[#005582]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.13 1 2.5 1s2.48 1.13 2.48 2.5zM.55 8.58h4.89v14.92H.55zM8.45 8.58h4.68v2.03h.06c.65-1.23 2.24-2.52 4.6-2.52 4.92 0 5.83 3.23 5.83 7.42v8.99H19.1v-7.96c0-1.9-.03-4.34-2.64-4.34-2.65 0-3.06 2.07-3.06 4.21v8.09H8.45V8.58z" />
                      </svg>
                    </span>
                  )}
                  {/* {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1da1f2] hover:text-[#0d8ddb]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.954 4.57a10.048 10.048 0 01-2.825.775 4.92 4.92 0 002.163-2.723c-.951.555-2.005.96-3.127 1.185A4.905 4.905 0 0016.616 3a4.916 4.916 0 00-4.917 4.92c0 .386.045.762.13 1.125A13.944 13.944 0 011.675 3.15a4.882 4.882 0 001.523 6.568 4.926 4.926 0 01-2.225-.617v.062a4.92 4.92 0 003.946 4.83 4.903 4.903 0 01-2.217.084 4.92 4.92 0 004.594 3.417 9.85 9.85 0 01-7.278 2.034A13.881 13.881 0 008.29 21c9.045 0 13.987-7.497 13.987-13.986 0-.21-.006-.42-.015-.63A9.936 9.936 0 0024 4.59a9.756 9.756 0 01-2.046.555z" />
                      </svg>
                    </a>
                  )} */}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Previous and Next buttons */}
        <div className="">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-4 py-4 absolute top-1/2 left-[-15px] translate-y-[-50%] bg-[#8ac240] text-white rounded-full ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
           <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= teamMembers.length - visibleCards}
            className={`px-4 py-4 absolute top-1/2 translate-y-[-50%] right-[-15px] bg-[#8ac240] text-white rounded-full ${
              currentIndex >= teamMembers.length - visibleCards
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaAngleRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
