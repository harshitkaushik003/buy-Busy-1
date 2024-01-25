import React from 'react'
import { useProductValue } from '../ProductContext'
import styles from '../styles/Cart/Cart.module.css';
import Button from '../components/Button';
import ListCard from '../components/ListCard';

const Cart = () => {
    const {cart,handleOrderAll} = useProductValue();
    return (
        <>
        <div className={styles.cartMain}>
            <div className={styles.btn}>
                {/* display order all only if cart is not empty */}
                {cart.length ? <Button color="black" textColor="white" text="Order All" onClick={handleOrderAll} /> : "Cart is Empty"}
            </div> 
            {cart.map((book)=>(
                <ListCard item={book}/>
            ))}
            
        </div>  
        </>
    )
}

export default Cart;
