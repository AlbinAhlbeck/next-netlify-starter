import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Image src="/img/title.webp" alt="" width="370px" height="85px" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
