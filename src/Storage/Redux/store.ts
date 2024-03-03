import { configureStore } from "@reduxjs/toolkit";
import { productCategoryReducer } from "./productCategorySlice";
import productCategoryApi from "../../Apis/productCategoryApi";
import { promotionTypeReducer } from "./promotionSlice";
import promotionApi from "../../Apis/prmotionApi";

const store:any = configureStore({
  reducer: {
    productCategoryStore: productCategoryReducer,  
    promotionStore:promotionTypeReducer,
    [productCategoryApi.reducerPath]: productCategoryApi.reducer,     
    [promotionApi.reducerPath]: promotionApi.reducer,     

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productCategoryApi.middleware)    
      .concat(promotionApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export default store;