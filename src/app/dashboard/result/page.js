"use client"

import Loader from "@/components/layout/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return router.push("/auth/login");
      }

      const response = await fetch("/api/quiz/result", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch result");
      }

      const {data} = await response.json();
      console.log("resData", data);
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [router]);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen mt-[90px] bg-gray-100 p-6">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">
        Test Results
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.map((quiz, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{quiz.title}</h2>
            
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Score:</span>
              <span className="text-lg font-bold text-green-600">{quiz.totalScore}</span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Date:</span>
              <span className="text-gray-600">{new Date(quiz.updatedAt).toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">Category:</span>
              <span className="text-gray-600">{quiz.category}</span>
            </div>

            <button
              onClick={() => router.push(`/dashboard/result/${quiz._id}`)}
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
