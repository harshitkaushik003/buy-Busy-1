import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import styles from '../styles/signIn/SignIn.module.css';
import {Link,useNavigate} from 'react-router-dom';
import { useAuthValue } from '../AuthenticationContext';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [paswd, setPaswd] = useState('');

    const emailRef = useRef();
    const passRef = useRef();

    const {currentUser, handleSignIn} = useAuthValue();
    const navigate = useNavigate();
    function signin(){
        handleSignIn(email, paswd);
        console.log(currentUser);
        console.log("sign-in clicked");
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.heading}>
                    <h2>Sign In</h2>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <input type="text" ref={emailRef} placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)}/>
                        <input type="password" ref={passRef} name="" id="" placeholder='Enter Password' onChange={(event)=>setPaswd(event.target.value)} />
                    </form>
                </div>
                <div className={styles.button}>
                    <Button color="#1C224B" onClick={signin} textColor={"white"} text={"Sign In"}/>
                    <Link to='/sign-up' ><Button color="#03DCA5" textColor={"black"} text={"New User ? Register here"}/></Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
