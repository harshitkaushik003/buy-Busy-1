import { doc, getDoc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebaseInit";
import { useAuthValue } from "./AuthenticationContext";

const productContext = createContext();

function useProductValue(){
    const value = useContext(productContext);
    return value;
}

function CustomProductContext({children}){
    const {id} = useParams();
    const {currentUser} = useAuthValue();
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);

    async function handleAddToCart(book){
        try{
            const docRef = doc(db, "buyBusy", currentUser.uid);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            const currentCart = docSnap.data().cart || [];
            setCart(currentCart);
            await updateDoc(docRef,{
                cart: [book, ...currentCart]
            })
        }catch(error){
            console.log("Error in adding to cart -> " + error);
        }

    }

    return(
        <productContext.Provider value={{handleAddToCart}}>
            {children}
        </productContext.Provider>
    )
}

export {useProductValue};
export default CustomProductContext;

