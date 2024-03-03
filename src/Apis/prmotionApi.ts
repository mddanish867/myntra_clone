import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const promotionApi = createApi({
  reducerPath: "promotionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7051/api/",
    // Authorization
    // prepareHeaders: (headers: Headers, api) => {
    //   const token = localStorage.getItem("token");
    //   token && headers.append("Authorization", "Bearer " + token);
    // },
  }),
  tagTypes: ["GetPromotion"],
  endpoints: (builder) => ({
    // Get Promotion details by Promotion Type
    getPromotionDetails: builder.query({
        query: (promotionType) => ({
          url: `Promotions/all_promotions?promotionType=${promotionType}`,
        }),
      providesTags: ["GetPromotion"],
    }),
  }),
});

export const { useGetPromotionDetailsQuery } = promotionApi;
export default promotionApi;
