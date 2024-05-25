import Image from "next/image";

import styles from "../../styles/about.module.scss";
import Row from "../Row/Row";
import ModHeader from "../ModHeader/ModHeader";
import BoxAbout from "../BoxAbout/BoxAbout";

import about from "../../mocks/about.json";

export default function SectionAbout() {
  const { data } = about;
  return (
    <section id="about" className={styles.mod__about} data-section="about">
      <Row>
        <div className="mod mod__about">
          <ModHeader>About me</ModHeader>

          <div className={styles.modAboutContent}>
            {data.map((item, index) => (
              <div key={index} className={styles.modAboutCol}>
                <BoxAbout
                  title={item.title}
                  text={item.text}
                  image={item.image}
                ></BoxAbout>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.modSkills}>
          <ModHeader>Skills</ModHeader>
          <div className="mod__content">
            <ul className={styles.skillsUl}>
              <li className={styles.skillsLi}>
                <a
                  href="https://www.w3schools.com/css/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CSS 3"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/css3.svg"
                    alt="CSS 3"
                    title="CSS 3"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-3">
                <a
                  href="https://www.w3.org/html/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="HTML 5"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/html5.svg"
                    alt="HTML 5"
                    title="HTML 5"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-4">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="JavaScript"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/javascript.svg"
                    alt="JavaScript"
                    title="JavaScript"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-5">
                <a
                  href="https://sass-lang.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="SASS"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/sass.svg"
                    alt="SASS"
                    title="SASS"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-6">
                <a
                  href="https://gulpjs.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Gulp"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/gulp.svg"
                    alt="Gulp"
                    title="Gulp"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-7">
                <a
                  href="https://git-scm.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Git"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/git.svg"
                    alt="Git"
                    title="Git"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-8">
                <a
                  href="https://www.figma.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Figma"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/figma.svg"
                    alt="Figma"
                    title="Figma"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-9">
                <a
                  href="https://jquery.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="jQuery"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/jquery.svg"
                    alt="jQuery"
                    title="jQuery"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-10">
                <a
                  href="https://react.dev/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="React JS"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/react.svg"
                    alt="React JS"
                    title="React JS"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-11">
                <a
                  href="https://www.adobe.com/in/products/illustrator.html"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="illustrator"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/illustrator.svg"
                    alt="illustrator"
                    title="illustrator"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-12">
                <a
                  href="https://www.adobe.com/products/photoshop.html"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="photoshop"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/photoshop.svg"
                    alt="photoshop"
                    title="photoshop"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-13">
                <a
                  href="https://www.sketch.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="sketch"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/sketch.svg"
                    alt="sketch"
                    title="sketch"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-14">
                <a
                  href="https://helpx.adobe.com/support/xd.html"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="xd"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/xd.svg"
                    alt="xd"
                    title="xd"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-15">
                <a
                  href="https://github.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/github.svg"
                    alt="Github"
                    title="GitHub"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-16">
                <a
                  href="https://code.visualstudio.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="VC Code"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/vscode.svg"
                    alt="VC Code"
                    title="VC Code"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
              <li className="skills__li viewport-observer delay-17">
                <a
                  href="https://getbem.com/"
                  className={styles.skillsA}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="BEM"
                >
                  <Image
                    loading="lazy"
                    src="/images/skills/bem.svg"
                    alt="BEM"
                    title="BEM"
                    width="30"
                    height="30"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </section>
  );
}
