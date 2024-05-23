import Link from "next/link";
import Logo from "../Icons/Logo";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";
import Linkedin from "../Icons/Linkedin";
import Github from "../Icons/Github";
import styles from "../../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <nav className={styles.nav}>
          <Link href="#home" title="Home" data-anchor="home">
            Home
          </Link>
          <Link href="#about" title="About" data-anchor="About">
            About
          </Link>
          <Link href="#work" title="Experience" data-anchor="Experience">
            Experience
          </Link>
          <Link href="#contact" title="Contact" data-anchor="Contact">
            Contact
          </Link>
        </nav>

        <ul className={styles.social}>
          <li className="social__li">
            <Link
              href="mailto:paddybalinia@gmail.com?subject=Contact%20from%20website&body=Hi%20Paddy!"
              className="social__a social__a--secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="Mail"
            >
              <Mail />
            </Link>
          </li>
          <li className="social__li">
            <Link
              href="tel:+541160416194"
              className="social__a social__a--secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="Phone"
            >
              <Phone />
            </Link>
          </li>
          <li className="social__li">
            <Link
              href="https://www.linkedin.com/in/patriciobalina-frontend-developer"
              className="social__a social__a--secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <Linkedin />
            </Link>
          </li>
          <li className="social__li">
            <Link
              href="https://github.com/paddybalinia"
              className="social__a social__a--secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <Github />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
