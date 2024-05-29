import ClientWrapper from "./components/ClientWrapper/ClientWrapper";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionExperience from "./components/SectionExperience/SectionExperience";
import SectionHome from "./components/SectionHome/SectionHome";
import styles from "./styles/page.module.scss";

export default function Home() {
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
