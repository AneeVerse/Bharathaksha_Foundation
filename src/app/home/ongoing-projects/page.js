import Image from "next/image";

export default function Page() {
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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"/>
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Our Ongoing Projects</h2>
          <p className="mt-4 text-white font-medium">
          We are actively working on several initiatives to make a positive
          impact on communities in need.
          </p>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img1.jpg"
                alt="CARE Medical Project"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">CARE Medical Project</h2>
              <p className="text-gray-600 mb-4">
                Making healthcare accessible through affordable medicines,
                crowdfunding, and medical drop-box initiatives.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img2.jpg"
                alt="Education for All"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Education for All</h2>
              <p className="text-gray-600 mb-4">
                Empowering marginalized communities with educational resources
                and skill-building workshops.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img4.jpg"
                alt="Skill Development"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Skill Development</h2>
              <p className="text-gray-600 mb-4">
                Offering vocational training programs to boost employment
                opportunities for the underprivileged.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-600">Our Current Efforts</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Explore the various ongoing initiatives aimed at improving lives
              and supporting communities.
            </p>
          </div>

          {/* Project List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/ongoing/img1.jpg"
                alt="CARE Medical Project"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-green-600">
                CARE Medical Project
              </h3>
              <p className="text-gray-700 mb-4">
                The CARE Medical Project focuses on providing affordable
                healthcare services through generic medical stores, medicine
                drop-box initiatives, and crowdfunding efforts.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Starting a generic medical store</li>
                <li>Medicine drop-box initiative to redistribute unused meds</li>
                <li>Crowdfunding for essential medical supplies</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 text-green-600 hover:text-green-800 transition-colors duration-300"
              >
                Read More &rarr;
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/ongoing/img2.jpg"
                alt="Education for All"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-yellow-600">
                Education for All Initiative
              </h3>
              <p className="text-gray-700 mb-4">
                Ensuring that every child has access to quality education by
                providing free study materials and career guidance programs for
                underprivileged students.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Distribution of free study materials</li>
                <li>Organizing career guidance seminars</li>
                <li>Partnering with local schools</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 text-yellow-600 hover:text-yellow-800 transition-colors duration-300"
              >
                Read More &rarr;
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/ongoing/img3.jpg"
                alt="Skill Development Program"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-blue-600">
                Skill Development Program
              </h3>
              <p className="text-gray-700 mb-4">
                Helping individuals from underserved communities develop skills
                for better employment opportunities.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Vocational training in various trades</li>
                <li>Partnerships with local businesses</li>
                <li>Job placement assistance</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Read More &rarr;
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/ongoing/img4.jpg"
                alt="Food Distribution Program"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-red-600">
                Food Distribution Program
              </h3>
              <p className="text-gray-700 mb-4">
                Combatting hunger by providing meals and groceries to families
                in need.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Weekly food distribution drives</li>
                <li>Partnerships with local food banks</li>
                <li>Mobile food trucks for remote areas</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-4 text-red-600 hover:text-red-800 transition-colors duration-300"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
