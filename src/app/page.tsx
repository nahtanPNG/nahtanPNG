"use client";

import AboutCard from "./components/AboutCard";
import ProjectCard from "./components/JourneyCard";
import MusicCard from "./components/GithubCard";
import ContactCard from "./components/ExperiencesCard";
import LinkedinCard from "./components/LinkedinCard";
import ProjectContactCard from "./components/ProjectContactCard";
import MapCard from "./components/MapCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
        <AboutCard />
        <MapCard />
        <ProjectCard />
        <MusicCard />
        <ContactCard />
        <LinkedinCard />
        <ProjectContactCard />
      </div>
    </main>
  );
}
