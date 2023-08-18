import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk("FetchData", async()=>{
  let data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  let result = await data.json();
  return result;
})

const CartSlice = createSlice({
    name : 'cart',
    initialState:{
     
    },
   
})
export default CartSlice.reducer