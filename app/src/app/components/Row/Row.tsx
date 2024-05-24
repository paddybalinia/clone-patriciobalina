import { ReactNode } from "react";

import style from "../../styles/ui.module.scss";

interface RowProps {
  children: ReactNode;
}

export default function Row({ children }: RowProps) {
  return <div className={style.row}>{children}</div>;
}
