import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';


const auth = getAuth();
const handleSignUp = async (email, password, name)=>{
    try{
        await createUserWithEmailAndPassword(auth, email, password);
    }catch(error){
        return;
    }
}

const handleSignIn = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return;
    }
}

const handleSignOut = async(auth)=>{
    try{
        await signOut(auth);
    }catch(error){
        return;
    }
}

const currentUser = auth.currentUser();
export {currentUser, handleSignUp, handleSignIn,handleSignOut}
