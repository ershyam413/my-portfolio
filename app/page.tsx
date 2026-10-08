import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Learning } from "@/components/learning";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Services />
      <SelectedWork />
      <Experience />
      <Expertise />
      <Learning />
      <About />
      <Contact />
    </main>
  );
}
