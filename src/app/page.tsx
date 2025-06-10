"use client";

import AboutCard from "./components/AboutCard";
import JourneyCard from "./components/JourneyCard";
import GithubCard from "./components/GithubCard";
import LinkedinCard from "./components/LinkedinCard";
import ProjectContactCard from "./components/ProjectContactCard";
import MapCard from "./components/MapCard";
import FooterSocial from "./components/FooterSocial";

import { useState, useEffect } from "react";
import SpotifyCard from "./components/SpotifyCard";

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
    <main className="min-h-screen flex flex-col justify-center items-center p-6 pt-24">
      <div className="w-full max-w-5xl">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <AboutCard />
          <MapCard />
          <JourneyCard />
          <GithubCard />
          <SpotifyCard />
          <LinkedinCard />
          <ProjectContactCard />
        </div>
        <FooterSocial />
      </div>
    </main>
  );
}
