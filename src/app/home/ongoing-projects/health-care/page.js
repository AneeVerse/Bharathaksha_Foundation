import React from 'react'

const page = () => {
  return (
    <div className="bg-white mt-[90px] min-h-screen py-16">
      {/* Title Section */}
      <div className="mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#0e2f50] mb-6">
          Healthcare Initiatives
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          Access to quality healthcare is a fundamental right, and at Bharathaksha Foundation, we are committed to making it a reality for everyone through our innovative programs.
        </p>
      </div>

      {/* Thumbnail Image Section */}
      <div className="max-w-5xl mx-auto mt-12 px-2">
        <img 
          src="/images/ongoing/img2.jpg" 
          alt="Healthcare Initiatives" 
          className="w-full h-80 md:h-[500px] object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Subheadings and Content Section */}
      <div className="max-w-5xl mx-auto mt-14 px-6 sm:px-8 space-y-16">
        
        {/* Subheading 1: Generic Medical Stores */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Enhancing Access to Medicines (CARE Medical Project)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Bharathaksha Foundation, we are making affordable medicines accessible through generic medical stores, medicine drop boxes, and crowdfunding initiatives.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Generic Medical Stores: Affordable generic medications for those in need.</li>
            <li className="mb-2">Medicine Drop Boxes: Secure collection points for unused medications.</li>
            <li className="mb-2">Crowdfunding: Raising funds to provide medicines to the underprivileged.</li>
          </ul>
        </div>

        {/* Subheading 2: Medicine Drop Boxes */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Medicine Drop Boxes
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Medicine drop boxes allow individuals to donate unused or unexpired medications, reducing wastage and helping those who cannot afford treatments.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Prevent medication wastage through responsible disposal.</li>
            <li className="mb-2">Redistribute medicines to underprivileged communities.</li>
          </ul>
        </div>

        {/* Subheading 3: Crowdfunding for Medicines */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Crowdfunding for Medicines
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Crowdfunding empowers us to raise financial support to purchase and distribute medications to those who need them most, ensuring financial challenges don&apos;t hinder access to essential healthcare.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Community-driven campaigns to fund medicine purchases.</li>
            <li className="mb-2">Distributed medicines help underprivileged individuals access healthcare.</li>
          </ul>
        </div>

        {/* Health Camps and Awareness Drives */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50]  mb-5">
            Health Camps and Awareness Drives
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We organize regular health camps and awareness drives to provide free medical checkups and educate communities on preventive healthcare practices.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Free medical checkups and consultations for underserved communities.</li>
            <li className="mb-2">Education on preventive healthcare, nutrition, and hygiene.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default page
