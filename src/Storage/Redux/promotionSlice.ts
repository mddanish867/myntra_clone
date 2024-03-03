import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    promotionType: [],    
};

export const promotionSlice = createSlice({
    name:"Promotions",
    initialState:initialState,
    reducers:{
        setPromotions: (state, action) =>{
            state.promotionType = action.payload;
        },       
    },
});
export const {setPromotions} = promotionSlice.actions;
export const promotionTypeReducer = promotionSlice.reducer;