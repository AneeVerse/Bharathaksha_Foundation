import React from 'react'

const Page = () => {
  return (
    <div className="bg-white mt-[90px] min-h-screen py-16">
      {/* Title Section */}
      <div className="mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-5xl font-bold text-[#0e2f50] mb-6">
          Communities Fundraising
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          At Bharathaksha Foundation, we believe in empowering communities by enabling them to raise funds for critical needs such as healthcare, education, and community development.
        </p>
      </div>

      {/* Thumbnail Image Section */}
      <div className="max-w-5xl mx-auto mt-12 px-2">
        <img 
          src="/images/ongoing/img3.jpg" 
          alt="Communities Fundraising" 
          className="w-full h-80 md:h-[500px] object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Subheadings and Content Section */}
      <div className="max-w-5xl mx-auto mt-14 px-6 sm:px-8 space-y-16">
        
        {/* Subheading 1: Crowdfunding for Community Initiatives */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Crowdfunding for Community Initiatives
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Crowdfunding empowers communities to raise funds for healthcare, education, and local development. It brings people together for a common cause, helping to fund essential services for those in need.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Online and offline donation platforms for easy contributions.</li>
            <li className="mb-2">Transparent fund allocation with regular updates to donors.</li>
            <li className="mb-2">Partnerships with local hospitals and schools to distribute funds effectively.</li>
          </ul>
        </div>

        {/* Subheading 2: Community Engagement and Events */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Community Engagement and Events
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            By organizing community events, we aim to raise awareness and foster solidarity. These events bring together individuals, organizations, and donors to support important causes.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Charity drives and fundraising events for local causes.</li>
            <li className="mb-2">Workshops and educational programs on fundraising strategies.</li>
            <li className="mb-2">Volunteer engagement and opportunities for community members.</li>
          </ul>
        </div>

        {/* Subheading 3: Partnerships for Impact */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Partnerships for Greater Impact
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We collaborate with local organizations, businesses, and government bodies to maximize the impact of our fundraising initiatives. These partnerships ensure the funds raised are used efficiently for the benefit of the community.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Collaboration with local businesses and organizations.</li>
            <li className="mb-2">Government partnerships to support large-scale initiatives.</li>
            <li className="mb-2">Joint projects for sustainable community development.</li>
          </ul>
        </div>

        {/* Subheading 4: Transparency and Accountability */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50]  mb-5">
            Transparency and Accountability
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            At Bharathaksha Foundation, we ensure transparency in fund allocation and use. Donors receive regular updates on how their contributions are making a difference, and the community remains informed about project outcomes.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Regular reports and updates to donors on fund usage.</li>
            <li className="mb-2">Public audits and accountability measures to ensure transparency.</li>
            <li className="mb-2">Engaging the community in decision-making for fund allocation.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Page
