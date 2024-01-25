import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "./firebaseInit";
import { useAuthValue } from "./AuthenticationContext";
import { toast } from "react-toastify";

const productContext = createContext();

function useProductValue(){
    const value = useContext(productContext);
    return value;
}

function CustomProductContext({children}){
    const {currentUser} = useAuthValue();
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        if(currentUser){
            const unsub = onSnapshot(doc(db, "buyBusy", currentUser.uid), (doc)=>{
                setCart(doc.data().cart);
                setOrder(doc.data().order);
            });
            console.log(cart);
        }
    }, [currentUser]);

    async function handleAddToCart(book){
        try{
            const docRef = doc(db, "buyBusy", currentUser.uid);
            const currentCart = cart;
            const index = currentCart.findIndex(item=>item.id === book.id);
            if(index !== -1){
                const newCart = [...currentCart];
                newCart[index].quantity += 1;
                await updateDoc(docRef, {
                    cart: newCart
                });
            }else{
                const bookObj = {...book, quantity:1};
                
                await updateDoc(docRef,{
                    cart: [bookObj, ...currentCart]
                })
            }
            toast.success("Added to Cart");

        }catch(error){
            console.log("Error in adding to cart -> " + error);
            toast.error("Some Error Occurred");
        }

    }

    async function handleRemoveFromCart(book){
        try{
            const docRef = doc(db, "buyBusy", currentUser.uid);
            const currentCart = cart;
            console.log(currentCart);
            const index = currentCart.findIndex(item => item.id === book.id);
            if(currentCart[index].quantity > 1){
                currentCart[index].quantity -= 1;
                
            }else{
                currentCart.splice(index, 1);
            }

            await updateDoc(docRef, {
                cart: currentCart
            });

            toast.success("Removed from Cart");
        }catch(error){
            console.log("Error while removing from cart -> " + error);
            toast.error("Some Error Occurred");
        }
    }

    async function handleOrderAll(){
        try{
            const docRef = doc(db, "buyBusy", currentUser.uid);
            let currentOrder = [];
            currentOrder = cart.map(item=>item)
            await updateDoc(docRef, {
                cart:[],
                order: currentOrder
            })

            toast.success("Placed All Orders");

        }catch(err){
            console.log("Error in handle order all -> "+err);
            toast.error("Some Error Occurred");
        }
    }

    async function handleOrder(book){
        try {
            const docRef = doc(db, "buyBusy", currentUser.uid);
            let currentOrder = order;
            const currentCart = cart;
            const index = currentCart.findIndex(item => item.id === book.id);
            currentOrder.push(currentCart[index]);
            currentCart.splice(index, 1);
            await updateDoc(docRef, {
                cart: currentCart,
                order: currentOrder
            })
            toast.success("Order Placed");
        } catch (error) {
            console.log("Error in handle Order -> "+error);
            toast.error("Some Error Occurred");
        }
    }

    return(
        <productContext.Provider value={{handleAddToCart,handleRemoveFromCart,handleOrder, handleOrderAll, cart, order}}>
            {children}
        </productContext.Provider>
    )
}

export {useProductValue};
export default CustomProductContext;

