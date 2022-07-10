import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Product from "../models/Product";
import dbConnect from "../utilities/mongo";
import mongoose from "mongoose";

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Mellow Yellow Pizzaria</title>
        <meta name="description" content="Created by Yellow project team at CTU" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}

export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || ""
  let admin = false

  await dbConnect()
  
  if(myCookie.token === process.env.TOKEN){
    admin = true
  }
  const res = await Product.find()
  return{
    props:{
      pizzaList:JSON.parse(JSON.stringify(res)),
      admin,
    }
  }
}
