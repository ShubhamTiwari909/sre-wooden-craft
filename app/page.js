import Hero from "@/components/Hero";
import MasonryGridLayout from "@/components/MasonryGridLayout";
import { products } from "@/store/popularProductions";

export default function Home() {
  return (
    <main>
      <Hero />
      <MasonryGridLayout data={products} title='Popular products' />
    </main>
  );
}
