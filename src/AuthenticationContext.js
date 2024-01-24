import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';
import {db} from './firebaseInit';
import { createContext,useContext,useState } from 'react';
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
    
        }catch(error){
            console.log("Error in sign up -> ", error);
        }
    }
    
    const handleSignIn = async(email, password)=>{
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(currentUser);
        } catch (error) {
           console.log("Error in sign in -> ", error);
        }
    }
    
    const handleSignOut = async()=>{
        try{
            await signOut(auth);
        }catch(error){
            return;
        }
    }

    return(
        <authContext.Provider value={{currentUser, handleSignUp, handleSignIn, handleSignOut}}>
            {children}
        </authContext.Provider>
    )
}

export {useAuthValue};
export default CustomAuthContext;




