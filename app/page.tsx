import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Learning } from "@/components/learning";
import { SelectedWork } from "@/components/selected-work";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <SelectedWork />
      <Experience />
      <Expertise />
      <Learning />
      <About />
      <Contact />
    </main>
  );
}
