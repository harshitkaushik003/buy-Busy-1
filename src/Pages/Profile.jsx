import { doc, getDoc } from "firebase/firestore";
import styles from '../styles/Profile/Profile.module.css';
import { db } from "../firebaseInit";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useAuthValue } from "../AuthenticationContext";


function Profile(){
    const {handleSignOut} = useAuthValue();
    const navigate = useNavigate();
    function signOut(){
        handleSignOut();
        navigate('/');
    }
    const {id} = useParams();
    console.log(id);
    const [userData, setUserData] = useState('');
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const docRef = doc(db, "buyBusy", id);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()){
                    setUserData(docSnap.data());
                    console.log(userData);
                }else{
                    console.log("Doc doesnot exists");
                }
            }catch(error){
                console.log("Error in profile -> " + error);
            }
        };
        fetchData();
    }, [id]);
    
    return(
        <>
        <div className={styles.profileContainer}>
            <div className={styles.Content}>
                <span className={styles.field}>
                    Name
                </span>
                <span className={styles.value}>
                    {userData.name}
                </span>
            </div>
            <div className={styles.Content}>
                <span className={styles.field}>
                    Email
                </span>
                <span className={styles.value}>
                    {userData.email}
                </span>
            </div>
            <div className={styles.btn}>
                <Button color={'#03DCA5'} textColor={'black'} onClick={signOut} text={"Sign Out"}/>
            </div>
           
        </div>
        </>
    )
}

export default Profile;