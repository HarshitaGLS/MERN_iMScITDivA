import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
const mystore = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})
export default mystore