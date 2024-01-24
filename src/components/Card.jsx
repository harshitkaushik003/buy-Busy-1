import React from 'react'
import styles from '../styles/Card/Card.module.css';
import Button from './Button';
import { useProductValue } from '../ProductContext';
const Card = ({book}) => {
    const {handleAddToCart} = useProductValue();
    function addtoCart(){
        handleAddToCart(book);
    }
    return (
        <>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={book.image} alt="" />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardText}>
                    <span className={styles.heading}>
                        {book.name}
                    </span>
                    <span className={styles.author}>
                        {book.author}
                    </span>
                </div>
                <div className={styles.cardPrice}>
                    <span className={styles.price}>
                        ${book.price}
                    </span>
                </div>
                
            </div>
            <Button onClick={addtoCart} color={"#03DCA5"} textColor={"black"} text="Add to Cart"/>
        </div>
        
        </>
    
    )
}

export default Card
