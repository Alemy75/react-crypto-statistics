import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface coinsSlice {
    median: number
    variance: number
    min: number
    max: number
}

const initialState: coinsSlice = {
    median: 0,
    variance: 0,
    min: 0,
    max: 0
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
        },
        findMinMax(state, action: PayloadAction<number[]>) {
            let min = action.payload[0];
            let max = action.payload[0];
            
            for(let i = 1; i < action.payload.length; i++) {
              if(action.payload[i] < min) {
                min = action.payload[i];
              }
              if(action.payload[i] > max) {
                max =action.payload[i];
              }
            }
            state.min = min
            state.max = max
        }
    },
})

// Action creators are generated for each case reducer function
export const coinsAction = coinSlice.actions

export default coinSlice.reducer