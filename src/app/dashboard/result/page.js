"use client"

import Loader from "@/components/layout/Loader";
import Image from "next/image";
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
    <div className="min-h-screen mt-[90px] bg-gray-100">
      <div className="relative h-[230px] w-full">
        <Image
          src="/images/contact/breadcrumbs_bg.jpg"
          alt="bg"
          fill
          className="absolute top-0 left-0 object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Test Result</h2>
          {/* <p className="mt-4 text-white font-medium">
            Some Highlight Description
          </p> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-8">
        Test Results
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.map((quiz, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{quiz.title}</h2>
            
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Score:</span>
              <span className="text-lg font-bold text-green-600">{quiz.totalScore}</span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Date:</span>
              <span className="text-gray-600">{new Date(quiz.updatedAt).toLocaleDateString()}</span>
            </div>

            <button
              onClick={() => router.push(`/dashboard/result/${quiz._id}`)}
              className="w-full font-semibold mt-4 text-md py-2 px-4 border border-[#8ac240] text-[#8ac240] rounded-md hover:text-white hover:bg-[#8ac240] cursor-pointer text-center duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Page;
