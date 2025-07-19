import { createSlice } from "@reduxjs/toolkit"

interface Nav{
    nav: boolean
}
const initialState: Nav = {
    nav: false
}
const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        toggle:(state)=>{
            state.nav = !state.nav
        }
    }
})
export const { toggle } = navSlice.actions
export default navSlice.reducer