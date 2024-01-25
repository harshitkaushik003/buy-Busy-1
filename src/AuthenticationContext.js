import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';
import {db} from './firebaseInit';
import { createContext,useContext,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth();

const authContext = createContext();

function useAuthValue(){
    const value = useContext(authContext);
    return value;
}

function CustomAuthContext({children}){

    const [currentUser, setCurrentUser] = useState(null);

    onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user);
    })

    const handleSignUp = async (email, password, name)=>{
        try{
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;
    
            const userData = {
                name:name,
                email:email,
                cart:[],
                order:[]
            }
    
            await setDoc(doc(db, 'buyBusy', user.uid), userData);
            toast.success("Signed Up Successfully");
    
        }catch(error){
            console.log("Error in sign up -> ", error);
            if (error.code === 'auth/weak-password') {
                toast.error('Password must be at least 6 characters long.');
            }else{
                toast.error("Some Error Occurred");
            }
        }
    }
    
    const handleSignIn = async(email, password)=>{
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Successfully Signed in");

        } catch (error) {
           console.log("Error in sign in -> ", error);
           if (error.code === 'auth/invalid-credential') {
            toast.error('Invalid credentials. Please check your username and password.');
          }else{
            toast.error("Some Error Occurred");
          }
        }
    }
    
    const handleSignOut = async()=>{
        try{
            await signOut(auth);
            toast.success("Successfully Logged Out");
        }catch(error){
            toast.error("Error in Sign up");
        }
    }

    return(
        <authContext.Provider value={{currentUser, handleSignUp, handleSignIn, handleSignOut}}>
            <ToastContainer/>
            {children}
        </authContext.Provider>
    )
}

export {useAuthValue};
export default CustomAuthContext;




