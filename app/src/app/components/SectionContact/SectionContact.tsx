import style from "../../styles/contact.module.scss";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";
import Whatsapp from "../Icons/Whatsapp";
import Row from "../Row/Row";
import css from "../../styles/viewport.module.scss";
import useViewportObserver from "@/app/hooks/ViewportObserver";

export default function SectionContact() {
  useViewportObserver(".viewport-observer", `${css.viewportObserverVisible}`);
  return (
    <section
      id="contact"
      className={style.sectionContact}
      data-section="contact"
    >
      <Row>
        <div className={style.modContact}>
          <p className={style.contactSubtitle}>What’s next ?</p>
          <h4 className={style.contactTitle}>Get in touch</h4>
          <p className={style.contactDesc}>
            If you want to work with me, or have any <br /> questions drop a
            message. <br />
            See you on your project!
          </p>

          <a
            href="mailto:paddybalinia@gmail.com?subject=Contact%20from%20website&body=Hi%20Paddy!%0D%0AHow%20are%20you%3F%0D%0AI'm%20contacting%20you%20from%20your%20website."
            className={style.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Contact Me"
          >
            Contact Me
          </a>

          <ul className={style.socialUl}>
            <li
              className={`${style.socialLi} viewport-observer ${css.viewportObserver} ${css.delay_6}`}
            >
              <a
                href="mailto:paddybalinia@gmail.com?subject=Contact%20from%20website&body=Hi%20Paddy!"
                className={style.socialA}
                target="_blank"
                rel="noopener noreferrer"
                title="Mail"
              >
                <Mail fill="white" width="20" />
              </a>
            </li>
            <li
              className={`${style.socialLi} viewport-observer ${css.viewportObserver} ${css.delay_7}`}
            >
              <a
                href="tel:+5491160416194"
                className={style.socialA}
                target="_blank"
                rel="noopener noreferrer"
                title="Phone"
              >
                <Phone fill="white" width="22" />
              </a>
            </li>
            <li
              className={`${style.socialLi} viewport-observer ${css.viewportObserver} ${css.delay_8}`}
            >
              <a
                href="https://www.linkedin.com/in/patriciobalina-frontend-developer"
                className={style.socialA}
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <Linkedin width="22" fill="white" />
              </a>
            </li>
            <li
              className={`${style.socialLi} viewport-observer ${css.viewportObserver} ${css.delay_9}`}
            >
              <a
                href="https://github.com/paddybalinia"
                className={style.socialA}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <Github width="27" fill="white" />
              </a>
            </li>
            <li
              className={`${style.socialLi} viewport-observer ${css.viewportObserver} ${css.delay_10}`}
            >
              <a
                href="http://wa.link/ca8d5v"
                className={style.socialA}
                target="_blank"
                rel="noopener noreferrer"
                title="Whatsapp"
              >
                <Whatsapp width="27" fill="white" />
              </a>
            </li>
          </ul>
        </div>
      </Row>
    </section>
  );
}
