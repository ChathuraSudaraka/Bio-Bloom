import Layout from "../../layout/Layout";
import Hero from "../../components/home/hero";
import ProductShowcase from "../../components/productShowcase/ProductShowcase";
import StatisticsSection from "../../components/home/StatisticsSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import CTASection from "../../components/home/CTASection";

export function Home() {
  return (
    <Layout>
      <Hero />
      <ProductShowcase />
      <StatisticsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

export default Home;
