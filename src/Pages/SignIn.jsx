import React from 'react'
import Button from '../components/Button'
import styles from '../styles/signIn/SignIn.module.css';
import {Link} from 'react-router-dom';
const SignIn = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.heading}>
                <h2>Sign In</h2>
            </div>
            <div className={styles.form}>
                <form action="">
                    <input type="text" placeholder='Enter Email'/>
                    <input type="password" name="" id="" placeholder='Enter Password' />
                </form>
            </div>
            <div className={styles.button}>
                <Button color="#1C224B" textColor={"white"} text={"Sign In"}/>
                <Link to='/sign-up' ><Button color="#03DCA5" textColor={"black"} text={"New User ? Register here"}/></Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn
