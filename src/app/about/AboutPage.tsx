"use client";

import HeroSection from "./components/hero";
import HighlightsSection from "./components/highlights";
import InterestsSection from "./components/interests";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 mt-20">
      <HeroSection />
      <InterestsSection />
      <HighlightsSection />
    </main>
  );
}
