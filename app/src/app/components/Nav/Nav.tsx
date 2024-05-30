import styles from "../../styles/nav.module.scss";
import Cross from "../Icons/Cross";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import Logo from "../Icons/Logo";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";

interface NavProps {
  isVisible: boolean;
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav(props: NavProps) {
  const { isVisible, setIsNavVisible } = props;
  //   console.log(isVisible);
  return (
    <>
      <nav className={`${styles.nav}  ${isVisible && styles.active}`}>
        <button
          type="button"
          aria-label="close nav"
          className={styles.nav__toggle}
          data-togglenav
          onClick={() => setIsNavVisible((prev) => !prev)}
        >
          <Cross />
        </button>

        <ul className={styles.nav__ul}>
          <li className={styles.nav__li}>
            <a
              href="#home"
              className={styles.nav__a}
              title="Home"
              rel="noopener noreferrer"
              onClick={() => setIsNavVisible((prev) => !prev)}
            >
              Home
            </a>
          </li>
          <li className={styles.nav__li}>
            <a
              href="#about"
              className={styles.nav__a}
              title="About"
              rel="noopener noreferrer"
              onClick={() => setIsNavVisible((prev) => !prev)}
            >
              About
            </a>
          </li>
          <li className={styles.nav__li}>
            <a
              href="#work"
              className={styles.nav__a}
              title="Experience"
              rel="noopener noreferrer"
              onClick={() => setIsNavVisible((prev) => !prev)}
            >
              Experience
            </a>
          </li>
          <li className={styles.nav__li}>
            <a
              href="#contact"
              className={styles.nav__a}
              title="Contact"
              rel="noopener noreferrer"
              onClick={() => setIsNavVisible((prev) => !prev)}
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className={`${styles.nav__social} ${styles.social__ul} `}>
          <li className={styles.social__li}>
            <a
              href="mailto:paddybalinia@gmail.com?subject=Contact%20from%20website&body=Hi%20Paddy!"
              className={`${styles.social__a}  ${styles.social__aSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Mail"
            >
              <Mail fill="white" width="20" />
            </a>
          </li>
          <li className={styles.social__li}>
            <a
              href="tel:+541160416194"
              className={`${styles.social__a}  ${styles.social__aSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Phone"
            >
              <Phone fill="white" width="22" />
            </a>
          </li>
          <li className={styles.social__li}>
            <a
              href="https://www.linkedin.com/in/patriciobalina-frontend-developer"
              className={`${styles.social__a}  ${styles.social__aSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <Linkedin fill="white" width="22" />
            </a>
          </li>
          <li className={styles.social__li}>
            <a
              href="https://github.com/paddybalinia"
              className={`${styles.social__a}  ${styles.social__aSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <Github fill="white" width="27" />
            </a>
          </li>
        </ul>
        <Logo width="210" />
      </nav>
      <div
        className={`${styles.nav__overlay} ${isVisible && styles.active}`}
        onClick={() => setIsNavVisible((prev) => !prev)}
      ></div>
    </>
  );
}
