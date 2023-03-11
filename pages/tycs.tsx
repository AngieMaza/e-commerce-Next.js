import { NextPage, GetServerSideProps } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";
import { TEXTS_BY_LANGUAGE } from "../locale/constants";
import { useRouter } from "next/router";

interface Props{
  data:TyCsAPIResponse
}

const TerminosYCondiciones: NextPage<Props> = ({data}:Props) => {
  const language = useRouter().locale as keyof typeof TEXTS_BY_LANGUAGE;
    
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre </title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>
      <h2>{TEXTS_BY_LANGUAGE[language].MAIN.TYCS}</h2>
      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lan = context.locale
  const res = await fetch(process.env.BASE_URL+ "/api/tycs/" + lan)
  const data :TyCsAPIResponse = await res.json();  
  return {
    props: { data }
  }
}
export default TerminosYCondiciones;
