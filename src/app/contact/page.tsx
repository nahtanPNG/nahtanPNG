import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Nathan • Contato",
  description:
    "Tem um projeto em mente, quer tirar uma ideia do papel ou só trocar uma ideia sobre tecnologia? Fique à vontade para me chamar!",
  openGraph: {
    title: "Nathan • Contato",
    description:
      "Tem um projeto em mente, quer tirar uma ideia do papel ou só trocar uma ideia sobre tecnologia? Fique à vontade para me chamar!",
    url: "https://nathanferreira.dev/contact",
    siteName: "Nathan Ferreira",
    type: "website",
  },
};

export default function ContactPageServer() {
  return <ContactPage />;
}
