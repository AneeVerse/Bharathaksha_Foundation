// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const quikLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Ongoing Projects",
    url: "/home/ongoing-projects",
  },
  {
    name: "Know Yourself",
    url: "/know-yourself",
  },
  {
    name: "Get Involved",
    url: "/home/get-involved",
  },
  {
    name: "About Us",
    url: "/home/about",
  },
  {
    name: "Contact Us",
    url: "/home/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About Us */}
          <div className="flex-1 ">
            <div className=" inline-flex flex-col justify-center">
              <img
                src="/logo/logo-tsp.webp"
                alt="Bharathaksha Foundation Logo"
                className="w-[80px] h-[80px] self-center"
              />
              <h2 className="text-white text-lg font-bold mb-4">
                <span className="text-[#8ac240]">Bharataksha</span>{" "}
                <span>Foundation</span>
              </h2>
            </div>
            <div className="text-gray-400">
            <Link
                href={"mailto:bharathakshafoundation@gmail.com"}
                className=" block hover:text-[#8ac240]"
              >
                Email: bharathakshafoundation@gmail.com
              </Link>
              <Link
                href={"tel:+919222285780"}
                className="block hover:text-[#8ac240]"
              >
                Phone: +91 9222285780
              </Link>
            </div>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#8ac240]">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8ac240]">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8ac240]">
                  <FaInstagram size={24} />
                </a>
              </div>
            {/* <p>Address: Office No. 03,  Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44, Seawoods, Navi Mumbai, Maharashtra 400706</p> */}
          </div>

          {/* Quick Links */}
          <div className="flex-1 flex flex-col md:items-center">
            <div>
              <h2 className="text-white text-lg font-bold text-start mb-4">
                Quick Links
              </h2>
              <ul>
                {quikLinks.map((val, ind) => {
                  return (
                    <li key={ind}>
                      <Link href={val.url} className="hover:text-[#8ac240]">
                        {val.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex-1 flex flex-col md:items-end">
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold mb-4">Address</h2>
            
              <Link href={""} className="block hover:text-[#8ac240]">
              <b>Registered Address:</b> 202, Himalaya Prestige, Udupi-Manipal Road, Kunjibettu, Udupi, Karnataka  576102
              </Link>
              {/* <hr className="my-2 w-[100px] mx-auto" /> */}
              <p className="mt-1" ><b>Navi Mumbai Address:</b> Office No. 03,  Plot No. 45, near HP Petrol Pump, Seawoods West, Sector 44, Seawoods, Navi Mumbai, Maharashtra 400706</p>
            
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-6 gap-5 flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Bharataksha Foundation. All Rights
            Reserved.
          </p>
          <Link href={"https://aneeverse.com/en/"} className="hover:text-[#8ac240] flex items-center gap-2">Powered By Aneeverse
          <Image src={"/logo/aneeverse-logo.png"} width={16} height={16} alt="aneeverse logo"/></Link>
        </div>
      </div>
    </footer>
  );
}
