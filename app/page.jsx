import Hero from "@/components/Hero";
import MasonryGridLayout from "@/components/MasonryGridLayout";
import { products, categories } from "@/store/popularProductions";

export default function Home() {
  return (
    <main>
      <Hero />
      <MasonryGridLayout data={products} cardType='vertical' title='Popular products' />
      <MasonryGridLayout data={categories} cardType='horizontal' title='Popular categories' />
    </main>
  );
}
