"use client"
import { useEffect, useState } from "react";
import { ArrowUpOutlined } from '@ant-design/icons';
import styles from "./index.module.css";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.backToTop}>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.button}>
          <ArrowUpOutlined style={{ fontSize: '24px', color: '#fff' }} />
        </div>
      )}
    </div>
  );
}
