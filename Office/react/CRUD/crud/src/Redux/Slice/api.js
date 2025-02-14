import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isLoading : false ,
    data : null ,
    isError : false 
}

export const postdata = createAsyncThunk('postdata', async (data)=>{
    await axios.post("https://6710ca37a85f4164ef2f4dab.mockapi.io/crud" ,data)
})

export const getdata = createAsyncThunk ('getdata', async () =>{
    const res = await axios.get("https://6710ca37a85f4164ef2f4dab.mockapi.io/crud")
    return res.data
})

export const deletedata = createAsyncThunk('deletedata' , async (id)=>{
    await axios.delete(`https://6710ca37a85f4164ef2f4dab.mockapi.io/crud/${id}`)
})

export const updatedata = createAsyncThunk('updatedata' , async (data)=>{
    // console.log('update',data)
    // console.log('id',data.id)
    await axios.put(`https://6710ca37a85f4164ef2f4dab.mockapi.io/crud/${data.id}`,data)
})


export const api = createSlice({
    name:'api',
    initialState,
    extraReducers:(builder) =>{

        // post data api

        builder.addCase(postdata.pending , (state,action)=>{
            state.isLoading = true ;
        })

        builder.addCase(postdata.fulfilled ,(state , action)=>{
            state.data = action.payload;
            state.isLoading = false ;
        })

        builder.addCase(postdata.rejected,(state,action)=>{
            state.isError = true ;
            console.log("error",action.payload)
        })


        // Get data api 

        builder.addCase(getdata.pending , (state,action)=>{
            state.isLoading = true ;
        })
        builder.addCase(getdata.fulfilled , (state,action)=>{
            state.data = action.payload;
            state.isLoading = false ;
        }) 
        builder.addCase(getdata.rejected , (state,action)=>{
            state.isError = true ;
            console.log("error",action.payload)
        })

        //  Delete data api

        builder.addCase(deletedata.pending , (state,action)=>{
            state.isLoading = true ;
        })

        builder.addCase(deletedata.fulfilled , (state,action)=>{
            state.isLoading = false ;
        })

        builder.addCase(deletedata.rejected , (state,action)=>{
            state.isError = true ;
            console.log('error',action.payload)
        })

         //  update data api

         builder.addCase(updatedata.pending , (state,action)=>{
            state.isLoading = true ;
        })

        builder.addCase(updatedata.fulfilled , (state,action)=>{
            state.isLoading = false ;
            // console.log('ud',action.payload)
            state.data = action.payload
        })

        builder.addCase(updatedata.rejected , (state,action)=>{
            state.isError = true ;
            console.log('error',action.payload)
        })

    }
})

export const {} = api.actions ;

export default api.reducer 