import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { TEXTS_BY_LANGUAGE } from "../locale/constants";
import styles from "../styles/Home.module.css";
import { Product, ProductsAPIResponse } from "../types";

interface Props{
  data:ProductsAPIResponse
}


const Home: NextPage<Props> = ({data} : Props) => {
  const language : string | undefined = useRouter().locale;
  
  if (!data) return null;
  const formatPrice: (price: number) => string = (price) =>
    price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const renderRatingStars: (
    rating: number,
    maxStars?: number
  ) => JSX.Element[] = (rating, maxStars = 5) =>
    Array.from({ length: maxStars }).map((_, index) => (
      <Image
        key={index}
        alt={index <= rating ? "yellow star" : "empty star"}
        src={index <= rating ? "/yellowStar.png" : "/emptyStar.png"}
        layout="fixed"
        width={20}
        height={20}
      />
    ));

  const renderProductCard: (product: Product) => JSX.Element = ({
    id,
    title,
    description,
    rating,
    image,
    price,
  }) => (
    <div className={styles.card} key={id}>
      <h2>{title}</h2>
      <p>
        {renderRatingStars(rating)}
        <b className={styles.price}>${formatPrice(price)}</b>
      </p>
      <div className={styles.imageDescription}>
        <Image
          src={image}
          layout="fixed"
          width={100}
          height={130}
          alt={title}
        />
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Tienda Libre - {TEXTS_BY_LANGUAGE[language].MAIN.PRODUCTS}</title>
        <meta
          name="description"
          content="listado de productos destacados de Tienda Libre"
        />
      </Head>
      <main className={styles.main}>
        <h1>{TEXTS_BY_LANGUAGE[language].MAIN.PRODUCTS}</h1>
        <div className={styles.grid}>{data.map(renderProductCard)}</div>
      </main>
      <footer className={styles.footer}>
        <span>Powered by</span>
        <span className={styles.logo}>
          <Image
            src="/dh.png"
            alt="Digital House Logo"
            width={30}
            height={30}
          />
        </span>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lan = context.locale
  const res = await fetch(process.env.BASE_URL+ "/api/products/" + lan)
  const data : ProductsAPIResponse = await res.json();  
  return {
    props: { data }
  }
}

export default Home;
