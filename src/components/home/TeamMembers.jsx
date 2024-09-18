"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
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
    name: "Venkat Pulla",
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
  const [visibleCards, setVisibleCards] = useState(3); // Default visible cards
  const [containerWidth, setContainerWidth] = useState(0); // Track the width of the container

  const cardWidth = 300; // Card width in pixels
  const gap = 4; // Gap between the cards

  // Dynamically update visible cards and container width based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setVisibleCards(1); // Show 1 card on small screens
      } else if (width <= 1024) {
        setVisibleCards(2); // Show 2 cards on medium screens
      } else {
        setVisibleCards(3); // Show 3 cards on larger screens
      }
      setContainerWidth(width);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

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
    <div className="py-[40px] md:py-[70px] px-6 md:px-12 lg:px-24">
      <div className="text-center flex flex-col justify-center gap-3">
        <h2 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
          {"Meet The Team".toUpperCase()}
        </h2>
        <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full" />
      </div>
      <div className="relative mt-[70px]">
        {/* Team member cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-5 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`, // Adjust for card width + margin
            }}
          >
            {teamMembers.map((member, index) => (
              <Link
                key={index}
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg border p-6 text-center transition-transform duration-300 group mx-2 min-w-[270px]" // Adjust width as needed
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
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
