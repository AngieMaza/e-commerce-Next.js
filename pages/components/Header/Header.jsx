import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import {locales, localeNames , TEXTS_BY_LANGUAGE } from '../../../locale/constants';
import { useRouter } from "next/router";

const Header = () => {
  const path = useRouter();
  const language = path.locale;
  
  return(
    <header className={styles.header}>
    <div>
      <figure>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </figure>
      <div className={styles.appName}>
        <p>tienda</p>
        <p>libre</p>
      </div>
    </div>
    <div className={styles.navbar}>
      <Link href="./">{TEXTS_BY_LANGUAGE[language].HEADER.PRODUCTS}</Link>
      <Link href="./tycs">{TEXTS_BY_LANGUAGE[language].HEADER.TYCS}</Link>
    </div>
    <div className={styles.navbar}>
      {Object.keys(locales).map((lan) => {
        return (
          <Link href={path.asPath} key={lan} locale={locales[lan]}>
            {localeNames[locales[lan]]}
          </Link>
        )
      })}
    </div>
  </header>
  )
}
export default Header;
