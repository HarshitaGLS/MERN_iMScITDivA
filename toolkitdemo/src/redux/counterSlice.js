import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0, title:"Counter using redux"},
    reducers:{//pure functions
        INCREMENT : (state,action)=>{
            state.count = state.count+1
        },
        DECREMENT(state,action){
            //action = {type:"counter/DECREMNT",payload:5}
            // state.count > 1 ? state.count-=1 : state.count=1
            state.count = state.count-action.payload
        }
        }
})
// console.log(counterSlice)
export const {INCREMENT,DECREMENT} = counterSlice.actions
export default counterSlice