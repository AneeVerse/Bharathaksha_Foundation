// components/Footer.js
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
    name: "About",
    url: "/home/about",
  },
  {
    name: "Contact",
    url: "/home/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About Us */}
          <div className="flex-1">
            <h2 className="text-white text-lg font-bold mb-4">
              <span className="text-[#8ac240]">Bharataksha</span>{" "}
              <span>Foundation</span>
            </h2>
            <p className="text-gray-400">
              We are a non-profit charity organization focused on making the
              world a better place by helping those in need.
            </p>
          </div>


          {/* Quick Links */}
          <div className="flex-1 flex flex-col md:items-center">
            <div >
              <h2 className="text-white text-lg font-bold text-start mb-4">Quick Links</h2>
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
            <div>
              <h2 className="text-white text-lg font-bold mb-4">Contact Us</h2>
              <p>Email: contact@gracious.org</p>
              <p>Phone: +123 456 7890</p>
              <p>Address: 123 Charity Street, Kindness City</p>
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
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-6 gap-5 flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Bharataksha Foundation. All Rights
            Reserved.
          </p>
          <p>Powered By Aneeverse</p>
        </div>
      </div>
    </footer>
  );
}
