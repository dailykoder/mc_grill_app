import Image from "next/image";

const BASE_OPTIONS = [
  {
    name: "White Rice",
    description: "Fluffy steamed short grain rice",
    image: "/homepage/showcase/bases/white-rice.avif",
  },
  {
    name: "Brown",
    description: "Hearty and nutritious whole grain option",
    image: "/homepage/showcase/bases/brown-rice.jpg",
  },
  {
    name: "Glass Noodles",
    description: "Traditional Korean sweet potato noodles",
    image: "/homepage/showcase/bases/glass-noodles.avif",
  },
  {
    name: "Salad",
    description: "Fresh vegetable seasonal spring mix",
    image: "/homepage/showcase/bases/salad.avif",
  },
];

const PROTEIN_OPTIONS = [
  {
    name: "Bulgogi Beef",
    description: "Sweet and savory marinated beef",
    image: "/homepage/showcase/proteins/bulgogi.webp",
  },
  {
    name: "Spicy Pork",
    description: "Sweet and spicy marinated pork",
    image: "/homepage/showcase/proteins/spicy-pork.webp",
  },
  {
    name: "Garlic Chicken",
    description: "Tender chicken in soy garlic sauce",
    image: "/homepage/showcase/proteins/garlic-chicken.jpg",
  },
  {
    name: "Tofu",
    description: "Seasoned and marinated tofu for vegetarian option",
    image: "/homepage/showcase/proteins/tofu.jpg",
  },
];

const FRESH_TOPPINGS = [
  {
    name: "Kimchi",
    image: "/homepage/showcase/toppings/kimchi.avif",
  },
  {
    name: "Bean Sprouts",
    image: "/homepage/showcase/toppings/bean-sprouts.jpg",
  },
  {
    name: "Spinach",
    image: "/homepage/showcase/toppings/spinach.avif",
  },
  {
    name: "Pickled Radish",
    image: "/homepage/showcase/toppings/pickled-radish.jpg",
  },
  {
    name: "Radish Kimchi",
    image: "/homepage/showcase/toppings/radish-kimchi.jpg",
  },
  {
    name: "Cucumber",
    image: "/homepage/showcase/toppings/cucumber.avif",
  },
];

const SIGNATURE_SAUCES = [
  {
    name: "Gochujang",
    description: "Spicy Korean chili paste",
    image: "/homepage/showcase/sauces/gochujang.jpg",
  },
  {
    name: "Soy Garlic",
    description: "Savory soy sauce with garlic",
    image: "/homepage/showcase/sauces/soy-garlic.jpg",
  },
  {
    name: "Sesame Oil",
    description: "Nutty and aromatic finishing oil",
    image: "/homepage/showcase/sauces/sesame-oil.webp",
  },
  {
    name: "Citrus Soy",
    description: "Bright and tangy soy sauce",
    image: "/homepage/showcase/sauces/citrus-soy.webp",
  },
];

export default function IngredientShowcase() {
  return (
    <section className="container mx-auto px-6 md:px-10">
      <div className="flex flex-col items-center gap-4">
        <span className="rounded-full border bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
          Ingredients
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Fresh & Authentic
        </h2>
        <p className="max-w-[700px] text-center text-xl text-gray-500">
          We use only the freshest ingredients for the most authentic Korean
          flavors
        </p>
      </div>
      <h3 className="my-6 text-2xl font-bold">Base Options</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BASE_OPTIONS.map((base, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={base.image || "/placeholder.svg"}
                alt={base.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-bold">{base.name}</h3>
              <p className="text-muted-foreground text-sm">
                {base.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="my-6 text-2xl font-bold">Protein Options</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROTEIN_OPTIONS.map((base, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={base.image || "/placeholder.svg"}
                alt={base.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-bold">{base.name}</h3>
              <p className="text-muted-foreground text-sm">
                {base.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="my-6 text-2xl font-bold">Toppings</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {FRESH_TOPPINGS.map((base, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={base.image || "/placeholder.svg"}
                alt={base.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="md:text-md text-center font-bold lg:text-lg">
                {base.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <h3 className="my-6 text-2xl font-bold">Signature Sauces</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SIGNATURE_SAUCES.map((base, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={base.image || "/placeholder.svg"}
                alt={base.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-xl font-bold">{base.name}</h3>
              <p className="text-muted-foreground text-sm">
                {base.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
