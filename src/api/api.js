import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const api=createAsyncThunk("example",async(data1)=>{
  const{data}=await axios.post("https://jsonplaceholder.typicode.com/posts",
    data1,
    {headers:{
        "content-Type":"application/json",
        "Authorization":"Bearer dummy_token_123"
    }})
  return data;
})
export default api;

