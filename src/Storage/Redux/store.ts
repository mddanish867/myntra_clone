import { configureStore } from "@reduxjs/toolkit";
import { productCategoryReducer } from "./productCategorySlice";
import productCategoryApi from "../../Apis/productCategoryApi";

const store:any = configureStore({
  reducer: {
    productCategoryStore: productCategoryReducer,  
    [productCategoryApi.reducerPath]: productCategoryApi.reducer,       
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productCategoryApi.middleware)    

});

export type RootState = ReturnType<typeof store.getState>;
export default store;