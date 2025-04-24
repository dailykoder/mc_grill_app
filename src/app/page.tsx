import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import IngredientShowcase from "@/components/IngredientShowcase";
import StartOrder from "@/components/StartOrder";
import StyleOptions from "@/components/StyleOptions";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Showcase />
      <StyleOptions />
      <IngredientShowcase />
      <StartOrder />
    </div>
  );
}
