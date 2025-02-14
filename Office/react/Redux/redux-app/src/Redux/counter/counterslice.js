import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: 0,
  isLoading:false,
  data:null,
  isError:false
}

export const fetchtodos = createAsyncThunk("fetchtodos", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("res",response)
    return response.data ;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: ( state, action) => {
      state.value -= action.payload
    },
    multipy:(state) => {
        state.value *= 2    
    },
    divide:(state) => {
      state.value /= 2    
    },
  },

    // API Calling

  extraReducers : (builder) =>{
    builder.addCase(fetchtodos.pending , (state,action)=>{
      state.isLoading = true ;
    }); 

    builder.addCase(fetchtodos.fulfilled,(state,action)=>{
      state.isLoading = false ;
      state.data = action.payload ;
    });

    builder.addCase(fetchtodos.rejected , (state,action)=>{
      state.isError = true ;
      console.log("Error" , action.payload);
    });
  }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , decrementByAmount , multipy , divide} = counterSlice.actions

export default counterSlice.reducer