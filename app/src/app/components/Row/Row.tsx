import style from "../../styles/ui.module.scss";

export default function Row({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={style.row}>{children}</div>;
}
