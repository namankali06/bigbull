import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { ExplodedView } from "./components/ExplodedView";
import { Trust } from "./components/Trust";
import { Business } from "./components/Business";
import { Manufacturing } from "./components/Manufacturing";
import { Dealership } from "./components/Dealership";
import { Service } from "./components/Service";
import { Blog } from "./components/Blog";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-ink">
      <Header />
      <Hero />
      <ProductShowcase />
      <ExplodedView />
      <Trust />
      <Business />
      <Manufacturing />
      <Dealership />
      <Service />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}
