"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (response.ok) {
        setMessageSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setMessageSent(false), 10000);
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-white mt-[90px]">
      {/* Title and Description */}
      <div className="relative h-[230px] w-full">
        <Image
          src="/images/contact/breadcrumbs_bg.jpg"
          alt="bg"
          fill
          className="absolute top-0 left-0 object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="mt-4 text-white font-medium">
            The secret to happiness lies in helping others. Spread sunshine in
            their lives, no matter the weather.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f8f7] to-[#f2f6f1] ">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-10 w-40 h-40 bg-[#8ac240] opacity-20 rounded-full blur-xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#0e2f50] opacity-5 rounded-full blur-2xl animate-pulse delay-500"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Information Section */}
          <div className="flex-1 flex flex-col justify-around py-5 space-y-6">
            <Link
              href="https://maps.google.com/?q=Envato Pty Ltd 13/2 Elizabeth St Melbourne VLC 3000 Australia"
              target="_blank"
              className="bg-yellow-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-2 gap-2">
                <RiHomeOfficeFill className="text-gray-500 w-[20px] h-[20px]" />
                <h4 className="text-lg font-semibold">Address</h4>
              </div>
              <p><b className=" font-semibold">Head Office: </b>202, Himalaya Prestige, Udupi-Manipal Road, Kunjibettu, Udupi, Karnataka  576102</p>
             
              <p className="mt-2"><b className=" font-semibold">Navi Mumbai Office: </b>Office No. 03,  Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44, Seawoods, Navi Mumbai, Maharashtra 400706</p>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="tel:+919222285780"
                className="bg-blue-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-2 gap-2">
                  <FaPhone className="text-gray-500 w-[20px] h-[20px]" />
                  <h4 className="text-lg font-semibold">Phone Number</h4>
                </div>
                <p>+91 9222285780</p>
              </Link>

              <Link
                href="https://wa.me/+919222285780"
                target="_blank"
                className="bg-green-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-2 gap-2">
                  <IoLogoWhatsapp className="text-gray-500 w-[20px] h-[20px]" />
                  <h4 className="text-lg font-semibold">WhatsApp Number</h4>
                </div>
                <p>+91 9222285780</p>
              </Link>
            </div>

            <Link
              href="mailto:bharathakshafoundation@gmail.com"
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-2 gap-2">
                <MdEmail className="text-gray-500 w-[20px] h-[20px]" />
                <h4 className="text-lg font-semibold">Email Address</h4>
              </div>
              <p>bharathakshafoundation@gmail.com</p>
            </Link>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex-1 max-w-xl bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium"
                >
                 Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  rows="4"
                  required
                />
              </div>
            </div>

            {messageSent && (
              <div className="mt-6">
                <p className="text-green-500 font-bold">
                  Message sent successfully!
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#1a4a79] w-full text-white font-semibold rounded-lg shadow hover:bg-[#0e2f50]"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
