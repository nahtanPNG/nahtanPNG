import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PatternBackground } from "./components/pattern-bg";
import { ThemeProvider } from "next-themes";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nathan Ferreira",
  description:
    "Portfólio de Nathan Ferreira, desenvolvedor de software especializado em aplicações web modernas, React, Next.js, e tecnologias de ponta. Veja projetos, experiências e entre em contato!",
  keywords: [
    "Nathan Ferreira",
    "nahtanpng",
    "Portfólio",
    "Desenvolvedor",
    "Software",
    "React",
    "Next.js",
    "Nest.js",
    "Backend",
    "Frontend",
    "Web Developer",
    "Projetos",
    "Experiência",
  ],
  openGraph: {
    title: "Nathan Ferreira - Desenvolvedor de Software",
    description:
      "Portfólio de Nathan Ferreira, desenvolvedor de software especializado em aplicações web modernas, React, Next.js, e tecnologias de ponta.",
    url: "https://nathanferreira.dev/",
    siteName: "Nathan Ferreira Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 600,
        alt: "Nathan Ferreira Avatar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${jetbrainsMono.variable} font-mono bg-background antialiased`}
      >
        <PatternBackground variant="checkered" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ></ThemeProvider>
        {children}
      </body>
    </html>
  );
}
