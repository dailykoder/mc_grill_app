import Image from "next/image";
import { Button } from "./ui/button";
export default function StyleOptions() {
  const ROUTE_PREFIX = process.env.NEXT_PUBLIC_ROUTE_PREFIX ?? "";
  return (
    <section className="container mx-auto mb-12 px-24 md:px-10">
      <div className="flex flex-col items-center gap-4">
        <span className="rounded-full border bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
          Our Options
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Choose Your Style
        </h2>
        <p className="max-w-[700px] text-center text-xl text-gray-500">
          Build a bowl or roll it up in kimbap
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="group relative h-96 overflow-hidden rounded-xl border sm:h-75">
          <div className="aspect-[16/9] h-full w-full overflow-hidden">
            <Image
              src={`${ROUTE_PREFIX}/homepage/korean-bowl-figma.avif`}
              alt="Korean Bowl"
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end gap-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
            <h3 className="text-2xl font-bold">Korean Bowl</h3>
            <p className="text-sm">
              A colorful and nutritious bowl filled with your choice of base,
              protein, and fresh toppings
            </p>
            <Button className="max-w-[10rem] bg-red-500 px-6 py-5">
              Build Your Bowl
            </Button>
          </div>
        </div>
        <div className="relative h-96 overflow-hidden rounded-xl border sm:h-75">
          <div className="h-full">
            <Image
              src={`${ROUTE_PREFIX}/homepage/kimbap.jpg`}
              alt="Kimbap Roll"
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end gap-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold">Kimbap Roll</h3>
            <p className="text-sm">
              Your favorite ingredients rolled in seaweed and rice, sliced for
              easy eating
            </p>
            <Button className="max-w-[10rem] bg-red-500 px-6 py-5">
              Build Your Roll
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
