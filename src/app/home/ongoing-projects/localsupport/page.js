import React from 'react';

const LocalSupportPage = () => {
  return (
    <div className="bg-white mt-[90px] min-h-screen py-16">
      {/* Title Section */}
      <div className="mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#0e2f50] mb-6">
          LocalSupport.org: Empowering Communities
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          LocalSupport.org is a platform that connects community members, businesses, and organizations to meet essential needs and promote collaboration.
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
        
        {/* Subheading 1: Needs Board */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Needs Board
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            NGOs can post specific needs for resources, and local community members or businesses can provide assistance by matching those needs with available resources.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">NGOs post immediate community needs like food, clothing, or services.</li>
            <li className="mb-2">Community members and businesses can view and respond to these needs.</li>
            <li className="mb-2">Transparency in need fulfillment with real-time updates.</li>
          </ul>
        </div>

        {/* Subheading 2: Resource Directory */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Resource Directory
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            A comprehensive list of local services such as food banks, shelters, and medical services, ensuring community members can access essential resources easily.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Comprehensive and up-to-date list of community services.</li>
            <li className="mb-2">Services like food banks, medical centers, and shelters are easily accessible.</li>
            <li className="mb-2">Filter options to find resources based on specific needs or location.</li>
          </ul>
        </div>

        {/* Subheading 3: Volunteer Hub */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Volunteer Hub
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            LocalSupport.org connects volunteers with opportunities that match their skills and interests. By contributing time and effort, individuals help improve the community.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Browse volunteer opportunities that match your skills and interests.</li>
            <li className="mb-2">Sign up for one-time or recurring community projects.</li>
            <li className="mb-2">Track your volunteer hours and impact through the platform.</li>
          </ul>
        </div>

        {/* Subheading 4: Events Calendar */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Events Calendar
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Stay updated on community events, workshops, and educational programs. The centralized calendar ensures that community members can engage in events that benefit everyone.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">A centralized calendar for all community events and educational programs.</li>
            <li className="mb-2">Easy registration and reminders for upcoming events.</li>
            <li className="mb-2">Promotes active participation and learning within the community.</li>
          </ul>
        </div>

        {/* Subheading 5: Feedback and Reviews */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50] mb-5">
            Feedback and Reviews
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Users can provide feedback and reviews on services received, ensuring continuous improvement, accountability, and trust in the community.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Users share feedback to improve service quality and accountability.</li>
            <li className="mb-2">Public reviews help others make informed decisions about services.</li>
            <li className="mb-2">Direct communication with service providers for issue resolution.</li>
          </ul>
        </div>

        {/* Subheading 6: Data Analytics */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0e2f50]  mb-5">
            Data Analytics
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The platform tracks key metrics to assess the impact of community services, ensuring data-driven decisions and continuous improvement of services offered.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Tracking and reporting on key community service metrics.</li>
            <li className="mb-2">Data-driven insights to improve platform efficiency and impact.</li>
            <li className="mb-2">Reports available to community leaders and members for transparency.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default LocalSupportPage;
