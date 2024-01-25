import React from 'react'
import { useProductValue } from '../ProductContext'
import styles from '../styles/Cart/Cart.module.css';
import Button from '../components/Button';
import ListCard from '../components/ListCard';
const Cart = () => {
    const {cart,handleRemoveFromCart,handleOrder, handleOrderAll} = useProductValue();
    return (
        <>
        <div className={styles.cartMain}>
            {cart.map((book)=>(
                <ListCard item={book}/>
            ))}
            <Button color="black" textColor="white" text="Order All" onClick={handleOrderAll} />
        </div>  
        </>
    )
}

{/*<div className={styles.cartContent}>
<span>{book.name}</span>
<span>x{book.quantity}</span>
<div className={styles.btn}>
    <Button color="black" textColor="white" text="Remove" onClick={handleRemoveFromCart} arg={book} />
</div>
<div className={styles.btn}>
    <Button color="lightblue" textColor="black" text="Order" onClick={handleOrder} arg={book} />
</div>
</div>*/}
export default Cart;
