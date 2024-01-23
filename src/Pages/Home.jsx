import React from 'react'
import styles from '../styles/Home/Home.module.css'
import myImage from '../images/header.jpeg';
const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.header}>
            <div className={styles.headerText}>
                <h1>Discover Boundless Worlds:</h1>
                <span>
                Your Online Destination for Endless Stories!
                </span>
            </div>
            <div className={styles.headerImage}>
                <img src={myImage} alt="" />
            </div>
        </div>
        <div className={styles.main}></div>
    </div>
  )
}

export default Home
