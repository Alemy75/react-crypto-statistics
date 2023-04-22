import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICoin, TCoinId } from "../../models/coins.model"

export const coinsApi = createApi({
	reducerPath: 'coins/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.coingecko.com/api/v3/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		getCoins: build.query<ICoin[], any>({
			query: () => ({
				url: `coins/`,
			}),
		}),
		getCoin: build.query<ICoin, TCoinId>({
			query: (id: string) => ({
				url: `/coins/${id}/`,
			}),
		}),
	})
})

export const {useGetCoinsQuery, useGetCoinQuery} = coinsApi