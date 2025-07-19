import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartType, ProductType } from "../../../utils/types";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

interface Cart{
    cart: CartType[]|[]
}

const initialState: Cart={
    cart: [] 
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add: (state,action:PayloadAction<{product:ProductType,quantity: number}>)=>{
            const quant = action.payload.quantity
            const target_Product = action.payload.product
            const addedQuantity = {...target_Product,quantity:quant,uid: uuidv4()}
            const added = [...state.cart,addedQuantity]
            state.cart = added
            toast.success("item added to cart")
            localStorage.setItem("exclusive-cart",JSON.stringify(added))
        },
        addQuantity: (state, action: PayloadAction<{ product: CartType; quantity: number }>) => {
            const { product, quantity } = action.payload;
            const updatedCart = state.cart.map(item => item.uid === product.uid? { ...item, quantity: item.quantity + quantity }:item).filter(item => item.quantity > 0);
            state.cart = updatedCart;
            localStorage.setItem("exclusive-cart", JSON.stringify(updatedCart));
        },
        remove: (state, action: PayloadAction<{ product: CartType; quantity?: number }>) => {
            const { product, quantity } = action.payload;
            const updatedCart = state.cart.map(item => item.uid === product.uid? { ...item, quantity: item.quantity - (quantity || 1) }:item).filter(item => item.quantity > 0);
            state.cart = updatedCart;
            localStorage.setItem("exclusive-cart", JSON.stringify(updatedCart));
        },
        update:(state,action:PayloadAction<CartType[]>)=>{
            const save = state.cart = action.payload.filter(product=>product.quantity>0)
            localStorage.setItem("exclusive-cart",JSON.stringify(save))
            toast.success("cart updated")
        },
        load:(state)=>{
            const getState = localStorage.getItem("exclusive-cart")
            if(getState){
                state.cart = JSON.parse(getState)
            }
        },
        checkout:(state)=>{
            state.cart=[]
            toast.success("order is submitted")
            localStorage.removeItem("exclusive-cart")
        }
    }
})

export const { add,remove,update,load,addQuantity,checkout } = cartSlice.actions
export default cartSlice.reducer