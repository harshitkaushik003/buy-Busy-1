import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import styles from '../styles/signIn/SignIn.module.css';
import { Link } from 'react-router-dom';
import { useAuthValue } from '../AuthenticationContext';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const {handleSignUp} = useAuthValue();
    
    function signup(){

        handleSignUp(email, password, name);
        nameRef.current.value = '';
        emailRef.current.value = '';
        passRef.current.value = '';

        console.log("sign up clicked");
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.heading}>
                    <h2>Create New User</h2>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <input type="text" ref={nameRef} placeholder='Enter Name' onChange={(event)=>setName(event.target.value)} />
                        <input type="text" ref={emailRef} placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)}/>
                        <input type="password" ref={passRef} name="" id="" placeholder='Enter Password' onChange={(event)=>setPassword(event.target.value)} />
                    </form>
                </div>
                <div className={styles.button}>
                    <Button color="#1C224B" onClick={signup} textColor={"white"} text={"Sign Up"}/>
                    <Link to='/sign-in' ><Button color="#03DCA5" textColor={"black"} text={"Already Registered? Sign In here"}/></Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
