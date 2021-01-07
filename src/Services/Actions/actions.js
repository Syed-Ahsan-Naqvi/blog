import {ADD_TO_CART, REMOVE_TO_CART} from "../constants";
 export function addToCart(data) {
    //  console.warn('action',data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}


export function removeToCart() {
     console.warn('action')
    return{
        type:REMOVE_TO_CART,
        
    }
}





