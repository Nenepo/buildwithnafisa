import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import RealImpact from "@/components/sections/RealImpact";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <RealImpact />
      <Process />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
