import React from 'react';
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from 'next/link';

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <div className={styles.pizzaItem}>
      <div className={styles.pizzaImageBox}>
      <Link href={`/product/${pizza._id}`} passHref>
      <a><Image src={pizza.img} alt="" className={styles.pizzaImage} width="500" height="500"/></a>
      </Link></div>
      </div>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>
            {pizza.desc}
        </p>
    </div>
  );
};

export default PizzaCard;