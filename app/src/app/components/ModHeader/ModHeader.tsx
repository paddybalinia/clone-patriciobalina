import styles from "../../styles/modHeader.module.scss";

export default function ModHeader({
  children,
  experience,
}: Readonly<{
  children: React.ReactNode;
  experience?: boolean;
}>) {
  return (
    <div className="mod__header">
      <h2
        className={`${styles.modHeaderTitle} ${experience && styles.secondary}`}
      >
        {children}
      </h2>
    </div>
  );
}
