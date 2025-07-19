import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../../utils/types";

interface Wish{
    wishlist: ProductType[]
}
const initialState: Wish = {
    wishlist: []
}
const wishListSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        clickWishlist:(state,action: PayloadAction<ProductType>)=>{
            const { id } = action.payload
            const format = id.toLowerCase().trim()
            const exists = state.wishlist.find(item => item.id.toLowerCase().trim() === format );
            if (exists) {
                    const updated = state.wishlist.filter(item => item.id.toLowerCase().trim() !== format);
                    state.wishlist = updated;
                    localStorage.setItem("exclusive-wishlist", JSON.stringify(updated));
                } else {
                    const updated = [...state.wishlist, action.payload];
                    state.wishlist = updated;
                    localStorage.setItem("exclusive-wishlist", JSON.stringify(updated));
                }
        },
        loadWish: (state)=>{
            const getWish = localStorage.getItem("exclusive-wishlist")
            if(getWish){
               const convert = JSON.parse(getWish)
               state.wishlist = convert 
            }
        }
    }
})
export const { clickWishlist,loadWish } = wishListSlice.actions
export default wishListSlice.reducer