import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import IngredientShowcase from "@/components/IngredientShowcase";
import StartOrder from "@/components/StartOrder";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Showcase />
      <IngredientShowcase />
      <StartOrder />
    </div>
  );
}
