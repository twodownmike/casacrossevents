import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Philosophy } from "@/components/philosophy";
import { Process } from "@/components/process";
import { Services } from "@/components/services";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Philosophy />
      <Services />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
