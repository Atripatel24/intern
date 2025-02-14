import { configureStore } from "@reduxjs/toolkit";
import  api  from "./Slice/api";

export const store = configureStore({
    reducer:{
        api : api
    }
})