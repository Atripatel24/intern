import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./Slice/counter";
import  api from "./Slice/apislice";

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        api:api
    }
})