import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-50 mt-[90px] min-h-screen">
      {/* Header Section */}
      <section className="relative h-[230px] w-full">
        <Image
          src="/images/contact/breadcrumbs_bg.jpg"
          alt="bg"
          fill
          className="absolute top-0 left-0 object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Know Yourself</h2>
          <p className="mt-4 text-white font-medium">
            We are actively working on several initiatives to make a positive
            impact on communities in need.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
