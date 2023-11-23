"use client";
import React, { useState } from "react";
import styles from "./index.module.css";

export default function HighlightText({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`${styles.textHighlight} ${styles.textHighlightLength} ${
        styles.textHighlightLeftBottom
      } ${styles.textHighlightNoRepeat} ${styles.textHighlightTransition} ${
        isHovered && styles.textHighlightHover
      } ${isHovered && styles.textHighlightGroupHover} ${
        styles.textHighlightDarkMode
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );
}
