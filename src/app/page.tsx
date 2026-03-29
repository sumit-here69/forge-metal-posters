import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyMetal from "@/components/WhyMetal";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Collections />
      <FeaturedProducts />
      <WhyMetal />
      <Testimonials />
      <CTABanner />
      <Instagram />
    </>
  );
}
