import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value:0
}
export const counter = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment: (state) => {state.value += 1 } ,
        decrement : (state)=> { state.value -= 1} ,

        incrementAmount: (state , actions) => {state.value += actions.payload } ,

    }
})

export const {increment , decrement , incrementAmount} = counter.actions

export default counter.reducer