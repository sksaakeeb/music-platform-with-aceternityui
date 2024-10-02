import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import TestimonialCards from "./components/TestimonialCards";
import Webinars from "./components/Webinars";
import Instructors from "./components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />

      <TestimonialCards />
      <Webinars />
      <Instructors />
    </main>
  );
}