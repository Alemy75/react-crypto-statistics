import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Utils } from '../../utils/coin.utils'


export interface coinsSlice {
    mean: number
    variance: number
    min: number
    max: number
    median: number
    forecastValue: number
    absoluteGrowth: number
    growthTemp: number
    pregrowthTemp: number
    trendStatus: boolean
    forecastStatus: boolean
    difference: number
}

const initialState: coinsSlice = {
    mean: 0,
    variance: 0,
    min: 0,
    max: 0,
    median: 0,
    forecastValue: 0,
    absoluteGrowth: 0,
    growthTemp: 0,
    pregrowthTemp: 0,
    trendStatus: false,
    forecastStatus: false,
    difference: 0

}

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        calculateStatistics(state, action: PayloadAction<number[]>) {
            const [min, max] = Utils.findMinMax(action.payload)
            state.max = max
            state.min = min
            state.mean = Utils.countMean(action.payload)
            state.variance = Utils.countVariance(action.payload)
            state.median = Utils.countMedian(action.payload)
            state.absoluteGrowth = Utils.calculateAbsoluteGrowth(action.payload)
            state.growthTemp = Utils.calculateGrowthRate(action.payload)
            state.difference = Utils.calculateDifference(action.payload)
        },
        setForecastValue(state, action: PayloadAction<number>) {
            state.forecastValue = action.payload
            state.forecastStatus = true
        },
        isForecast(state) {
            state.forecastStatus = !state.forecastStatus
            state.forecastValue = 0
        },
        isTrend(state) {
            state.trendStatus = !state.trendStatus
        },
    },
})

// Action creators создаются для каждого метода редьюсера
export const coinsAction = coinSlice.actions

export default coinSlice.reducer