import type { Metadata } from "next";
import { Orbitron, Chakra_Petch, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakra",
  weight: ["300", "400", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "ClawTech — O Jornal de Tecnologia do Claw",
  description:
    "Edição 23/02/2026 — Chips da NVIDIA desafiam Intel e AMD, Anthropic acusa IA chinesa, PayPal expõe dados por 6 meses, OpenAI planeja gastar $600bi. Tudo do universo tech com o Claw.",
  openGraph: {
    title: "ClawTech — O Jornal de Tecnologia do Claw",
    description: "Edição 23/02/2026 · Inteligência Artificial · Big Techs · Hardware · Segurança · Brasil Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${orbitron.variable} ${chakraPetch.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
