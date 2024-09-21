"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// List of logos
const logoList = [
  {
    name: "client1",
    url: "/images/home/ourParnterSection/bajaj.webp",
  },
  {
    name: "client2",
    url: "/images/home/ourParnterSection/canara.webp",
  },
  {
    name: "client3",
    url: "/images/home/ourParnterSection/casino .webp",
  },
  {
    name: "client4",
    url: "/images/home/ourParnterSection/deepak.webp",
  },
  {
    name: "client5",
    url: "/images/home/ourParnterSection/fahara.webp",
  },
  {
    name: "client6",
    url: "/images/home/ourParnterSection/feepay 2.webp",
  },
  {
    name: "client7",
    url: "/images/home/ourParnterSection/katch.webp",
  },
  // {
  //   name: "client8",
  //   url: "/images/home/ourParnterSection/manya .webp",
  // },
  {
    name: "client8",
    url: "/images/home/ourParnterSection/mountain 2.webp",
  },
  {
    name: "client9",
    url: "/images/home/ourParnterSection/pathfinder.png",
  },
];

const OurPartner = () => {
  const [marginLeft, setMarginLeft] = useState(0)
  const [logos, setLogos] = useState([...logoList, ...logoList]); // Duplicate the list for infinite loop
  const [translateX, setTranslateX] = useState(0); // State to control the translation
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTranslateX((prevTranslateX) => prevTranslateX - 229 - 16); // Slide by card width (adjusted to your card's size)

      if (translateX <= -245 * logos.length) {
        // Reset position after the entire logo list has slid
        setTranslateX(0);
      }
      setLogos((prevLogos) => {
        const copyLogos = [...prevLogos];
        const firstLogo = copyLogos[logoIndex];
        copyLogos.push(firstLogo);
        return copyLogos;
      });
      setLogoIndex((prevIndex) => prevIndex + 1);
    }, 1000); // Slide every 2 seconds

    return () => clearInterval(slideInterval); // Clear interval on unmount
  }, [translateX]);


  useEffect(()=>{
    if(window.innerWidth < 500){      
    const mlLeft = (window.innerWidth - 245) / 2;
    setMarginLeft(mlLeft)
    }
  },[])
  


  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f8f7] to-[#f2f6f1] py-[40px] md:py-[70px]">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-8 left-10 w-40 h-40 bg-[#8ac240] opacity-20 rounded-full blur-xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-0 right-20 w-60 h-60 bg-[#0e2f50] opacity-10 rounded-full blur-2xl animate-pulse delay-500"></div> */}

      <div className="px-2 sm:px-5 md:px-10">
        <div className="text-center flex flex-col justify-center gap-3">
          <h2 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
            {"Partners with".toUpperCase()}
          </h2>
          <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full" />
        </div>

        <div className="relative mt-10 overflow-hidden w-full">
          <div
            className={`flex sm:ml-0 transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(${translateX}px)`, // Slide effect
              marginLeft : `${marginLeft}px`
            }}
          >
            {logos.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="bg-white rounded-md w-[229px] h-[127px] flex justify-center items-center min-w-[229px] min-h-[127px] mx-2 shadow-lg"
                >
                  <Image
                    src={val.url}
                    alt={val.name}
                    width={106}
                    height={95}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
