import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EL-ROB Elektro Usługi Łódź – Profesjonalne Instalacje Elektryczne",
    short_name: "EL-ROB Elektro Usługi",
    description:
      "EL-ROB Elektro Usługi Łódź – specjalizujemy się w instalacjach elektrycznych, modernizacjach, serwisie i pomiarach. Gwarantujemy wysoką jakość usług i bezpieczeństwo. Skontaktuj się z nami!",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0C0C",
    theme_color: "#0C0C0C",
    icons: [
      {
        src: "/logo192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
