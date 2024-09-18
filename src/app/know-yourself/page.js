"use client"
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";
import store from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

const Page = () => {
 

  const router = useRouter();
    // Check if the user is already logged in, if so, redirect to home page
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login"); // Redirect to home if token exists
      }else{
        router.push("/dashboard/exam")
      }
    }, []);

  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <div className="bg-gray-50 mt-[90px] overflow-hidden min-h-screen">
      {/* Header Section */}
      {/* <section className="relative h-[230px] w-full">
        <Image
          src="/images/contact/breadcrumbs_bg.jpg"
          alt="bg"
          fill
          className="absolute top-0 left-0 object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Know Yourself</h2>
          <p className="mt-4 text-white font-medium">
            We are actively working on several initiatives to make a positive
            impact on communities in need.
          </p>
        </div>
      </section> */}
      <Loader/>
    </div>
    {/* <Footer /> */}
    </Provider>
    </>
  );
};

export default Page;
