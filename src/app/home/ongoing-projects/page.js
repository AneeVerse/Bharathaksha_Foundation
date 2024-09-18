import Image from "next/image";
import Link from "next/link";

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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">What we do</h2>
          <p className="mt-4 text-white font-medium">
            Bharathaksha Foundation empowers individuals by providing education,
            skill development, career guidance, and essential healthcare, fostering a more inclusive and prosperous India.
          </p>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="pb-16 bg-white">
        <div className="text-center flex flex-col my-8 justify-center gap-3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our Ongoing Projects
          </h2>
          <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Highlight 1 */}
            <Link            
            href="/home/ongoing-projects/education-and-care"
             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img1.jpg"
                alt="Education and Career"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Education and Career</h2>
              <p className="text-gray-600 mb-4">
                Enabling access to education and career guidance for marginalized communities to foster economic growth.
              </p>
              <span
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Learn More
              </span>
            </Link>

            {/* Highlight 2 */}
            <Link
            href="/home/ongoing-projects/health-care"
             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img2.jpg"
                alt="Healthcare Services"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Healthcare Services</h2>
              <p className="text-gray-600 mb-4">
                Providing affordable healthcare through community health initiatives and accessible medical services.
              </p>
              <span
                
                className="inline-block px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-300"
              >
                Learn More
              </span>
            </Link>

            {/* Highlight 3 */}
            <Link            
            href="/home/ongoing-projects/communities-funds"
             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img3.jpg"
                alt="Community Funds"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Community Crowdfunding</h2>
              <p className="text-gray-600 mb-4">
                Supporting local development projects through crowdfunding for healthcare, education, and livelihood enhancement.
              </p>
              <span
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </span>
            </Link>

            {/* Highlight 4 */}
            <Link            
            href="/home/ongoing-projects/localsupport"
             className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="/images/ongoing/img4.jpg"
                alt="LocalSupport Platform"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">LocalSupport Platform</h2>
              <p className="text-gray-600 mb-4">
                Connecting community resources with local needs through a digital platform that fosters collaboration and volunteerism.
              </p>
              <sapn
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </sapn>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
