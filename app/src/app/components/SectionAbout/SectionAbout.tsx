import Image from "next/image";

import styles from "../../styles/about.module.scss";
import Row from "../Row/Row";
import ModHeader from "../ModHeader/ModHeader";
export default function SectionAbout() {
  return (
    <section id="about" className={styles.mod__about} data-section="about">
      <Row>
        <div className="mod mod__about">
          <ModHeader>About me</ModHeader>

          <div className={styles.modAboutContent}>
            <div className={styles.modAboutCol}>
              <div className="box-about ">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-efective.svg"
                    className="box-about__img"
                    alt="Effective Communication"
                    title="Effective Communication"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>
                  Effective Communication
                </h3>
                <p className={styles.boxAboutText}>
                  Ability to work in a team and collaborate with designers,
                  backend developers, and the client.
                </p>
              </div>
            </div>
            <div className={styles.modAboutCol}>
              <div className="box-about">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-problems.svg"
                    className="box-about__img"
                    alt="Problem Solving"
                    title="Problem Solving"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>Problem Solving</h3>
                <p className={styles.boxAboutText}>
                  I&apos;m a problem solver who finds creative, practical, and
                  effective solutions to challenges.
                </p>
              </div>
            </div>
            <div className={styles.modAboutCol}>
              <div className="box-about ">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-creativity.svg"
                    className="box-about__img"
                    alt="Creativity and Design"
                    title="Creativity and Design"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>Creativity and Design</h3>
                <p className={styles.boxAboutText}>
                  I consider myself a developer with an aesthetic eye, without
                  neglecting the good practices of web design.
                </p>
              </div>
            </div>
            <div className={styles.modAboutCol}>
              <div className="box-about ">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-adaptability.svg"
                    className="box-about__img"
                    alt="Adaptability"
                    title="Adaptability"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>Adaptability</h3>
                <p className={styles.boxAboutText}>
                  I am always willing to learn new technologies and stay
                  up-to-date with the latest trends in Front end development. I
                  am also able to adapt to changes in project requirements and
                  work environment.
                </p>
              </div>
            </div>
            <div className={styles.modAboutCol}>
              <div className="box-about ">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-timemanagement.svg"
                    className="box-about__img"
                    alt="Time Management and Organization"
                    title="Time Management and Organization"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>
                  Time Management and Organization
                </h3>
                <p className={styles.boxAboutText}>
                  Ability to set priorities and meet deadlines. Experience with
                  tools like Trello, Monday, or Slack.
                </p>
              </div>
            </div>
            <div className={styles.modAboutCol}>
              <div className="box-about ">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-attentiontodetail.svg"
                    className="box-about__img"
                    alt="Attention to Detail"
                    title="Attention to Detail"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>Attention to Detail</h3>
                <p className={styles.boxAboutText}>
                  I focus on creating high-quality, error-free websites. You can
                  mention your focus on data validation, testing, and quality
                  assurance.
                </p>
              </div>
            </div>
            <div className={styles.modAboutCol}>
              <div className="box-about ">
                <figure className={styles.boxAboutFigure}>
                  <Image
                    loading="lazy"
                    src="/images/about/about-empathylistening.svg"
                    className="box-about__img"
                    alt="Empathy and Active Listening"
                    title="Empathy and Active Listening"
                    width="155"
                    height="100"
                  />
                </figure>
                <h3 className={styles.boxAboutTitle}>
                  Empathy and Active Listening
                </h3>
                <p className={styles.boxAboutText}>
                  I strive to understand the needs and expectations of end-users
                  and how this influences Front end development. I enjoy
                  supporting my teammates, being available for questions or
                  concerns.
                </p>
              </div>
            </div>
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
