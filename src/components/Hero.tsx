import Image from "next/image";
import { Button } from "./ui/button";
export default function Hero() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homepage/hero/mc_grill_hero.avif"
            alt="MC Grill Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto flex flex-col gap-6 px-6 py-24 md:px-10 md:py-32 lg:py-55">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Build your Own Korean Bowl & Kimbap Rolls
            </h1>
          </div>
          <p className="text-lg text-gray-100 md:text-xl">
            Customize your perfect Korean meal with fresh ingredients and
            authentic flavors.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="max-w-40 bg-red-600 p-5 hover:bg-red-700">
              Build Your Bowl
            </Button>
            <Button className="max-w-50 bg-red-600 p-5 hover:bg-red-700">
              Build Your Kimbap Roll
            </Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>
    </main>
  );
}
