"use client";

import styles from "./NotFound.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>
      <Button
        type="button"
        text="Back home"
        variant="primary"
        onClick={() => router.replace("/")}
        className={styles.button}
      />
    </div>
  );
}
