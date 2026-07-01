"use client";

import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorMessage reset={reset} />;
}
