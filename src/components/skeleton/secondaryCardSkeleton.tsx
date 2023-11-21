import React from "react";
import styles from "./secondaryCardSkeleton.module.css";

const SkeletonSecondaryCard: React.FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.img} />
      <div className={styles.smallText} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.contAvatar}>
        <div className={styles.avatar} />
        <div className={styles.text} />
      </div>
    </div>
  );
};

export default SkeletonSecondaryCard;
