"use client";
import { logout, setUserFromLocalStorage } from '@/store/slice/userSlice';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GoPerson } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';

const menuList = [
  {
    name: "Who we are",
    url: "/home/about",
    subLink: []
  },
  {
    name: "What we do",
    url: "/home/ongoing-projects", // Non-clickable parent item
    subLink: [
      {
        name: "Education and Care",
        url: "/home/ongoing-projects/education-and-care"
      },
      {
        name: "Health Cares",
        url: "/home/ongoing-projects/health-care"
      },
      {
        name: "Communities Funds",
        url: "/home/ongoing-projects/communities-funds"
      },
      {
        name: "LocalSupport",
        url: "/home/ongoing-projects/localsupport"
      },
    ]
  },
  {
    name: "Get Involved",
    url: "/home/get-involved",
    subLink: []
  },
  {
    name: "Gallery",
    url: "/home/gallery",
    subLink: []
  },
  // {
  //   name: "Blogs",
  //   url: "/",
  //   subLink: []
  // },
  {
    name: "Contact Us",
    url: "/home/contact",
    subLink: []
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn, user } = useSelector((state) => state.user);

  // Check for token in local storage and fetch user data from API
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Fetch user data using the token
      const fetchUserData = async () => {
        try {
          const res = await fetch("/api/verify-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token in headers
            },
          });

          if (res.ok) {
            const userData = await res.json(); // Parse user data from response
            dispatch(setUserFromLocalStorage({ token, user: userData }));
          } else {
            // If token is invalid or expired, log the user out
            dispatch(logout());
            localStorage.removeItem("token");
            router.push("/auth/login");
          }
        } catch (error) {
          console.error("Error fetching user data", error);
          dispatch(logout());
          localStorage.removeItem("token");
        }
      };

      fetchUserData();
    }
  }, [dispatch, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth/login');
  };

  return (
    <nav className="bg-white h-[90px] border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-[90px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={"/"} className="flex items-center text-lg sm:text-2xl">
            <img src="/logo/logo.webp" alt="Bharathaksha Foundation Logo" className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]" />
            <div className="text-[#8ac240] font-bold">Bharathaksha</div>
            <span className="ml-2 text-[#0e2f50] font-bold">Foundation</span>
          </Link>

          <div className="flex gap-5 items-center">
            {/* Menu for large screens */}
            <div className="hidden xl:flex space-x-6">
              {menuList.map((val, ind) => (
                <div key={ind} className="relative group">
                  {val.url ? (
                    <Link href={val.url} className={`hover:text-[#8ac240] font-semibold ${val.url === pathName ? "text-[#8ac240]" : "text-black"}`}>
                      {val.name}
                    </Link>
                  ) : (
                    <span className="font-semibold text-black group-hover:text-[#8ac240] cursor-default">
                      {val.name}
                    </span>
                  )}

                  {/* Submenu on hover for large screens */}
                  {val.subLink.length > 0 && (
                    <div className="absolute left-0 min-w-max py-2 hidden group-hover:block bg-white shadow-lg rounded-md">
                      {val.subLink.map((sub, subInd) => (
                        <Link
                          key={subInd}
                          href={sub.url}
                          className={`block px-4 py-2 hover:bg-gray-100 hover:text-[#8ac240] ${sub.url === pathName ? "bg-gray-100 text-[#8ac240]" : "text-black"}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {!isLoggedIn && (
                <>
                  <Link href="/auth/login" className={`hover:text-[#8ac240] font-semibold ${pathName === "/login" ? "text-[#8ac240]" : "text-black"}`}>
                    Login
                  </Link>
                  <Link href="/auth/register" className={`hover:text-[#8ac240] font-semibold ${pathName === "/register" ? "text-[#8ac240]" : "text-black"}`}>
                    Sign up
                  </Link>
                </>
              )}

              {isLoggedIn && (
                <div className="relative group">
                  <button className="flex items-center text-black hover:text-[#8ac240]">
                    <GoPerson size={25} />
                  </button>

                  {/* Profile dropdown */}
                  <div className="absolute right-0 border py-2  w-48 bg-white shadow-xl rounded-md hidden group-hover:block">
                  <span className="block px-4 py-2 text-base font-medium text-black">
                {user.name}
              </span>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#8ac240]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
               {/* <div className="hidden xl:flex items-center">
              <Link href={"/know-yourself"} className="bg-[#8ac240] text-white px-4 py-2 rounded-lg hover:bg-[#426217]">
                Know Yourself
              </Link>
            </div> */}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-black focus:outline-none focus:text-black">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`max-w-[300px] border-r bg-white ${isOpen ? 'translate-x-0' : 'translate-x-[-100%]'} duration-300`} style={{ height: "calc(100vh - 90px)" }}>
      {isLoggedIn && <div className='px-2 sm:px-3'>
        <span className="block px-3 py-2 text-base font-medium text-black">
               Hey, {user.name}
        </span>
        </div>
}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuList.map((val, ind) => (
            <div key={ind}>
              {val.url ? (
                <Link
                  href={val.url}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`block text-gray-900 hover:bg-gray-700 ${pathName === val.url ? "text-white bg-gray-700" : ""} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
                >
                  {val.name}
                </Link>
              ) : (
                <span className="block font-semibold px-3 py-2 text-black group-hover:text-[#8ac240] cursor-default">
                  {val.name}
                </span>
              )}

              {/* Subheadings for mobile view */}
              {val.subLink.length > 0 && (
                <div className="ml-4">
                  {val.subLink.map((sub, subInd) => (
                    <Link
                      key={subInd}
                      onClick={() => setIsOpen(!isOpen)}
                      href={sub.url}
                      className={`block text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md ${sub.url === pathName ? " text-[#618d28] " : ""}`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
    {/* <div className="flex justify-between mt-2">
            <Link href={"/know-yourself"} className="bg-[#8ac240] text-white px-6 py-2 rounded-full hover:bg-[#537b20]">
              Know Yourself
            </Link>
          </div> */}
          {!isLoggedIn ? (
            <>
              <Link
                href="/auth/register"
                onClick={() => setIsOpen(!isOpen)}
                className={`block text-gray-900 hover:bg-gray-700 ${pathName === "/register" ? "text-white bg-gray-700" : ""} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
              >
                Register
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setIsOpen(!isOpen)}
                className={`block text-gray-900 hover:bg-gray-700 ${pathName === "/login" ? "text-white bg-gray-700" : ""} hover:text-white px-3 py-2 rounded-md text-base font-medium`}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              {/* <Link
                href="/profile"
                onClick={() => setIsOpen(!isOpen)}
                className={`block text-gray-900 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium`}
              >
                Profile
              </Link> */}
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(!isOpen);
                }}
                className="block w-full text-left text-gray-900 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
