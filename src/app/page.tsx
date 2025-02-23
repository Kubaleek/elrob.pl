import About from "@/components/ui/LandingPage/about";
import Gallery from "@/components/ui/LandingPage/gallery";
import Hero from "@/components/ui/LandingPage/hero";
import Offer from "@/components/ui/LandingPage/offer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Gallery />
    </>
  );
}
