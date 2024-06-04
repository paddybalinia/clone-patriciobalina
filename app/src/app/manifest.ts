import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Patricio Balina",
    short_name: "Patricio Balina",
    description: "Sitio web personal de Patricio Baliña",
    start_url: "/",
    display: "standalone",
    background_color: "#1CD3C1",
    theme_color: "#1CD3C1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "images/apps/precomposed-128.png",
        type: "image/png",
        sizes: "128x128",
        purpose: "maskable",
      },
      {
        src: "images/apps/precomposed-144.png",
        type: "image/png",
        sizes: "144x144",
      },
      {
        src: "images/apps/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "images/apps/precomposed-256.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        src: "images/apps/precomposed-384.png",
        type: "image/png",
        sizes: "384x384",
      },
      {
        src: "images/apps/precomposed-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
