import Image from "next/image";
import ModHeader from "../ModHeader/ModHeader";
import Row from "../Row/Row";
import styles from "../../styles/experience.module.scss";
import stylesQuote from "../../styles/quote.module.scss";
import data from "../../mocks/experience.json";
import BoxExperience from "../BoxExperience/BoxExperience";
import BoxAbout from "../BoxAbout/BoxAbout";

export default function SectionExperience() {
  const { experience } = data;

  return (
    <section id="work" className={styles.sectionWork} data-section="work">
      <Row>
        <div className="mod mod__experience">
          <ModHeader experience>Work experience</ModHeader>

          <span id="linea" className="work__line"></span>
          <ul className={styles.workUl}>
            {experience.map((item, index) => (
              <BoxExperience
                key={index}
                year={item.year}
                position={item.position}
                agency={item.agency}
                image={item.image}
                description={item.description}
                tags={item.tags}
              ></BoxExperience>
            ))}
          </ul>
        </div>
      </Row>
      <div className={stylesQuote.sectionQuote}>
        <Row>
          <blockquote className={stylesQuote.modQuote}>
            <Image
              src="/images/quote/quote.png"
              className={stylesQuote.modQuoteImg}
              alt="Design is not just what it looks like and feels like. Design is how it works."
              title="Design is not just what it looks like and feels like. Design is how it works."
              width="42"
              height="42"
            />
            <p className={stylesQuote.modQuoteText}>
              {" "}
              Design is not just what it looks like and feels like. Design is
              how it works.
            </p>
            <span className={stylesQuote.modQuoteName}>Steve Jobs</span>
          </blockquote>
        </Row>
      </div>
    </section>
  );
}
