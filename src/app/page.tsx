"use client";

import AboutCard from "./components/AboutCard";
import ProjectCard from "./components/JourneyCard";
import MusicCard from "./components/GithubCard";
import ContactCard from "./components/ExperiencesCard";
import LinkedinCard from "./components/LinkedinCard";
import ProjectContactCard from "./components/ProjectContactCard";
import MapCard from "./components/MapCard";
import SettingsCard from "./components/SettingsCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const storedLang =
      typeof window !== "undefined" && localStorage.getItem("lang");
    if (storedLang) setLanguage(storedLang);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="flex justify-end">
          <SettingsCard onOpen={() => {}} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in mt-0">
          <AboutCard />
          <MapCard />
          <ProjectCard />
          <MusicCard />
          <ContactCard />
          <LinkedinCard />
          <ProjectContactCard />
        </div>
      </div>
    </main>
  );
}
