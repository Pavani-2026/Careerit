import slice from"..//slice/slice"
import { configureStore } from "@reduxjs/toolkit"
const store=configureStore({
    reducer:{
        "example":slice
    }
})
export default store;