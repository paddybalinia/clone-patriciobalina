import styles from "../../styles/home.module.scss";
import Button from "../Button/Button";
import Row from "../Row/Row";

export default function SectionHome() {
  return (
    <section id="home" className={styles.sectionHome} data-section="home">
      <Row>
        <div className="row">
          <div className={styles.home} data-scroll-speed="6">
            <h1 className={styles.home__title}>
              <span className={`${styles.home__span} ${styles.home__spanMed}`}>
                Hi, I am{" "}
              </span>
              <span className={`${styles.home__span} ${styles.home__spanBig}`}>
                Patricio Baliña
              </span>
              <span className={`${styles.home__span} ${styles.home__spanSma}`}>
                Front End Developer
              </span>
            </h1>

            <p className={styles.home__desc}>
              I create intuitive and visually appealing interfaces that enhance
              your user experience through research. I turn designs into clean,
              concise, and responsive code using HTML, CSS, and JavaScript with
              experience in building optimized web experiences.
            </p>

            <Button
              href="https://drive.google.com/drive/folders/1rQtQZoneUMSqO15zI2AdHDqPkQ5hmgcO?usp=sharing"
              className="home__button"
              title="Download CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Button>
          </div>
        </div>
      </Row>
      <button
        type="button"
        aria-label="scroll to about"
        className={styles.home__scroll}
        data-anchor="about"
      ></button>
    </section>
  );
}
