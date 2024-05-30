import Link from "next/link";
import styles from "../../styles/header.module.scss";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import Logo from "../Icons/Logo";
import Mail from "../Icons/Mail";
import Menu from "../Icons/Menu";
import Phone from "../Icons/Phone";
import { useEffect, useState } from "react";

interface ToggleButtonProps {
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header(props: ToggleButtonProps) {
  const { setIsNavVisible } = props;

  const [scrollTop, setscrollTop] = useState(0);
  const [top, setTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
    }
  };
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setscrollTop(window.scrollY);

      const scrollY = window.scrollY;

      let newTop = 0;

      if (scrollY >= viewportHeight) {
        newTop = Math.min(0, -60 + scrollY - viewportHeight);
      } else {
        newTop = 0;
      }
      setTop(newTop);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      addEventListener("resize", handleResize);
      addEventListener("scroll", handleScroll);

      return () => {
        removeEventListener("scroll", handleScroll);
        removeEventListener("resize", handleResize);
      };
    }
  }, [viewportHeight]);

  return (
    <header
      className={`${styles.header} ${
        scrollTop > viewportHeight && styles.header__beforesticky
      }`}
      style={{ top: `${top}px` }}
    >
      <div className={styles.header__logo}>
        <Logo className={styles.header__logo__svg} />
      </div>

      <button
        type="button"
        aria-label="open nav"
        className={styles.header__toggle}
        data-togglenav
        onClick={() => setIsNavVisible((statePrev) => !statePrev)}
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
              <Mail fill="white" width="20" />
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
              <Phone fill="white" width="22" />
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
              <Github fill="white" width="27" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
