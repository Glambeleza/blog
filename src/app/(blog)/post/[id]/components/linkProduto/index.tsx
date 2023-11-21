import React from "react";
import styles from "./index.module.css";
import { IoLogoAmazon } from "react-icons/io5";
import { SiShopee } from "react-icons/si";
import { AiOutlineShop } from "react-icons/ai";
import Image from "next/image";
import { AffiliateLinkProps } from "../../page";
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
          <Image alt={alt} src={imgSrc} width={300} height={300} />

          <nav>
            <ul className={styles.list}>
              {href.map((item) => (
                <Link href={item.href} target="_blank" key={item.to}>
                  <li key={item.to}>
                    <div className={styles.logoPlataform}>
                      {item.platform === "amazon" ? (
                        <IoLogoAmazon />
                      ) : item.platform === "shopee" ? (
                        <SiShopee />
                      ) : (
                        <AiOutlineShop />
                      )}
                    </div>
                    <button className={styles.btnComprar}>
                      Comprar {item.to}
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
