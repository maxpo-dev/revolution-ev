"use client"
// import Navbar from "./components/NavBar";
import Hero from "./components/HeroSection";
import EVEventHero from "./components/EVEventHero";
import FocusSectors from "./components/FocusSectors";
import EvMission from "./components/EvMission";
import SpeakersSection from "./components/SpeakersSection";
import WhyAttend from "./components/whyAttend";
// import Footer from "./components/footer";
// import TestimonialCarousel from "./components/testimonial";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <EVEventHero/>
      <FocusSectors/>
      <EvMission/>
      <SpeakersSection/>
      <WhyAttend/>
      {/* <Footer/> */}
      {/* <TestimonialCarousel/> */}
      {/* Rest of your page content */}

    </main>
  );
}