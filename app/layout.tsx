import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-body" });
const data = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-data" });

export const metadata: Metadata = {
  title: "AX Robles · Marca, sitio y pedidos en línea para negocios de comida",
  description:
    "Sistemas de pedidos propios, con pago y panel de cocina, para restaurantes, heladerías y cafeterías. Sin comisión por pedido a las apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${body.variable} ${data.variable}`}>
      <body>{children}</body>
    </html>
  );
}
