import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"
import Link from "next/link"

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <div className = {styles.Container}>
            <div className = {styles.item} >
            <div className = {styles.callButton}> 
                <Image src= "/img/phone.png" alt="" width="32" height="32"></Image>
            </div>
                <div className={styles.texts}>
                  <div className={styles.text}>ORDER NOW!</div>
                  <div className={styles.text}>832-386-8463</div>
                </div>
            </div>
            <div className = {styles.item}>
                <ul className = {styles.list}>
                <Image src="/img/pizzaLogo.png" alt="" width="135px" height="85px" />
                <Link href="/" passHref>
                    <li className = {styles.listItem}>Home</li>
                </Link>
                    <li className = {styles.listItem}>Products</li>
                    <li className = {styles.listItem}>Menu</li> 
                    <li className = {styles.listItem}>Contact</li>
                <Image src="/img/pizzaLogo.png" alt="" width="135px" height="85px" />
                </ul>
            </div>
            <Link href="/cart" passHref>
            <div className = {styles.item}>
                <div className = {styles.cart}>
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                <div className = {styles.counter}>{quantity}</div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Navbar