import React from 'react'
import styles from '../styles/Order/Order.module.css';
import { useProductValue } from '../ProductContext';
import OrderCard from '../components/OrderCard';

const Orders = () => {
  // fetching the orders from the context
  const {order} = useProductValue();
  let totalPrice = 0;

  //calculating total price
  order.forEach(element => {
    totalPrice += element.price * element.quantity;
  });

  return (
    <div className={styles.orders}>
      <div className={styles.orderList}>
        {order.length ? "" : "No orders currently"}
        {order.map((element)=>(
          <OrderCard item={element}/>
        ))}
      </div>
      <div className={styles.totalPrice}>
        <span className={styles.heading}>Total Price:</span>
        <span className={styles.price}>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Orders
