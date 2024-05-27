import Image from "next/image";
import styles from "../../styles/experience.module.scss";

interface year {
  start: string;
  end: string;
}
interface agency {
  title: string;
  link: string;
}
interface image {
  src: string;
  title?: string;
  alt: string;
  width: number;
  height: number;
}
interface items {
  year?: year;
  position?: string;
  agency?: agency;
  image: image;
  description: string;
  tags: string[];
}

export default function BoxExperience(props: items) {
  const { year, position, agency, image, description, tags } = props;
  return (
    <li className={styles.workLi} data-speed="0.07">
      <div className={styles.workItem}>
        <div className={styles.workItemAside}>
          <span className={styles.workItemYears}>
            {" "}
            <span id="elemento1" className={styles.workItemBg}>
              {year?.start} - {year?.end}
            </span>
          </span>
        </div>
        <div className={styles.workItemMain}>
          <figure className={styles.workItemFigure}>
            <a
              href={agency?.link}
              target="_blank"
              rel="noopener noreferrer"
              title={image.title}
            >
              <Image
                src={image.src}
                width={image?.width}
                height={image?.height}
                className={styles.workItemImg}
                alt={image.alt}
                title={image?.title}
              />
            </a>
          </figure>
          <div className="workItem__data">
            <h3 className={styles.workItemTitle}> {position}</h3>
            <a
              className={styles.workItemSubtitle}
              href={agency?.link}
              target="_blank"
              rel="noopener noreferrer"
              title={agency?.title}
            >
              {agency?.title}
            </a>
            <p className={styles.workItemDesc}>{description}</p>
            <ul className={styles.workItemUl}>
              {tags.map((item, index) => (
                <li key={index} className={styles.workItemLi}>
                  <span className={styles.workItemSkill}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
