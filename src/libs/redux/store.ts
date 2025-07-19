import {configureStore} from "@reduxjs/toolkit"
import cart from "./slice/cartSlice"
import wishlist from "./slice/wishlistSclice"
import toggle from"./slice/navSlice"
export const store = configureStore({
    reducer: {
        cart: cart,
        wishlist: wishlist,
        nav: toggle,
    }
})
 export type RootState = ReturnType<typeof store.getState>
 export type AppDispatch = typeof store.dispatch