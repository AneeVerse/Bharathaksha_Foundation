import React from 'react'

const page = () => {
  return (
    <div className="bg-white mt-[90px] min-h-screen  py-8 md:py-16">
      {/* Title Section */}
      <div className="mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#0e2f50] mb-6">
          Education and Career Guidance
        </h1>
        <p className="text-xl text-gray-700 text-justify max-w-4xl mx-auto">
          At Bharathaksha Foundation, we understand that the right guidance at the right time can transform lives. Our education initiatives support students and professionals in making informed career choices.
        </p>
      </div>

      {/* Thumbnail Image Section */}
      <div className="max-w-5xl mx-auto mt-12 px-2">
        <img 
          src="/images/ongoing/img2.jpg" 
          alt="Education and Career Guidance" 
          className="w-full h-80 md:h-[500px] object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Subheadings and Content Section */}
      <div className="max-w-5xl mx-auto mt-14 px-6 sm:px-8 space-y-16">
        
        {/* Subheading 1: Career Counseling */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Career Counseling
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Personalized counseling sessions to help individuals identify their strengths and interests, and align them with suitable career paths.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">In-depth career guidance tailored to individual needs.</li>
            <li className="mb-2">Helping students and professionals navigate career choices.</li>
          </ul>
        </div>

        {/* Subheading 2: Workshops and Seminars */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Workshops and Seminars
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Regular workshops and seminars featuring industry experts, covering topics such as resume building, interview skills, and emerging industry trends.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Resume building workshops and interview preparation seminars.</li>
            <li className="mb-2">Insightful discussions on industry trends and future opportunities.</li>
          </ul>
        </div>

        {/* Subheading 3: Mentorship Programs */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Mentorship Programs
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Connecting students and young professionals with experienced mentors for ongoing guidance and career support.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">One-on-one mentorship from industry experts and professionals.</li>
            <li className="mb-2">Long-term career support through structured mentorship programs.</li>
          </ul>
        </div>

        {/* Subheading 4: Scholarships and Financial Aid */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50]  mb-5">
            Scholarships and Financial Aid
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Providing financial assistance to deserving students to help them pursue their educational goals without financial constraints.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Scholarships for students with financial need and academic merit.</li>
            <li className="mb-2">Ensuring equal access to education through financial aid programs.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default page
