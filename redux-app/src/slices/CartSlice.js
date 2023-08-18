import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk("FetchData", async()=>{
  let data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  let result = await data.json();
  return result;
})

const CartSlice = createSlice({
    name : 'cart',
    initialState:{
      data:null,
      isLoading: false,
      isError: false
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchData.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(FetchData.fulfilled, (state,action)=>{
            state.data= action.payload
            state.isLoading = false
        })
        builder.addCase(FetchData.rejected, (state,action)=>{
            state.data= console.log("Error",action.payload);
            state.isError = true;
        })
    }
})
export default CartSlice.reducer