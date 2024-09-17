"use client"
import AboutSection from "@/components/home/AboutSection";
import KnowYourself from "@/components/home/KnowYourself";
import HeroSection from "@/components/home/HeroSection";
import OurPartner from "@/components/home/OurPartner";
import TeamMembers from "@/components/home/TeamMembers";
import Testimonials from "@/components/home/Testimonials";
import OngoingProject from "@/components/home/OngoingProject";
import { Provider } from "react-redux";
import store from "@/store/store";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div >
      <Provider store={store}>
        
      <Navbar/>
    <HeroSection/>
    {/* <div className=" container mx-auto"> */}
    <AboutSection/>
    <KnowYourself/>
    {/* </div> */}
    <OngoingProject/>
    <OurPartner/>
    <TeamMembers/>
    {/* <Testimonials/> */}
    <Footer/>
    </Provider>
    </div>
  );
}
