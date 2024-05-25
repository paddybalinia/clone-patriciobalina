import styles from "../../styles/modHeader.module.scss";

export default function ModHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.modHeader}>
      <h2 className={styles.modHeaderTitle}>{children}</h2>
    </div>
  );
}
