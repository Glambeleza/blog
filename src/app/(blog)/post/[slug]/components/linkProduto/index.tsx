import React from "react";
import styles from "./index.module.css";
import { IoLogoAmazon } from "react-icons/io5";
import { SiShopee } from "react-icons/si";
import { AiOutlineShop } from "react-icons/ai";
import Image from "next/image";
import { AffiliateLinkProps } from "@/src/data/types/post";
import Link from "next/link";

interface AmazonAffiliateLinkProps {
  href: AffiliateLinkProps[];
  imgSrc: string;
  alt: string;
}

export const AffiliateLink: React.FC<AmazonAffiliateLinkProps> = ({
  href,
  imgSrc,
  alt,
}) => {
  return (
    <div className={styles.container}>
      {imgSrc && (
        <>
          <Image alt={alt} src={imgSrc} width={250} height={250} />

          <nav>
            <ul className={styles.list}>
              {href.map((item) => (
                <Link href={item.href} target="_blank" key={item.to}>
                  <li key={item.to}>
                    <div className={styles.logoPlataform}>
                      {item.platform === "amazon" ? (
                        <>
                          <IoLogoAmazon className={styles.iconStore} />
                          <p className={styles.site}>Amazon</p>
                        </>
                      ) : item.platform === "shopee" ? (
                        <>
                          <SiShopee className={styles.iconStore} />
                          <p className={styles.site}>Shopee</p>
                        </>
                      ) : (
                        <>
                          <AiOutlineShop className={styles.iconStore} />
                          <p className={styles.site}>Loja</p>
                        </>
                      )}
                    </div>
                    <button className={styles.btnComprar}>
                      Comprar produto 💰
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};
