import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionExperience from "./components/SectionExperience/SectionExperience";
import SectionHome from "./components/SectionHome/SectionHome";
import styles from "./styles/page.module.scss";
import ClientWrapper from "./components/ClientWrapper/ClientWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <ClientWrapper>
        <Header />
        <Nav />
      </ClientWrapper>
      <SectionHome />
      <SectionAbout />
      <SectionExperience />
      <SectionContact />
    </main>
  );
}
