import React from "react";
import styles from "./linkProduto.module.css";
import { IoLogoAmazon } from "react-icons/io5";
import { SiShopee } from "react-icons/si";
import { AiOutlineShop } from "react-icons/ai";

export interface AffiliateLinkProps {
  href: string;
  irPara: string;
  plataforma: "amazon" | "shopee" | "site";
}

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
          <img alt={alt} src={imgSrc} />

          <nav>
            <ul className={styles.list}>
              {href.map((item) => (
                <li key={item.irPara}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <div className={styles.logoPlataform}>
                      {item.plataforma === "amazon" ? (
                        <IoLogoAmazon />
                      ) : item.plataforma === "shopee" ? (
                        <SiShopee />
                      ) : (
                        <AiOutlineShop />
                      )}
                    </div>
                    <button className={styles.btnComprar}>
                      Comprar {item.irPara}
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};
