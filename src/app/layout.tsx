import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { JetBrains_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { PatternBackground } from "./components/pattern-bg";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nathan Ferreira",
  description:
    "Nathan Ferreira é um desenvolvedor full stack especializado em aplicações web modernas com React, Next.js e Nest.js. Explore seu portfólio, veja projetos profissionais e entre em contato.",
  keywords: [
    "Nathan Ferreira",
    "nahtanpng",
    "Desenvolvedor Web",
    "Desenvolvedor Full Stack",
    "Portfólio",
    "Desenvolvedor React",
    "Desenvolvedor Next.js",
    "Desenvolvedor Nest.js",
    "Programador",
    "Projetos Web",
    "Frontend",
    "Backend",
    "Desenvolvedor JavaScript",
    "TypeScript",
  ],
  openGraph: {
    title: "Nathan Ferreira - Desenvolvedor Full Stack",
    description:
      "Portfólio de Nathan Ferreira, especialista em aplicações modernas usando React, Next.js e Nest.js. Conheça seus projetos e experiências.",
    url: "https://nathanferreira.dev/",
    siteName: "Nathan Ferreira",
    images: [
      {
        url: "/site.png",
        width: 800,
        height: 400,
        alt: "Imagem demonstrando o site",
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
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${pixelifySans.variable} font-mono bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PatternBackground variant="checkered" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
