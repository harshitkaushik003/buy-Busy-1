import styles from '../styles/OrderCard/OrderCard.module.css';
export default function OrderCard({item}){
    return(
        <>
        <div className={styles.orderMain}>
            <div className={styles.contentLeft}>
                <img src={item.image} alt="" />
            </div>
            <div className={styles.contentRight}>
                <span className={styles.name}><strong>Book Name:</strong> {item.name}</span>
                <span className={styles.author}><strong>Author:</strong> {item.author}</span>
                <span className={styles.quantity}><strong>Quantity:</strong> {item.quantity}</span>
                <span className={styles.price}><strong>Price:</strong> ${item.price}</span>
            </div>
        </div>
        </>
    )
}