"use client";

import Button from "../Button/Button";
import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  reset?: () => void;
};

export default function ErrorMessage({ reset }: ErrorMessageProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Something went wrong</h2>
      <p className={styles.text}>Please try again later.</p>
      {reset && (
        <Button
          text="Try again"
          onClick={() => reset()}
          className={styles.button}
          variant="primary"
          type="button"
        />
      )}
    </div>
  );
}
