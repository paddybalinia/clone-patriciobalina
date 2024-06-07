import Image from "next/image";
import styles from "@/app/styles/about.module.scss";

interface imgData {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}
interface items {
  title?: string;
  text?: string;
  image?: imgData;
}

export default function BoxAbout({ title, text, image }: items) {
  return (
    <>
      <figure className={styles.boxAboutFigure}>
        {image && (
          <Image
            loading="lazy"
            src={image.src}
            className="box-about__img"
            alt={image.alt}
            title={image.title}
            width={image.width}
            height={image.height}
          />
        )}
      </figure>

      <h3 className={styles.boxAboutTitle}>{title}</h3>

      <p className={styles.boxAboutText}>{text}</p>
    </>
  );
}
