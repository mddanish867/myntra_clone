import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productCategoryApi = createApi({
  reducerPath: "productCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7051/api/",
    // Authorization
    // prepareHeaders: (headers: Headers, api) => {
    //   const token = localStorage.getItem("token");
    //   token && headers.append("Authorization", "Bearer " + token);
    // },
  }),
  tagTypes: ["ProductCategory"],
  endpoints: (builder) => ({
    getProductCategory: builder.query({
      query: () => ({
        url: "Categories",
      }),
      providesTags: ["ProductCategory"],
    }),
     // Egt Categories details by main category or category
     getProductCategoryDetails: builder.query({
      query: (category) => ({
        url: `Categories/all_category?maincategory=${category}`,
      }),
      providesTags: ["ProductCategory"],
    }),
    // getMenuItemById: builder.query({
    //   query: (id) => ({
    //     url: `menuItem/${id}`,
    //   }),
    //   providesTags: ["MenuItems"],
    // }),
    // createMenuItem: builder.mutation({
    //   query: (data) => ({
    //     url: "menuitem",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["MenuItems"],
    // }),
    // updateMenuItem: builder.mutation({
    //   query: ({ data, id }) => ({
    //     url: "menuitem/" + id,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["MenuItems"],
    // }),
    // deleteMenuItem: builder.mutation({
    //   query: (id) => ({
    //     url: "menuitem/" + id,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["MenuItems"],
    // }),
  }),
});

export const {
  useGetProductCategoryQuery,
  useGetProductCategoryDetailsQuery,
//   useGetMenuItemByIdQuery,
//   useCreateMenuItemMutation,
//   useUpdateMenuItemMutation,
//   useDeleteMenuItemMutation,
} = productCategoryApi;
export default productCategoryApi;