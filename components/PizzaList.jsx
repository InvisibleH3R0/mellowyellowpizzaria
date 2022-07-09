import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";


const PizzaList = ({pizzaList}) => {
  return (
    <div className = {styles.container}>
        <h1 className={styles.title}>The Mellowist Pizza in Town!</h1>
        <p className={styles.desc}>
            Mellow Yellow Pizzaria is a local Family Owned business providing
            the community with tasty pizza made with Heart and Soul!
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
    </div>
  )
}

export default PizzaList