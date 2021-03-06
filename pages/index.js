import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Resturang Niagara</title>
        <meta name="description" content="Resturang Niagara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`${process.env.API_ENDPOINT}/products`);
  //const res = await axios.get(`https://food-display-api.herokuapp.com/products`);
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
