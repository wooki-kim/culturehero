import { IProfile } from "../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const feedListApi = createApi({
  reducerPath: "feedListApi",
  tagTypes:['Feed'],
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    getFeedList: build.query<IProfile[], string>({
      query: (id:string) => `/feedList/${id}?type=normal`,
    }),
    getAllFeedList: build.query<IProfile[], string>({
      query: (id:string) => `/feedList/${id}?type=all`,
    }),
    getFeed: build.query<IProfile[], string>({
      query: (id:string) => `/feed/${id}`,
    }),
    
  }),
});

export const { useGetFeedListQuery,useGetAllFeedListQuery,useGetFeedQuery } = feedListApi;
