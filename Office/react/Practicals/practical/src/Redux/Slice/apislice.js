import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getdata = createAsyncThunk('getdata', async () => {
    const res = await axios.get("https://6710ca37a85f4164ef2f4dab.mockapi.io/crud")
            return res.data
})

const initialState = {
    isLoading : false ,
    data : null ,
    isError : false 
}

export const api = createSlice ({
    name:'api',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getdata.pending , (state,action)=>{
            state.isLoading = true ;
        })

        builder.addCase(getdata.fulfilled , (state,action)=>{
            state.data = action.payload ;
            state.isLoading = false ;
        })

        builder.addCase(getdata.rejected , (state,action)=>{
            state.isError = true ;
            console.log("error" , action.payload)
            // state.data = action.payload
        })
    }           
})

export default api.reducer