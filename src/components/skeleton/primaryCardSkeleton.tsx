import React from "react";
import styles from "./primaryCardSkeleton.module.css";

const SkeletonPrimaryCard: React.FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.img} />
      <div className={styles.smallText} />
      <div className={styles.text} />
      <div className={styles.text} />
      <div className={styles.contAvatar}>
        <div className={styles.avatar} />
        <div className={styles.smallText} />
        <div className={styles.smallText} />
      </div>
    </div>
  );
};

export default SkeletonPrimaryCard;
