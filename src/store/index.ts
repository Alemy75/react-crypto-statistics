import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coinsApi } from "./coins/coins.api";

export const store = configureStore({
	reducer : {
		[coinsApi.reducerPath]: coinsApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coinsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>