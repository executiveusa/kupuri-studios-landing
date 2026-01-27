import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kupuri Studios - Tu Socio Creativo",
  description:
    "Dos Agencias Creativas. Una Visión. Combinando la misión de Yvette (CYNTHIA™) con el estudio creativo de Bamboo (KUPURI STUDIOS) para crear un powerhouse creativo para América Latina.",
  keywords: [
    "agencia creativa",
    "diseño web",
    "inteligencia artificial",
    "México",
    "Latina",
    "mujeres emprendedoras",
    "CYNTHIA",
    "KUPURI STUDIOS",
    "JAZZ APP",
    "PAULI EFFECT",
  ],
  authors: [{ name: "Yvette Milo" }, { name: "Bamboo" }],
  openGraph: {
    title: "Kupuri Studios - Tu Socio Creativo",
    description:
      "Dos Agencias Creativas. Una Visión. Combinando la misión de Yvette (CYNTHIA™) con el estudio creativo de Bamboo (KUPURI STUDIOS) para crear un powerhouse creativo para América Latina.",
    type: "website",
    locale: "es",
    siteName: "Kupuri Studios",
    images: ["/assets/kupuri-mexico-city-night.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
