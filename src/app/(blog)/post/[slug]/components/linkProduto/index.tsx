import React from "react";
import styles from "./index.module.css";


import { AffiliateLinkProps } from "@/src/data/types/post";
import Link from "next/link";

interface AmazonAffiliateLinkProps {
  affiliates: AffiliateLinkProps[];
}

export const AffiliateLink: React.FC<AmazonAffiliateLinkProps> = ({
  affiliates,
}) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {affiliates?.map((item) => {
            return (
              item && (
                <li key={item.href}>
                  <h2 className={styles.title}>{item?.title}</h2>
                  <Link href={item.href} target="_blank" title={"mesmolugar"}>
                    <div className={styles.testImg}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <button className={styles.btnComprar}>
                      Comprar produto
                    </button>
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
