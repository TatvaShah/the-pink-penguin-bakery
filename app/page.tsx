import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Inquiry } from "@/components/Inquiry";
import { MenuBoard } from "@/components/MenuBoard";
import { Offerings } from "@/components/Offerings";
import { OrderPath } from "@/components/OrderPath";
import { Reels } from "@/components/Reels";

export default function HomePage() {
  return (
    <>
      <a href="#top" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Offerings />
        <Gallery />
        <MenuBoard />
        <Reels />
        <OrderPath />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
