import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_BASE_URL} from "../constants/base_URL";

export const advertsApi = createApi({
        reducerPath: 'advertsApi',
        baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
        endpoints: (builder) => ({
            getAdvertsByPage: builder.query({
            query: (page) => `adverts/?page=${page}&limit=8`
        }),
            getAllAdverts: builder.query({
                query: () => `adverts`
            })
    }),
    })

export const { useGetAdvertsByPageQuery, useGetAllAdvertsQuery } = advertsApi
