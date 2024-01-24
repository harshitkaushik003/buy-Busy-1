import React from 'react'
import styles from '../styles/Navbar/Navbar.module.css'
import { Outlet, NavLink } from 'react-router-dom'
import { useAuthValue } from '../AuthenticationContext';

const Navbar = () => {
    const {currentUser} = useAuthValue();

  return (
    <>
    <div className={styles.Navbar}>
        <NavLink to='/' className={styles.navLink}>
            <div className={styles.logo}>
                <img src="https://cdn-icons-png.flaticon.com/128/6384/6384646.png" alt="" />
                <div className={styles.siteName}>buyBusy</div>
            </div>
        </NavLink>

        <div className={styles.navContent}>
            <NavLink to='/orders' className={styles.navLink}>
                <div className={styles.contentText}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2728/2728447.png" alt="" />
                    <span>Orders</span>
                </div>
            </NavLink>
            <NavLink to='/cart' className={styles.navLink}>
                <div className={styles.contentText}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" alt="" />
                    <span>Cart</span>
                </div>
            </NavLink>
            <NavLink to={currentUser ? `${currentUser.uid}/profile` :'/sign-in'} className={styles.navLink}>
                <div className={styles.contentText}>
                    <img src="https://cdn-icons-png.flaticon.com/128/10809/10809648.png" alt="" />
                    <span>{currentUser ? currentUser.email : "login"}</span>
                </div>     
            </NavLink>

        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
