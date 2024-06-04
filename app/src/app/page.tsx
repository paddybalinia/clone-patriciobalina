"use client";
import { useEffect } from "react";
import ClientWrapper from "./components/ClientWrapper/ClientWrapper";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionExperience from "./components/SectionExperience/SectionExperience";
import SectionHome from "./components/SectionHome/SectionHome";
import styles from "./styles/page.module.scss";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("service-worker.js")
        .then((registration) => {
          console.log("Service Worker registrado con éxito:", registration);
        })
        .catch((error) => {
          console.log("Error al registrar el Service Worker:", error);
        });
    }
  });
  return (
    <main className={styles.main}>
      <ClientWrapper />
      <SectionHome />
      <SectionAbout />
      <SectionExperience />
      <SectionContact />
    </main>
  );
}
