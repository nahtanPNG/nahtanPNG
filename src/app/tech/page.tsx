import { ReactNode } from "react";
import type { Metadata } from "next";
import TechnologiesPage from "./techPage";

export const metadata: Metadata = {
  title: "Nathan • Tecnologias",
  description:
    "Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento.",
  openGraph: {
    title: "Nathan • Tecnologias",
    description:
      "Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento.",
    url: "https://nathanferreira.dev/tech",
    siteName: "Nathan Ferreira",
    type: "website",
  },
};

export default function TechnologiesPageServer(): ReactNode {
  return <TechnologiesPage />;
}
