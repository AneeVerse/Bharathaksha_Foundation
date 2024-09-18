"use client";
import Loader from "@/components/layout/Loader";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaTrophy, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const results = [
  { quiz: "Quiz 1", score: 80, total: 100, status: "Passed" },
  { quiz: "Quiz 2", score: 60, total: 100, status: "Passed" },
  { quiz: "Quiz 3", score: 45, total: 100, status: "Failed" },
];

export default function ResultsPage() {

    const [isLoading , setIsLoading] = useState(true);

    
  const router = useRouter();
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
    <div className="min-h-screen bg-gray-100 mt-[90px] py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Quiz Results
        </h1>
        
        {/* Results Section */}
        <div className="space-y-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4"
            >
              {/* Quiz Title */}
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-500 rounded-full p-2">
                  <FaTrophy size={24} />
                </div>
                <h2 className="text-2xl font-semibold">{result.quiz}</h2>
              </div>
              
              {/* Progress Bar */}
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{result.score} out of {result.total}</span>
                  <span className="text-sm font-medium text-gray-600">{result.status}</span>
                </div>
                <div className="flex items-center h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(result.score / result.total) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Highlight Section */}
              <div className="flex items-center space-x-2">
                {result.status === "Passed" ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaTimesCircle className="text-red-500" />
                )}
                <span className={`text-lg ${result.status === "Passed" ? "text-green-500" : "text-red-500"}`}>
                  {result.status === "Passed" ? "Congratulations!" : "Try Again!"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
