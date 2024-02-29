import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCategory: [],
    // search: "",
};

export const productCategorySlice = createSlice({
    name:"ProductCategory",
    initialState:initialState,
    reducers:{
        setProductCategory: (state, action) =>{
            state.productCategory = action.payload;
        },
        // // for Banner search 
        // setSearchItem: (state, action) =>{
        //     state.search = action.payload;
        // },
    },
});

export const {setProductCategory} = productCategorySlice.actions;
export const productCategoryReducer = productCategorySlice.reducer;