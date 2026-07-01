import clsx from "clsx";
import styles from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>;
}
