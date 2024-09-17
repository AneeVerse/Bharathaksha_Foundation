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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"/>
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Get Involved</h2>
          <p className="mt-4 text-white font-medium">
          oin us in making a positive impact. Whether you can volunteer, donate,
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
            <Link href="/volunteer" className="mt-4 inline-block px-4 py-2 bg-[#1a4a79] text-white rounded-md hover:bg-[#0e2f50]">
                Learn More
           
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
            <Link href="/donate"  className="mt-4 inline-block px-4 py-2 bg-[#1a4a79] text-white rounded-md hover:bg-[#0e2f50]">
                Donate Now
             
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
            <Link href="/fundraise"  className="mt-4 inline-block px-4 py-2 bg-[#1a4a79] text-white rounded-md hover:bg-[#0e2f50]">
                Get Started
             
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className=" py-16  relative overflow-hidden bg-gradient-to-br from-white via-[#f0f8f7] to-[#f2f6f1]">
   
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-900">
            Whether you’re interested in volunteering, donating, or organizing a
            fundraiser, your contribution is vital to our mission. Join us and
            let’s create change together.
          </p>
          <div className="mt-8">
            <Link href="/join" 
              className="inline-block px-8 py-4 bg-white text-[#1a4a79] font-semibold rounded-md shadow-md hover:bg-gray-200">
                Get Involved Today
             </Link>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-[#0e2f50] mb-4">Every Contribution Counts</h2>
            <p className="text-gray-700 mb-6">
              No matter how small or large your contribution, it has the power to make
              a significant difference in the lives of those who need it most.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 text-white bg-[#8ac240] rounded-lg hover:bg-green-500 transition ease-in-out duration-300"
            >
              Get Involved Now
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
