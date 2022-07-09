import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" priority/> 
            </div>
            <div className={styles.item}>
               <div className={styles.card}>
                 <h2 className={styles.motto}>
                    WE MELLOW OUT YOUR HUNGER!
                 </h2>
               </div>
               <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                        0801 Django Rd.
                        <br /> Python, Tx 77321
                        <br /> 832-386-8463
                    </p>
               </div>
               <div className={styles.card}>
               <h1 className={styles.title}>WORKING HOURS</h1>
                  <p className={styles.text}>
                    MONDAY - FRIDAY
                    <br />11 AM - 1030 PM
                  </p>
                  <p className={styles.text}>
                    SATURDAY - SUNDAY
                    <br />11 AM - Midnight
                  </p>
               </div>
            </div>
        </div>
    )
}

export default Footer