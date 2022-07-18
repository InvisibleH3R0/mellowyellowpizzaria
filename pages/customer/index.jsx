import React from 'react'
import styles from "../../styles/Customer.module.css"


const Index = () => {

  return (
    <div className={styles.container}>
        <div className={styles.item}>
        <h1 className={styles.title}>Saved Orders</h1>
        <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Order</th>
                        <th>Total</th>
                    </tr>
                </tbody>
                <tbody>
                    <td>Mellow Yellow Special</td>
                    <td>$13.89</td>
                    <td>
                        <button className={styles.button}>Order Again</button>
                    </td>
                </tbody>
            </table>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>Rewards</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Points Earned</th>
                        <th>Points to Next Reward</th>
                        <th>Reward History</th>
                    </tr>
                </tbody>
                <tbody>
                    <td>4</td>
                    <td>2</td>
                    <td>Redeemed 1 Pizza 5/21/2022</td>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Index