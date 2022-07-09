import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"
import Link from "next/link"

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <div className = {styles.Container}>
            <div className = {styles.item} >
                <div className = {styles.staff}>
            <Link href="/admin/login" passHref>
            <div className={styles.admin}>Admin</div>
            </Link>
            <Link href="/kitchen/kitchenLogin" passHref>
            <div className={styles.admin}>Kitchen</div>
            </Link>
            </div>
            <div className = {styles.callButton}> 
                <Image src= "/img/phone.png" alt="" width="32" height="32"></Image>
            </div>
                <div className={styles.texts}>
                  <div className={styles.text}>ORDER NOW!</div>
                  <div className={styles.text}>832-386-8463</div>
                  <div className={styles.disclaimer}>DISCLAIMER: Not an actual restuarant! School Project</div>
                </div>
            </div>
            <div className = {styles.item}>
                <ul className = {styles.list}>
                <Image src="/img/pizzaLogo.png" alt="" width="135px" height="85px" />
                <Link href="/" passHref>
                    <li className = {styles.listItem}>Home</li>
                </Link>
 
                    <li className = {styles.listItem}>Menu</li> 
                <Link href="/Contact" passHref>
                    <li className = {styles.listItem}>Contact</li>
                </Link>
                <Image src="/img/pizzaLogo.png" alt="" width="135px" height="85px" />
                </ul>
            </div>
            <Link href="/cart" passHref>
            <div className = {styles.item}>
            <div className = {styles.signUp}>Sign Up</div> 
                <div className = {styles.login}>Login</div> 
                <div className = {styles.cart}>
                <a><Image src="/img/cart.png" alt="" width="30px" height="30px" /></a>
                <div className = {styles.counter}>{quantity}</div>
                </div>
            </div>
            </Link>
            
        </div>
    )
}

export default Navbar