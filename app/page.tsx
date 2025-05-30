"use client"
import Hero from "./components/HeroSection";
import EVEventHero from "./components/EVEventHero";
import WhyAttend from "./components/whyAttend";
import { EvMission } from "./components/EvMission";
import EVCategoriesGrid from "./components/FocusSectors";
export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <EVEventHero/>
      {/* <FocusSectors/> */}
      <EVCategoriesGrid/>
      <EvMission/>
      {/* <SpeakersSection/> */}
      <WhyAttend/>
      {/* <Footer/> */}
      {/* <TestimonialCarousel/> */}
      {/* Rest of your page content */}

    </main>
  );
}