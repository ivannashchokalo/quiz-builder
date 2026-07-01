import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
}

export default function Button({
  text,
  href,
  variant = "primary",
  className,
  onClick,
  type,
  disabled,
  target,
}: ButtonProps) {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
