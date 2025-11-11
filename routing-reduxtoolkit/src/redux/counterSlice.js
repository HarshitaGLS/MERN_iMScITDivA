import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        INCREMENT:(state,action)=>{
            // console.log(action)
            // state.count = state.count+1
            state.count = state.count+action.payload
        },
        DECREMENT(state,action){
            if(state.count>1)
                state.count-=1
            else 
                state.count=1
        }
    }
})
// console.log(counterSlice)
export default counterSlice.reducer
export const {INCREMENT,DECREMENT} = counterSlice.actions