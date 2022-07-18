import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Menu.module.css";
import Product from "../models/Product";
import dbConnect from "../utilities/mongo";

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}

export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || ""
  let admin = false

  if(myCookie.token === process.env.TOKEN){
    admin = true
  }

  await dbConnect()

  const res = await Product.find()
  return{
    props:{
      pizzaList:JSON.parse(JSON.stringify(res)),
      admin,
    }
  }
}