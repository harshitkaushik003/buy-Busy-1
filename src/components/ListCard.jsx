import { useProductValue } from '../ProductContext';
import styles from '../styles/ListCard/ListCard.module.css';
import Button from './Button';

export default function ListCard({item}){
    const {handleRemoveFromCart, handleOrder} = useProductValue();
    return(
        <>
        <div className={styles.listMain}>
            <div className={styles.listContent}>
                <div className={styles.listLeft}>
                    <span className={styles.heading}>{item.name}</span>
                    <span className={styles.desc}>{item.author}</span>
                </div>
                <div className={styles.listRight}>
                    <img src={item.image} alt="" />
                </div>
            </div>
            <div className={styles.listFooter}>
                <span className={styles.footer1}>x {item.quantity}</span>
                <span className={styles.footer}>${item.price}</span>
            </div>
            <div className={styles.bottomButtons}>
                <div className={styles.btn}>
                    <Button color={"#03DCA5"} textColor={"black"} text={"Buy"} onClick={handleOrder} arg={item}/>
                </div>
                <div className={styles.btn}>
                    <Button color={"#2A4166"} textColor={"White"} text={"Delete From Cart"} onClick={handleRemoveFromCart} arg={item}/>
                </div>
            </div>
        </div>
        </>
    )
}