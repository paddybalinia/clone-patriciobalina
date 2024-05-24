import Header from "./components/Header/Header";
import SectionHome from "./components/SectionHome/SectionHome";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SectionHome></SectionHome>
    </main>
  );
}
