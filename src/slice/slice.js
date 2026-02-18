import api from "../api/api";
import{createSlice}from "@reduxjs/toolkit"
const slice=createSlice({
    name:"example",
    initialState:{
        data:{},
        loading:false,
        error:""
    },
    extraReducers:(builder)=>{
        
        builder.addCase(api.pending,(state,action)=>{
            state.data={};
            state.loading=false;
            state.error=""
        })
         builder.addCase(api.pending,(state,action)=>{
            state.data=action.payload;
            state.loading=true;
            state.error=""
         })
          builder.addCase(api.pending,(state,action)=>{
            state.data={};
            state.loading=true;
            state.error="Network error"
          })
    
    
    }
})
export default slice;