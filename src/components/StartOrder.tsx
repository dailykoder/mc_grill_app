import { Button } from "./ui/button";
import Image from "next/image";
export default function StartOrder() {
  return (
    <section className="relative mt-12 px-6 py-24 md:px-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/mc_grill_app/homepage/korean-restaurant.avif"
          alt="Korean restaurant interior"
          fill
          className="object-cover brightness-[0.4]"
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-white">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-center font-bold sm:text-2xl lg:text-4xl">
            Start Your Order
          </h3>
          <p className="text-center text-lg tracking-tighter text-gray-200">
            Build your perfect Korean bowl or kimbap roll with our fresh
            ingredients
          </p>
        </div>
        <div className="flex justify-between gap-2">
          <Button variant="outline" className="px-10 py-5 text-black lg:px-20">
            Pickup
          </Button>
          <Button variant="destructive" className="px-10 py-5 sm:px-6 lg:px-20">
            Delivery
          </Button>
        </div>
        <div>
          <div className="mx-auto flex justify-center gap-8">
            <span className="text-center">Mon-Fri</span>
            <span className="text-center">Sat-Sun</span>
          </div>
          <div className="flex justify-center gap-8">
            <span>11am - 9pm</span>
            <span>12pm - 10pm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
