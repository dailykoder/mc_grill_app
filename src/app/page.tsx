import Link from "next/link";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Showcase />
    </div>
  );
}
