import Image from "next/image";
import ModHeader from "../ModHeader/ModHeader";
import Row from "../Row/Row";
import styles from "../../styles/experience.module.scss";

export default function SectionExperience() {
  return (
    <section id="work" className={styles.sectionWork} data-section="work">
      <Row>
        <div className="mod mod__experience">
          <ModHeader>Work experience</ModHeader>

          <span id="linea" className="work__line"></span>
          <ul className="work__ul">
            <li
              className="work__li viewport-observer animation-bottom"
              data-speed="0.07"
            >
              <div className="work-item">
                <div className="work-item__aside">
                  <span className="work-item__years">
                    {" "}
                    <span id="elemento1" className="work-item__bg">
                      2023 - 2024
                    </span>
                  </span>
                </div>
                <div className="work-item__main">
                  <figure className="work-item__figure">
                    <a
                      href="http://www.patriciobalina.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Patricio Baliña Front End Freelance"
                    >
                      <Image
                        src="/images/work/work-patriciobalina.jpg"
                        width="100"
                        height="100"
                        className="work-item__img"
                        alt="Freelance Front End Developer"
                        title="Freelance Front End Developer"
                      />
                    </a>
                  </figure>
                  <div className="work-item__data">
                    <h3 className="work-item__title">
                      Freelance Front End Developer
                    </h3>
                    <a
                      className="work-item__subtitle"
                      href="http://www.patriciobalina.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Patricio Baliña Front End Freelance"
                    >
                      Freelance Web Developer
                    </a>
                    <p className="work-item__desc">
                      I build interactive web interfaces that captivate users.
                      My magic with HTML, CSS, and JavaScript ensures fluid and
                      frictionless experiences. I integrate front-end
                      functionalities with the backend for seamless operation,
                      optimize performance for breakneck speed, and make it
                      compatible with everything from desktop to smartphones. I
                      keep the code impeccable and clean, so everything keeps
                      running like a dream.
                    </p>
                    <ul className="work-item__ul">
                      <li className="work-item__li">
                        <span className="work-item__skill">html 5</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">CSS 3</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">SASS</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">JavaScript</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Git</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Github</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">
                          Responsive Design
                        </span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">SEO</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">
                          Performance optimization
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="work__li viewport-observer animation-bottom"
              data-speed="0.07"
            >
              <div className="work-item">
                <div className="work-item__aside">
                  <span className="work-item__years">
                    {" "}
                    <span className="work-item__bg">2016 - 2023</span>
                  </span>
                </div>
                <div className="work-item__main">
                  <figure className="work-item__figure">
                    <a
                      href="https://iconosur.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Iconosur"
                    >
                      <Image
                        src="/images/work/work-iconosur.jpg"
                        className="work-item__img"
                        width="100"
                        height="100"
                        title="Iconosur"
                        alt="Iconosur"
                      />
                    </a>
                  </figure>
                  <div className="work-item__data">
                    <h3 className="work-item__title">
                      Senior Front End Developer
                    </h3>
                    <a
                      href="https://iconosur.com/"
                      className="work-item__subtitle"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Iconosur"
                    >
                      Iconosur
                    </a>
                    <p className="work-item__desc">
                      At Iconosur, I led the development and maintenance of user
                      interfaces for high-traffic websites with millions of
                      daily visits. Collaborating closely with designers and
                      developers, I implemented new features and
                      functionalities, ensuring visual quality and optimal
                      platform performance. This experience honed my front-end
                      skills and equipped me to successfully navigate
                      large-scale challenges. I acquired solid web development
                      expertise through methodologies like BEM and Pixel
                      Perfect, implemented optimization and SEO strategies,
                      built semantic webs, and wielded Vanilla JS. Recently,
                      I've shifted focus to crafting attractive and functional
                      interfaces with Next.js and React JS.
                    </p>
                    <ul className="work-item__ul">
                      <li className="work-item__li">
                        <span className="work-item__skill">html 5</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">CSS 3</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">SASS</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">JavaScript</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Git</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Github</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">React JS</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">
                          Responsive Design
                        </span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">JSX</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">SEO</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">
                          Performance optimization
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="work__li viewport-observer animation-bottom"
              data-speed="0.07"
            >
              <div className="work-item">
                <div className="work-item__aside">
                  <span className="work-item__years">
                    {" "}
                    <span className="work-item__bg">2015 - 2016</span>
                  </span>
                </div>
                <div className="work-item__main">
                  <figure className="work-item__figure">
                    <a
                      href="https://studiohakuna.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Studio Hakuna"
                    >
                      <Image
                        src="/images/work/work-hakuna.jpg"
                        className="work-item__img"
                        width="100"
                        height="100"
                        title="Studio Hakuna"
                        alt="Studio Hakuna"
                      />
                    </a>
                  </figure>
                  <div className="work-item__data">
                    <h3 className="work-item__title">
                      Part Time Front End Developer
                    </h3>
                    <a
                      href="https://studiohakuna.com/"
                      className="work-item__subtitle"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Studio Hakuna"
                    >
                      Studio Hakuna
                    </a>
                    <p className="work-item__desc">
                      At Hakuna, I utilized Bootstrap's capabilities to craft
                      responsive and visually appealing institutional websites
                      for non-profit organizations. Focusing on clean layouts
                      and interactive elements like animated infographics, I
                      seamlessly converted design mockups and user stories into
                      functional WordPress themes. Throughout the development
                      process, I collaborated closely with designers and
                      developers, transcribing their ideas into intuitive
                      websites that met client requirements.
                    </p>

                    <ul className="work-item__ul">
                      <li className="work-item__li">
                        <span className="work-item__skill">HTML5</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">CSS3</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">JavaScript</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">jQuery</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">GitHub</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Bootstrap</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">WordPress</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="work__li viewport-observer animation-bottom"
              data-speed="0.07"
            >
              <div className="work-item">
                <div className="work-item__aside">
                  <span className="work-item__years">
                    {" "}
                    <span className="work-item__bg">2014 - 2016</span>
                  </span>
                </div>
                <div className="work-item__main">
                  <figure className="work-item__figure">
                    <a
                      className="work-item__subtitle"
                      href="http://www.patriciobalina.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Patricio Baliña Front End Freelance"
                    >
                      <Image
                        src="/images/work/work-patriciobalina.jpg"
                        className="work-item__img"
                        width="100"
                        height="100"
                        title="Patricio Baliña Freelance Front End Developer"
                        alt="Patricio Baliña Freelance Front End Developer"
                      />
                    </a>
                  </figure>
                  <div className="work-item__data">
                    <h3 className="work-item__title">
                      Freelance Front End Developer
                    </h3>
                    <a
                      className="work-item__subtitle"
                      href="http://www.patriciobalina.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Patricio Baliña Front End Freelance"
                    >
                      Freelance Web Developer
                    </a>
                    <p className="work-item__desc">
                      I collaborated with clients on the construction of
                      institutional websites, using HTML, CSS, and jQuery. I
                      designed and styled visual elements with CSS, implemented
                      dynamic interactions with jQuery, and provided guidance on
                      best practices. I ensured responsiveness by conducting
                      extensive testing on different devices and browsers. I
                      maintained clear communication and met client expectations
                      at every stage of the project.
                    </p>
                    <ul className="work-item__ul">
                      <li className="work-item__li">
                        <span className="work-item__skill">HTML5</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">CSS3</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">JavaScript</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">jQuery</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">GitHub</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">
                          Responsive Design
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="work__li viewport-observer animation-bottom"
              data-speed="0.07"
            >
              <div className="work-item">
                <div className="work-item__aside">
                  <span className="work-item__years">
                    <span id="stop-linea"></span>{" "}
                    <span className="work-item__bg">2011 - 2014</span>
                  </span>
                </div>
                <div className="work-item__main">
                  <figure className="work-item__figure">
                    <a
                      href="https://dhnn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="DHNN (design has no name)"
                    >
                      <Image
                        src="/images/work/work-dhnn.jpg"
                        className="work-item__img"
                        width="100"
                        height="100"
                        title="DHNN (design has no name)"
                        alt="DHNN (design has no name)"
                      />
                    </a>
                  </figure>
                  <div className="work-item__data">
                    <h3 className="work-item__title">
                      Junior Front End Developer
                    </h3>
                    <a
                      href="https://dhnn.com/"
                      className="work-item__subtitle"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="DHNN (design has no name)"
                    >
                      DHNN (design has no name)
                    </a>
                    <p className="work-item__desc">
                      I collaborated with the design team to create creative
                      websites. I worked closely with designers and UX/UI
                      specialists to implement attractive front-end designs. I
                      converted design concepts into HTML, CSS, and JavaScript
                      code. I adapted my skills to achieve unique and impactful
                      solutions. I contributed to the creation of websites that
                      reflected the brand identity and applied the latest web
                      design trends.
                    </p>
                    <ul className="work-item__ul">
                      <li className="work-item__li">
                        <span className="work-item__skill">HTML5</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">CSS3</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">JavaScript</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">jQuery</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Illustrator</span>
                      </li>
                      <li className="work-item__li">
                        <span className="work-item__skill">Photoshop</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="work__li viewport-observer delay-5"
              data-speed="0.07"
            >
              <div className="work__more">
                <p className="work__more__text">
                  Would you like to know more details?
                </p>
                <a
                  href="https://www.linkedin.com/in/patriciobalina-frontend-developer"
                  className="home__button button  button--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin Profile"
                >
                  Linkedin Profile
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Row>
      {/* <div className="section--quote">
                <div className="row">
                    <blockquote className="mod__quote">
                        <Image  src="/images/quote/quote.png"
                            className="mod__quote__img" alt="Design is not just what it looks like and feels like. Design is how it
                            works." title="Design is not just what it looks like and feels like. Design is how it
                            works." width="42" height="42" />
                        <p className="mod__quote__text texto-animado"> Design is not just what it looks like and feels like.
                            Design is how it
                            works.</p>
                        <span className="mod__quote__name viewport-observer animation-bottom delay-7">Steve Jobs</span>
                    </blockquote>
                </div>
            </div> */}
    </section>
  );
}
