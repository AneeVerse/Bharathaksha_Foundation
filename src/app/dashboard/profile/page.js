"use client";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { FaCamera, FaUser } from "react-icons/fa";
import Loader from "@/components/layout/Loader";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
  });
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { token } = useSelector((state) => state.user);
  
  const fileInputRef = useRef(null);
  

  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
          setFormData(userData);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching user data");
      }
    };

    fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const updatedUser = await res.json();
        setUser(updatedUser);
      } else {
        throw new Error("Failed to update user data");
      }
    } catch (error) {
      console.error(error);
      setError("Error updating user data");
    }
  };


 
  // Check if the user is already logged in, if so, redirect to home page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login"); // Redirect to home if token exists
    }
        setIsLoading(false)
  }, []);


  if(isLoading) return <Loader/>
  return (
    <div className="min-h-screen mt-[90px] bg-gray-100">
      {/* Banner */}
      <div className="bg-[#0e2f50] text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Your Profile</h1>
          <p className="mt-2 text-lg">Manage your profile information and settings.</p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-[-30px] relative z-10">
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        
        {/* Profile Card */}
        <div className="flex flex-col items-center mb-6 relative">
          <div className="relative">
            <div
              className={`w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center cursor-pointer ${formData.image ? 'bg-transparent' : 'bg-gray-200'}`}
              onClick={handleImageClick}
            >
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <FaUser size={40} className="text-gray-500" />
              )}
              <label className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-2 cursor-pointer">
                <FaCamera size={20} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  ref={fileInputRef}
                />
              </label>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-4">{formData.name}</h2>
          <p className="text-gray-600">{formData.email}</p>
          <p className="text-gray-600">{formData.phone}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
