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
          <h2 className="text-4xl font-bold text-white">Get Involved</h2>
          <p className="mt-4 text-white font-medium">
            Join us in making a positive impact. Whether you can volunteer, donate,
            or contribute in any other way, your support is invaluable.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Get Involved?</h2>
        <p className="mt-4 text-gray-700">
          Getting involved in our cause helps us bring hope and change to
          communities worldwide. Whether you contribute your time, skills, or
          resources, every action counts. Here&apos;s how you can participate.
        </p>
      </section>

      {/* Involvement Options Section */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Volunteering */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/ongoing/img2.jpg"
            alt="Volunteer"
            width={500}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Volunteer</h3>
            <p className="mt-2 text-gray-600">
              Join our team of volunteers and make a direct impact in the lives
              of others. Every helping hand counts!
            </p>
            <Link
              href="https://wa.me/+919222285780?text=I%20am%20interested%20in%20volunteering%20with%20the%20Bharathaksha%20Foundation!"
              className="mt-4 inline-block px-4 py-2 bg-[#1a4a79] text-white rounded-md hover:bg-[#0e2f50]"
            >
              Contact Us on WhatsApp
            </Link>
          </div>
        </div>

        {/* Donate */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/ongoing/img1.jpg"
            alt="Donate"
            width={500}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Donate</h3>
            <p className="mt-2 text-gray-600">
              Your donations help us provide essential resources and support to
              those in need. Every dollar makes a difference.
            </p>
            <Link
              href="https://wa.me/+919222285780?text=I%20would%20like%20to%20donate%20to%20the%20Bharathaksha%20Foundation!"
              className="mt-4 inline-block px-4 py-2 bg-[#1a4a79] text-white rounded-md hover:bg-[#0e2f50]"
            >
              Donate via WhatsApp
            </Link>
          </div>
        </div>

        {/* Fundraise */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/ongoing/img3.jpg"
            alt="Fundraise"
            width={500}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Fundraise</h3>
            <p className="mt-2 text-gray-600">
              Organize a fundraising event in your community and help us raise
              funds for our projects. Together, we can do more!
            </p>
            <Link
              href="https://wa.me/+919222285780?text=I%20am%20interested%20in%20fundraising%20for%20the%20Bharathaksha%20Foundation!"
              className="mt-4 inline-block px-4 py-2 bg-[#1a4a79] text-white rounded-md hover:bg-[#0e2f50]"
            >
              Start Fundraising on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-white py-8 px-4 text-center">
        <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Join Us</h2>
        <p className="mt-4 text-gray-700">
          At Bharathaksha Foundation, we are always looking for passionate individuals and organizations to join us in our mission. 
          Whether you are looking to volunteer, partner with us, or support our initiatives, there are many ways to get involved and make a difference.
        </p>
        <p className="mt-2 text-gray-700">
          Together, we can build a brighter future through education and healthcare.
        </p>
        <div className="mt-6">
          <p className="text-lg font-bold text-gray-900">Contact Us</p>
          <p className="text-gray-600">Bharathaksha Foundation</p>
          <p className="text-gray-600">Head office: 202, Himalaya Prestige, Udupi Manipal Road, Kunjibettu, Udupi – 576106</p>
          <p className="text-gray-600">Mumbai Office: Details Here</p>
        </div>
        </div>
      </section>
    </div>
  );
}
