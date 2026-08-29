import { Hero } from "@/components/sections/hero";
import { StackSection } from "@/components/sections/stack-section";
import { WorkSection } from "@/components/sections/work-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <StackSection />
        <WorkSection />
        <ApproachSection />
        <ContactSection />
      </div>
    </>
  );
}
