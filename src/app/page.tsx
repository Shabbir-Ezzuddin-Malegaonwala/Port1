import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Capabilities } from "@/components/sections/Capabilities";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { Recognition } from "@/components/sections/Recognition";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Capabilities />
      <SelectedWork />
      <Experience />
      <Stack />
      <Recognition />
      <ContactCTA />
    </>
  );
}
