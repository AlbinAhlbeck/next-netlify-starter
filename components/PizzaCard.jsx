import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} width="1200" height = "700" alt = "" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.price}>{pizza.price}:-</p>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
