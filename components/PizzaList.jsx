import styles from "../styles/PizzaList.module.css";
import Image from "next/image";
import { useState } from "react";
import PizzaCard from "./PizzaCard";
import { useRef } from "react";
import { useEffect } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;
//    <Image src={"/img/köttfärslimpa.jpg"} layout = "fill" />
const PizzaList = ({ pizzaList }) => {
  
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pizzaList.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className= {styles.slideshow}>
      <div
        className= {styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
      </div>
          <div className = {styles.slide}>  
            <PizzaCard key={pizzaList[index]._id} pizza={pizzaList[index]} />
          </div>
        ))
      </div>
      
  );
}

export default PizzaList;
