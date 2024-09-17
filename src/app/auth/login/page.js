"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/slice/userSlice"; // Redux actions
import Link from "next/link";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const { token, user } = await res.json(); // Fetch token and user data
        dispatch(login({ token, user })); // Store in Redux
        router.push("/");
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

    // Check if the user is already logged in, if so, redirect to home page
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/"); // Redirect to home if token exists
      }
    }, []);

  return (
    <div className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-200">
    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      <div className="md:flex w-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-10">
          <div className="flex items-center text-lg sm:text-xl mb-4">
            <img
              src="/logo/logo.webp"
              alt="Bharataksha Foundation Logo"
              className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] shadow-lg rounded-full"
            />
            <div className="text-[#8ac240] font-bold ml-3 text-xl sm:text-2xl">Bharataksha</div>
            <span className="ml-2 text-[#0e2f50] font-bold text-xl sm:text-2xl">Foundation</span>
          </div>
          <h2 className="text-lg font-bold text-center text-gray-600 mb-6 tracking-wider mt-2">Login to your Account</h2>
  
          {/* Display Error */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
  
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              type="email"
              className="mb-4 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8ac240] focus:ring-2 focus:ring-[#8ac240] transition-all duration-200 shadow-sm"
              required
            />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              className="mb-4 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8ac240] focus:ring-2 focus:ring-[#8ac240] transition-all duration-200 shadow-sm"
              required
            />
  
            <button
              type="submit"
              className="w-full bg-[#8ac240] text-white py-3 rounded-lg hover:bg-[#6eac34] mt-4 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
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
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
  
          <div className="text-center mt-6">
            <span className="text-gray-500">Don&apos;t have an account? </span>
            <Link href="/auth/register" className="text-[#0e2f50] font-semibold">
              Create an account
            </Link>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-[#2c4907] to-[#8ac240] text-white flex items-center justify-center p-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Glad to have You back!</h2>
            <p className="text-sm leading-relaxed">
              Welcome to Bharataksha Foundation, where we prioritize your well-being. Sign in to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  );
}
