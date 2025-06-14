import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "Nathan • Sobre",
  description:
    "Minha jornada na programação começou na ETEC, onde descobri o poder de transformar ideias em código. Desde então, tenho me dedicado a aprender...",
  openGraph: {
    title: "Nathan • Sobre",
    description:
      "Minha jornada na programação começou na ETEC, onde descobri o poder de transformar ideias em código. Desde então, tenho me dedicado a aprender...",
    url: "https://nathanferreira.dev/about",
    siteName: "Nathan Ferreira",
    type: "website",
  },
};

export default function ContactPageServer() {
  return <AboutPage />;
}
