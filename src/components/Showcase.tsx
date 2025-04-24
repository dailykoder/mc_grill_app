import Image from "next/image";

const ROUTE_PREFIX = process.env.NEXT_PUBLIC_ROUTE_PREFIX ?? "";
const showcaseOptions = [
  {
    step: "1",
    title: "Choose Your Base",
    description: "Select white rice, brown rice, glass noodles, or salad",
    image: `${ROUTE_PREFIX}/homepage/showcase/bases/white-rice.avif`,
  },
  {
    step: "2",
    title: "Pick Your Protein",
    description:
      "Choose from bulgogi beef, spicy pork, galbi, tofu, or chicken",
    image: `${ROUTE_PREFIX}/homepage/showcase/proteins/bulgogi.webp`,
  },
  {
    step: "3",
    title: "Add Toppings",
    description: "Select from fresh vegetables and Korean sides",
    image: `${ROUTE_PREFIX}/homepage/showcase/korean-toppings.avif`,
  },
  {
    step: "4",
    title: "Choose Your Sauce",
    description: "Finish with gochujang, soy garlic, or sesame sauce",
    image: `${ROUTE_PREFIX}/homepage/showcase/gochujang.jpg`,
  },
];

export default function Showcase() {
  return (
    <section className="container mx-auto px-6 py-24 md:px-10">
      <div className="flex flex-col items-center gap-4">
        <span className="rounded-full border bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
          How It Works
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Build Your Korean Meal
        </h2>
        <p className="max-w-[700px] text-center text-xl text-gray-500">
          Create your perfect meal in 4 simple steps
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {showcaseOptions.map((step, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-bl-xl bg-red-600 font-bold text-white">
              {step.step}
            </div>
            <div className="aspect-[4/3] w-full">
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
