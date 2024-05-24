import Link from "next/link";
import Logo from "../Icons/Logo";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";
import Linkedin from "../Icons/Linkedin";
import Github from "../Icons/Github";
import styles from "../../styles/header.module.scss";
import Menu from "../Icons/Menu";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo className={styles.header__logo__svg} />
      </div>

      <button
        type="button"
        aria-label="open nav"
        className={styles.header__toggle}
        data-togglenav
      >
        <Menu />
      </button>

      <div className={styles.header__right}>
        <nav className={styles.header__nav}>
          <Link
            href="#home"
            className={styles.header__nav__a}
            title="Home"
            data-anchor="home"
          >
            Home
          </Link>
          <Link
            href="#about"
            className={styles.header__nav__a}
            title="About"
            data-anchor="About"
          >
            About
          </Link>
          <Link
            href="#work"
            className={styles.header__nav__a}
            title="Experience"
            data-anchor="Experience"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className={styles.header__nav__a}
            title="Contact"
            data-anchor="Contact"
          >
            Contact
          </Link>
        </nav>

        <ul className={styles.social}>
          <li className={styles.header__logo__svg}>
            <Link
              href="mailto:paddybalinia@gmail.com?subject=Contact%20from%20website&body=Hi%20Paddy!"
              className={styles.social__a}
              target="_blank"
              rel="noopener noreferrer"
              title="Mail"
            >
              <Mail className={styles.header__logo__svg} />
            </Link>
          </li>
          <li className={styles.social__li}>
            <Link
              href="tel:+541160416194"
              className={styles.social__a}
              target="_blank"
              rel="noopener noreferrer"
              title="Phone"
            >
              <Phone className={styles.header__logo__svg} />
            </Link>
          </li>
          <li className={styles.social__li}>
            <Link
              href="https://www.linkedin.com/in/patriciobalina-frontend-developer"
              className={styles.social__a}
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <Linkedin className={styles.header__logo__svg} />
            </Link>
          </li>
          <li className={styles.social__li}>
            <Link
              href="https://github.com/paddybalinia"
              className={styles.social__a}
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <Github className={styles.header__logo__svg} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
