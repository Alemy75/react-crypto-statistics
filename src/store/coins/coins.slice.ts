import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface coinsSlice {
    median: number
    variance: number
}

const initialState: coinsSlice = {
    median: 0,
    variance: 0
}

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        countMedian(state, action: PayloadAction<number[]>) {
            let sum: number = 0
            for (let item of action.payload) {
                sum += item
            }
            state.median = (sum / action.payload.length)
        },
        countVariance(state, action: PayloadAction<number[]>) {
            const n = action.payload.length;
            const mean = action.payload.reduce((acc, val) => acc + val, 0) / n;
            const deviations = action.payload.map(val => val - mean);
            const squaredDeviations = deviations.map(val => val ** 2);
            const variance = squaredDeviations.reduce((acc, val) => acc + val, 0) / n;
            state.variance = variance
        }
    },
})

// Action creators are generated for each case reducer function
export const coinsAction = coinSlice.actions

export default coinSlice.reducer