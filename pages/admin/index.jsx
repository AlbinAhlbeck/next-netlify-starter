import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import AddButton from "/components/AddButton";
import Add from "/components/Add";

const Index = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
const [close, setClose] = useState(true);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Produkter</h1>
        {<AddButton setClose={setClose} />}
        {!close && <Add setClose={setClose} />}
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Bild</th>
              <th>Id</th>
              <th>Titel</th>
              <th>Pris</th>
              <th></th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.price}:-</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products: productRes.data,
    },
  };
};

export default Index;
