import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { useEffect } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patricio Baliña | Frontend Developer",
  description: "Frontend Developer",
  keywords:
    "front end, front end developer,front end web developer, Front end Developer, HTML, CSS, Javascript, React, Github",
  alternates: { canonical: "https://www.patriciobalina.com.ar/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
