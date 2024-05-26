import Image from "next/image";

export default function BoxExperience() {
  return (
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
                src="static/dist/images/work/work-patriciobalina.jpg"
                width="100"
                height="100"
                className="work-item__img"
                alt="Freelance Front End Developer"
                title="Freelance Front End Developer"
              />
            </a>
          </figure>
          <div className="work-item__data">
            <h3 className="work-item__title">Freelance Front End Developer</h3>
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
              I build interactive web interfaces that captivate users. My magic
              with HTML, CSS, and JavaScript ensures fluid and frictionless
              experiences. I integrate front-end functionalities with the
              backend for seamless operation, optimize performance for breakneck
              speed, and make it compatible with everything from desktop to
              smartphones. I keep the code impeccable and clean, so everything
              keeps running like a dream.
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
                <span className="work-item__skill">Responsive Design</span>
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
  );
}
